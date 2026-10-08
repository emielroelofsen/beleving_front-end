// Sound effects controller for carwash.html
// Plays configured sounds when the camera is within a given distance of station objects.

import * as THREE from 'three';

export class SoundEffectsController {
  /**
   * @param {object} sceneSetup - SceneSetup instance (getScene, getCamera)
   * @param {Array<{ audioPath: string, volume?: number, times?: number | null, ... }>} config - soundEffects from sound-effects-config
   */
  constructor(sceneSetup, config = [], backgroundPath = null) {
    this.sceneSetup = sceneSetup;
    this.config = Array.isArray(config) ? config : [];
    this.backgroundPath = backgroundPath || null;
    this.audioCache = new Map();
    this.backgroundAudio = null;
    this.state = new Map(); // per-config: { wasInRange, playCount, exhausted }
    this.isRunning = false;
    this._rafId = null;
    this._warnedMissing = new Set();
    this._userHasInteracted = false;
    this._interactionListeners = [];
    this._isMuted = false;
    this._preloadPromises = [];
    // Only true once startBackgroundMusic() was called (e.g. Spotify fallback),
    // so unmuting never starts the loop next to the Spotify playlist.
    this._backgroundRequested = false;

    this._preloadBackground();
    this._preloadAll();
    this._initState();
    this._setupUserInteractionListener();
  }

  _preloadBackground() {
    if (!this.backgroundPath) return;
    try {
      const audio = new Audio(this.backgroundPath);
      audio.preload = 'auto';
      audio.loop = false;
      this.backgroundAudio = audio;
      const p = new Promise((resolve, reject) => {
        audio.addEventListener('canplaythrough', () => resolve(), { once: true });
        audio.addEventListener('error', (e) => reject(e), { once: true });
      });
      this._preloadPromises.push(p);
    } catch (e) {
      console.warn(`[SoundEffects] Failed to preload background ${this.backgroundPath}:`, e);
    }
  }

  _setupUserInteractionListener() {
    const handleInteraction = () => {
      if (this._userHasInteracted) return;
      this._userHasInteracted = true;
      // Background audio is started only via startBackgroundMusic() (e.g. when user presses Start)
      // Remove listeners after first interaction
      this._interactionListeners.forEach(({ event, handler, options }) => {
        document.removeEventListener(event, handler, options);
      });
      this._interactionListeners = [];
    };

    // Listen for various user interaction events
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      const handler = handleInteraction;
      const options = { once: true, passive: true };
      document.addEventListener(event, handler, options);
      this._interactionListeners.push({ event, handler, options });
    });
  }

  _playBackgroundAudio() {
    if (!this.backgroundAudio || !this.isRunning || this._isMuted || !this._backgroundRequested) return;
    try {
      this.backgroundAudio.currentTime = 0;
      this.backgroundAudio.play().catch((e) => {
        if (e?.name !== 'AbortError') console.warn('[SoundEffects] Background play failed:', e);
      });
    } catch (e) {
      console.warn('[SoundEffects] Background play error:', e);
    }
  }

  _preloadAll() {
    this.config.forEach((entry, index) => {
      if (!entry.audioPath) return;
      try {
        const audio = new Audio(entry.audioPath);
        audio.preload = 'auto';
        const v = entry.volume;
        audio.volume = typeof v === 'number' && !Number.isNaN(v) ? Math.max(0, Math.min(1, v)) : 1;
        this.audioCache.set(index, audio);
        const p = new Promise((resolve, reject) => {
          audio.addEventListener('canplaythrough', () => resolve(), { once: true });
          audio.addEventListener('error', (e) => reject(e), { once: true });
        });
        this._preloadPromises.push(p);
      } catch (e) {
        console.warn(`[SoundEffects] Failed to preload ${entry.audioPath}:`, e);
      }
    });
  }

  /**
   * Returns a Promise that resolves when all background and effect audio have preloaded.
   * Use this to keep the loading screen visible until sound is ready.
   */
  whenPreloadComplete() {
    if (!this._preloadPromises || this._preloadPromises.length === 0) {
      return Promise.resolve();
    }
    return Promise.allSettled(this._preloadPromises).then(() => {});
  }

  _initState() {
    this.config.forEach((_, index) => {
      this.state.set(index, {
        wasInRange: false,
        playCount: 0,
        exhausted: false
      });
    });
  }

  /**
   * Check if an object belongs to a station (via userData.stationId on root).
   * @param {THREE.Object3D} object
   * @param {string} stationId
   * @param {THREE.Scene} scene
   * @returns {boolean}
   */
  _belongsToStation(object, stationId, scene) {
    if (!stationId) return true;
    let current = object;
    while (current.parent && current.parent !== scene) {
      current = current.parent;
    }
    return current.userData && current.userData.stationId === stationId;
  }

  /**
   * Find the first object (group or mesh) matching objectName in the given station.
   * @param {THREE.Scene} scene
   * @param {string} stationId
   * @param {string} objectName
   * @returns {THREE.Object3D | null}
   */
  _findObject(scene, stationId, objectName) {
    const searchName = objectName;
    let found = null;

    scene.traverse((child) => {
      if (found) return;
      const name = child.name || '';

      if (name !== searchName) return;

      if (!this._belongsToStation(child, stationId, scene)) return;
      found = child;
    });

    return found;
  }

  _getObjectWorldPosition(obj, out = new THREE.Vector3()) {
    if (!obj || !obj.getWorldPosition) return null;
    try {
      if (obj.updateMatrixWorld) obj.updateMatrixWorld(true);
      obj.getWorldPosition(out);
      return out;
    } catch (e) {
      return null;
    }
  }

  _update() {
    if (!this.isRunning) return;

    const scene = this.sceneSetup.getScene();
    const camera = this.sceneSetup.getCamera();
    if (!scene || !camera) {
      this._rafId = requestAnimationFrame(() => this._update());
      return;
    }

    const camPos = camera.position;

    this.config.forEach((entry, index) => {
      const s = this.state.get(index);
      if (!s || s.exhausted) return;

      let inRange = false;

      // Check if this is a z-index-based trigger
      if (entry.triggerZ !== undefined || (entry.startZ !== undefined && entry.endZ !== undefined)) {
        const currentZ = camPos.z;
        
        if (entry.triggerZ !== undefined) {
          // Exact z position trigger (with small tolerance)
          const tolerance = 0.5;
          inRange = Math.abs(currentZ - entry.triggerZ) <= tolerance;
        } else if (entry.startZ !== undefined && entry.endZ !== undefined) {
          // Z range trigger (inclusive of startZ, exclusive of endZ)
          // Since z values are negative and decreasing, check: currentZ <= startZ && currentZ > endZ
          inRange = currentZ <= entry.startZ && currentZ > entry.endZ;
        }
      } else {
        // Distance-based trigger (original behavior)
        const obj = this._findObject(scene, entry.stationId, entry.objectName);
        if (!obj) {
          if (!this._warnedMissing.has(index)) {
            this._warnedMissing.add(index);
            console.warn(`[SoundEffects] Object "${entry.objectName}" in station "${entry.stationId}" not found.`);
          }
          return;
        }

        const worldPos = this._getObjectWorldPosition(obj);
        if (!worldPos) return;

        const distance = camPos.distanceTo(worldPos);
        inRange = distance <= entry.distance;
      }

      if (inRange && !s.wasInRange) {
        s.wasInRange = true;
        if (entry.times !== null && s.playCount >= entry.times) {
          s.exhausted = true;
          return;
        }

        const audio = this.audioCache.get(index);
        if (audio && !this._isMuted) {
          try {
            audio.currentTime = 0;
            audio.play().catch((e) => {
              if (e?.name !== 'AbortError') console.warn('[SoundEffects] Play failed:', e);
            });
            s.playCount++;
            if (entry.times !== null && s.playCount >= entry.times) {
              s.exhausted = true;
            }
          } catch (e) {
            console.warn('[SoundEffects] Play error:', e);
          }
        }
      } else if (!inRange) {
        s.wasInRange = false;
      }
    });

    this._rafId = requestAnimationFrame(() => this._update());
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    // Re-setup interaction listener if user hasn't interacted yet
    if (!this._userHasInteracted && this._interactionListeners.length === 0) {
      this._setupUserInteractionListener();
    }
    // Only play background audio if user has already interacted
    if (this._userHasInteracted) {
      this._playBackgroundAudio();
    }
    this._rafId = requestAnimationFrame(() => this._update());
  }

  stop() {
    this.isRunning = false;
    if (this.backgroundAudio) {
      this.backgroundAudio.pause();
    }
    if (this._rafId != null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    // Clean up interaction listeners
    this._interactionListeners.forEach(({ event, handler, options }) => {
      document.removeEventListener(event, handler, options);
    });
    this._interactionListeners = [];
  }

  /**
   * Update config and reset state. Call after changing soundEffects.
   * @param {Array} config
   */
  setConfig(config, backgroundPath = null) {
    const wasRunning = this.isRunning;
    this.stop();
    this.config = Array.isArray(config) ? config : [];
    this.backgroundPath = backgroundPath ?? this.backgroundPath;
    this._warnedMissing.clear();
    this.audioCache.clear();
    this.backgroundAudio = null;
    this.state.clear();
    this._preloadBackground();
    this._preloadAll();
    this._initState();
    if (wasRunning) this.start();
  }

  /**
   * Call synchronously inside a user gesture (Start click) when the loop is only a fallback.
   * Plays the loop muted and pauses it right away, so iOS/Chrome allow a later
   * startBackgroundMusic() from a timer outside the gesture.
   */
  unlockBackgroundMusic() {
    const audio = this.backgroundAudio;
    if (!audio || this._backgroundRequested) return;
    try {
      audio.muted = true;
      const restore = () => {
        if (!this._backgroundRequested) {
          audio.pause();
          audio.currentTime = 0;
        }
        audio.muted = this._isMuted;
      };
      const p = audio.play();
      if (p && typeof p.then === 'function') p.then(restore, restore);
      else restore();
    } catch (e) {
      audio.muted = this._isMuted;
    }
  }

  /**
   * Start background music. Call this when the user presses Start (not on first generic interaction).
   */
  startBackgroundMusic() {
    this._userHasInteracted = true;
    this._backgroundRequested = true;
    this._playBackgroundAudio();
  }

  /**
   * Mute or unmute all audio
   * @param {boolean} muted - true to mute, false to unmute
   */
  setMuted(muted) {
    this._isMuted = muted;
    
    // Mute/unmute background audio
    if (this.backgroundAudio) {
      this.backgroundAudio.muted = muted;
      if (!muted && this.isRunning && this._userHasInteracted) {
        // Resume playing if unmuted
        this._playBackgroundAudio();
      }
    }
    
    // Mute/unmute all sound effects
    this.audioCache.forEach((audio) => {
      if (audio) {
        audio.muted = muted;
      }
    });
  }

  /**
   * Toggle mute state
   * @returns {boolean} - new muted state
   */
  toggleMute() {
    this.setMuted(!this._isMuted);
    return this._isMuted;
  }

  /**
   * Get current mute state
   * @returns {boolean}
   */
  isMuted() {
    return this._isMuted;
  }
}
