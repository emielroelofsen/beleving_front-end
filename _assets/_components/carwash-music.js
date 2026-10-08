// Background music for carwash.html: plays the Spotify playlist of the SOP chosen
// when the voucher was created (voucher_layout -> SOAP_OPTIONS[idx - 1].playlist).
// Falls back to the mp3 loop of SoundEffectsController when Spotify can't play
// (script blocked, iOS autoplay restrictions, embed error).

import { SOAP_OPTIONS, SPOTIFY_DEFAULT_PLAYLIST_URI } from '../_js/maakbon-config.js';

const FALLBACK_TIMEOUT_MS = 4000;
const API_TIMEOUT_MS = 8000;

let controller = null;
let ready = false;
let started = false;
let muted = false;
let isPlaying = false;
let spotifyFailed = false;
let fallbackStarted = false;
let fallbackTimer = null;

function getPlaylistUri(voucher) {
  const layoutIdx = voucher?.voucher_layout?.value ?? voucher?.voucher_layout;
  const sop = SOAP_OPTIONS[Number(layoutIdx) - 1];
  return sop?.playlist || SPOTIFY_DEFAULT_PLAYLIST_URI;
}

function waitForIFrameAPI() {
  if (window.__spotifyIFrameAPI) return Promise.resolve(window.__spotifyIFrameAPI);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Spotify iframe API not loaded')), API_TIMEOUT_MS);
    window.addEventListener('spotify-iframe-ready', () => {
      clearTimeout(timer);
      resolve(window.__spotifyIFrameAPI);
    }, { once: true });
  });
}

function startFallback(reason) {
  spotifyFailed = true;
  clearTimeout(fallbackTimer);
  if (controller) {
    const p = controller.pause();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }
  if (!started || fallbackStarted) return;
  fallbackStarted = true;
  console.warn('[CarwashMusic] Spotify unavailable, using fallback loop:', reason);
  window.soundEffectsController?.startBackgroundMusic?.();
}

let hasPlayedOnce = false;

function safeResume() {
  if (!controller || !ready || spotifyFailed) return;
  // play() starts a freshly loaded embed; resume() only continues after a pause.
  const p = hasPlayedOnce ? controller.resume() : controller.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

function safePause() {
  if (!controller || !ready) return;
  const p = controller.pause();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

async function init() {
  try {
    const voucher = await (window.__voucherPreload || Promise.resolve()).then(() => window.__voucherData);
    const uri = getPlaylistUri(voucher);
    const IFrameAPI = await waitForIFrameAPI();
    const el = document.getElementById('carwashSpotifyEmbed');
    if (!el || !IFrameAPI) throw new Error('Spotify embed element or API missing');

    IFrameAPI.createController(el, { uri, width: 300, height: 80 }, (ctrl) => {
      controller = ctrl;
      // The 'ready' event can fire before listeners are attached, so treat the
      // controller as usable right away (same approach as maakbon-sop.js).
      ready = true;
      // Start was pressed before the embed existed: start now.
      if (started && !muted && !spotifyFailed) safeResume();
      ctrl.addListener('playback_update', (e) => {
        const data = e?.data;
        if (!data) return;
        isPlaying = data.isPaused === false;
        if (isPlaying) {
          hasPlayedOnce = true;
          clearTimeout(fallbackTimer);
          // Never play Spotify and the fallback loop at the same time.
          if (fallbackStarted || muted) safePause();
        }
      });
      ctrl.addListener('playback_error', (e) => startFallback(e?.data || 'playback_error'));
    });
  } catch (err) {
    startFallback(err?.message || err);
  }
}

window.carwashMusic = {
  /** Call on the Start button click (user gesture). */
  play() {
    started = true;
    // Still inside the user gesture: unlock the fallback loop so it may start later from a timer.
    window.soundEffectsController?.unlockBackgroundMusic?.();
    if (muted) return;
    if (spotifyFailed) {
      startFallback('spotify failed before start');
      return;
    }
    safeResume();
    clearTimeout(fallbackTimer);
    fallbackTimer = setTimeout(() => {
      if (!isPlaying) startFallback('no playback within timeout');
    }, FALLBACK_TIMEOUT_MS);
  },
  setMuted(value) {
    muted = !!value;
    if (muted) {
      clearTimeout(fallbackTimer);
      safePause();
    } else if (started && !spotifyFailed) {
      this.play();
    }
  },
  isActive() {
    return !spotifyFailed;
  },
};

init();
