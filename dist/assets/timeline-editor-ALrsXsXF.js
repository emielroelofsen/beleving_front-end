import{c as r,a as h,g as I}from"./carwash-C8hqWEHh.js";import"./wensen-config-BhkFHgpr.js";class w{constructor(e,t){this.checkpointController=e,this.cameraController=t,this.isVisible=!1,this.points=[],this.namePoints=[],this.lottiePoints=[],this.selectedPointIndex=null,this.selectedNamePointIndex=null,this.selectedCheckpointIndex=null,this.selectedLottiePointIndex=null,this.isTestPlaying=!1,this.originalTimeline=null,this.manualStartZ=null,this.manualEndZ=null,this.dashboardItems=[],this.initUI()}initUI(){const e=document.createElement("div");e.id="timelineBar",e.className="timeline-bar-container",e.style.display="none",e.innerHTML=`
      <div class="timeline-bar-header">
        <button id="timelineAddBtn" class="timeline-icon-btn" title="Add Point">+</button>
        <button id="timelineAddNamePointBtn" class="timeline-icon-btn" title="Add Name Point">🏷️</button>
        <button id="timelineAddCheckpointBtn" class="timeline-icon-btn" title="Add Checkpoint">📍</button>
        <button id="timelineAddLottieBtn" class="timeline-icon-btn" title="Add Lottie">🎬</button>
        <button id="timelineSlideNamesBtn" class="timeline-icon-btn" title="Edit Slide Names">📝</button>
        <button id="timelineSettingsBtn" class="timeline-icon-btn" title="Settings">⚙</button>
        <button id="timelineTestBtn" class="timeline-icon-btn" title="Test">▶</button>
        <button id="timelineStopBtn" class="timeline-icon-btn" title="Stop" style="display: none;">⏹</button>
        <button id="timelineSaveBtn" class="timeline-icon-btn" title="Save Timeline">💾</button>
        <button id="timelineExportBtn" class="timeline-icon-btn" title="Export All Checkpoints">📋</button>
        <button id="timelineCloseBtn" class="timeline-icon-btn" title="Close">×</button>
      </div>
      <div class="timeline-track-container">
        <div class="timeline-tracks-wrapper" id="timelineTracksWrapper">
          <div class="timeline-track-row">
            <div class="timeline-track-label">Checkpoints</div>
            <div class="timeline-track timeline-track-compact" id="timelineCheckpointTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Points</div>
            <div class="timeline-track timeline-track-compact" id="timelineTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Names</div>
            <div class="timeline-track timeline-track-compact" id="timelineNameTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Lottie</div>
            <div class="timeline-track timeline-track-compact" id="timelineLottieTrack"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),this.createDialogs(),this.loadCheckpointTimeline(),this.setupEventListeners()}createDialogs(){const e=document.createElement("div");e.id="addPointDialog",e.className="timeline-dialog",e.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addPointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="addPointZ" step="0.1" value="0">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="addPointSpeed" step="0.1" value="2" min="0.1">
          </label>
          <label>
            Easing:
            <select id="addPointEasing" style="padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
              <option value="easeInOut" selected>easeInOut</option>
              <option value="easeIn">easeIn</option>
              <option value="easeOut">easeOut</option>
              <option value="ease">ease</option>
              <option value="linear">linear</option>
            </select>
          </label>
          <label>
            Pause (seconds):
            <input type="number" id="addPointPause" step="0.1" value="0" min="0">
          </label>
          <label>
            Change Dashboard Text To (optional):
            <div style="display: flex; gap: 5px; align-items: center;">
              <select id="addPointCheckpointName" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
                <option value="">-- None --</option>
                <option value="__NEW__">+ Add New Checkpoint Name</option>
              </select>
              <input type="text" id="addPointCheckpointNameNew" placeholder="New name" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; display: none;">
            </div>
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addPointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addPointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const t=document.createElement("div");t.id="editPointDialog",t.className="timeline-dialog",t.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editPointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="editPointZ" step="0.1">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="editPointSpeed" step="0.1" min="0.1">
          </label>
          <label>
            Easing:
            <select id="editPointEasing" style="padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
              <option value="easeInOut">easeInOut</option>
              <option value="easeIn">easeIn</option>
              <option value="easeOut">easeOut</option>
              <option value="ease">ease</option>
              <option value="linear">linear</option>
            </select>
          </label>
          <label>
            Pause (seconds):
            <input type="number" id="editPointPause" step="0.1" min="0">
          </label>
          <label>
            Change Dashboard Text To (optional):
            <div style="display: flex; gap: 5px; align-items: center;">
              <select id="editPointCheckpointName" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
                <option value="">-- None --</option>
                <option value="__NEW__">+ Add New Checkpoint Name</option>
              </select>
              <input type="text" id="editPointCheckpointNameNew" placeholder="New name" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; display: none;">
            </div>
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updatePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedPoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editPointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const i=document.createElement("div");i.id="settingsDialog",i.className="timeline-dialog",i.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Timeline Settings</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('settingsDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <h4>Z Range (for accurate indicator)</h4>
          <label>
            Start Z (left edge):
            <input type="number" id="timelineStartZ" step="0.1" placeholder="Auto">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.setStartZFromCamera()">Use Camera</button>
          </label>
          <label>
            End Z (right edge):
            <input type="number" id="timelineEndZ" step="0.1" placeholder="Auto">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.setEndZFromCamera()">Use Camera</button>
          </label>
          <div style="display: flex; gap: 10px; margin: 10px 0;">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.applyZRange()">Apply Range</button>
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.resetZRange()">Reset to Auto</button>
          </div>
          <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.1);">
          <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.clearTimeline()">Clear All Points</button>
          <button class="timeline-btn" onclick="window.timelineEditor.useCurrentZ()">Use Current Camera Z</button>
          <button class="timeline-btn" onclick="window.timelineEditor.showDashboardEditor()">Edit Dashboard Text</button>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('settingsDialog')">Close</button>
          </div>
        </div>
      </div>
    `;const o=document.createElement("div");o.id="dashboardEditorDialog",o.className="timeline-dialog",o.innerHTML=`
      <div class="timeline-dialog-content" style="max-width: 600px;">
        <div class="timeline-dialog-header">
          <h3>Dashboard Text Items</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('dashboardEditorDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <p style="margin-bottom: 15px; color: rgba(255,255,255,0.7);">Edit the text displayed on dashboard items for each checkpoint.</p>
          <div id="dashboardItemsList" style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
            <!-- Dashboard items will be populated here -->
          </div>
          <div class="timeline-dialog-actions" style="margin-top: 15px;">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.saveDashboardItems()">Save</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('dashboardEditorDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const n=document.createElement("div");n.id="addCheckpointDialog",n.className="timeline-dialog",n.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Checkpoint</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addCheckpointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Checkpoint Name/ID:
            <input type="text" id="addCheckpointName" placeholder="e.g., Start, Message, Media" required>
          </label>
          <label>
            Z Position:
            <input type="number" id="addCheckpointZ" step="0.1" value="0">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="addCheckpointSpeed" step="0.1" value="2" min="0.1">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addCheckpointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addCheckpointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const a=document.createElement("div");a.id="editCheckpointDialog",a.className="timeline-dialog",a.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Checkpoint</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editCheckpointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Checkpoint Name/ID:
            <input type="text" id="editCheckpointName" required>
          </label>
          <label>
            Z Position:
            <input type="number" id="editCheckpointZ" step="0.1">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="editCheckpointSpeed" step="0.1" min="0.1">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateCheckpointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedCheckpoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editCheckpointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const l=document.createElement("div");l.id="slideNamesDialog",l.className="timeline-dialog",l.innerHTML=`
      <div class="timeline-dialog-content" style="max-width: 600px;">
        <div class="timeline-dialog-header">
          <h3>Edit Slide Names</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('slideNamesDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <p style="margin-bottom: 15px; color: rgba(255,255,255,0.7);">Edit the text that appears in the dashboard slider for each checkpoint. These are created from timeline points with checkpoint names.</p>
          <div id="slideNamesList" style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
            <!-- Slide names will be populated here -->
          </div>
          <div class="timeline-dialog-actions" style="margin-top: 15px;">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.saveSlideNames()">Save</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('slideNamesDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const s=document.createElement("div");s.id="addNamePointDialog",s.className="timeline-dialog",s.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Name Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addNamePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="addNamePointZ" step="0.1" value="0">
          </label>
          <label>
            Name/Label:
            <input type="text" id="addNamePointName" placeholder="Enter name or label" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addNamePointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addNamePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const c=document.createElement("div");c.id="editNamePointDialog",c.className="timeline-dialog",c.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Name Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editNamePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="editNamePointZ" step="0.1">
          </label>
          <label>
            Name/Label:
            <input type="text" id="editNamePointName" placeholder="Enter name or label" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateNamePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedNamePoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editNamePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const p=document.createElement("div");p.id="addLottiePointDialog",p.className="timeline-dialog",p.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Lottie Animation</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addLottiePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Lottie URL:
            <input type="text" id="addLottiePointUrl" placeholder="https://lottie.host/example.lottie" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <label>
            Play at Z Position (when to start):
            <input type="number" id="addLottiePointPlayZ" step="0.1" value="0">
          </label>
          <label>
            Stop at Z Position (when to stop, optional):
            <input type="number" id="addLottiePointStopZ" step="0.1" placeholder="Leave empty to play until end">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addLottiePointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addLottiePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;const d=document.createElement("div");d.id="editLottiePointDialog",d.className="timeline-dialog",d.innerHTML=`
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Lottie Animation</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editLottiePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Lottie URL:
            <input type="text" id="editLottiePointUrl" placeholder="https://lottie.host/example.lottie" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <label>
            Play at Z Position (when to start):
            <input type="number" id="editLottiePointPlayZ" step="0.1">
          </label>
          <label>
            Stop at Z Position (when to stop, optional):
            <input type="number" id="editLottiePointStopZ" step="0.1" placeholder="Leave empty to play until end">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateLottiePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedLottiePoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editLottiePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),document.body.appendChild(t),document.body.appendChild(s),document.body.appendChild(c),document.body.appendChild(i),document.body.appendChild(n),document.body.appendChild(a),document.body.appendChild(o),document.body.appendChild(l),document.body.appendChild(p),document.body.appendChild(d)}setupEventListeners(){document.getElementById("timelineAddBtn").addEventListener("click",()=>{const t=this.cameraController?this.cameraController.camera.position.z:0;document.getElementById("addPointZ").value=t.toFixed(1),this.populateCheckpointDropdown("addPointCheckpointName"),this.setupCheckpointNameInput("addPointCheckpointName","addPointCheckpointNameNew");const i=document.getElementById("addPointCheckpointNameNew");i&&(i.style.display="none",i.value=""),this.showDialog("addPointDialog")}),document.getElementById("timelineAddNamePointBtn").addEventListener("click",()=>{const t=this.cameraController?this.cameraController.camera.position.z:0;document.getElementById("addNamePointZ").value=t.toFixed(1),document.getElementById("addNamePointName").value="",this.showDialog("addNamePointDialog")}),document.getElementById("timelineAddCheckpointBtn").addEventListener("click",()=>{const t=this.cameraController?this.cameraController.camera.position.z:0;document.getElementById("addCheckpointZ").value=t.toFixed(1),document.getElementById("addCheckpointName").value="",this.showDialog("addCheckpointDialog")}),document.getElementById("timelineAddLottieBtn").addEventListener("click",()=>{const t=this.cameraController?this.cameraController.camera.position.z:0;document.getElementById("addLottiePointPlayZ").value=t.toFixed(1),document.getElementById("addLottiePointUrl").value="",document.getElementById("addLottiePointStopZ").value="",this.showDialog("addLottiePointDialog")}),document.getElementById("timelineSlideNamesBtn").addEventListener("click",()=>{this.showSlideNamesDialog()});const e=document.querySelector(".timeline-track-container");e&&e.addEventListener("click",t=>{const i=document.getElementById("timelineTrack");if(t.target===i||t.target.classList.contains("timeline-track-container")||t.target.classList.contains("timeline-empty")){const o=i.getBoundingClientRect(),n=t.clientX-o.left,a=Math.max(0,Math.min(100,n/o.width*100)),l=[];this.points.length>0&&l.push(...this.points.map(m=>m.z)),this.namePoints.length>0&&l.push(...this.namePoints.map(m=>m.z)),r.length>0&&l.push(...r.map(m=>m.z));let s,c,p;if(l.length===0)s=-50,c=50,p=100;else{s=Math.min(...l),c=Math.max(...l);const m=(c-s)*.1||10;s-=m,c+=m,p=c-s||1}const d=c-a/100*p;document.getElementById("addCheckpointZ").value=d.toFixed(1),document.getElementById("addCheckpointName").value="",this.showDialog("addCheckpointDialog")}}),document.getElementById("timelineSettingsBtn").addEventListener("click",()=>{document.getElementById("timelineStartZ").value=this.manualStartZ!==null?this.manualStartZ:"",document.getElementById("timelineEndZ").value=this.manualEndZ!==null?this.manualEndZ:"",this.showDialog("settingsDialog")}),document.getElementById("timelineTestBtn").addEventListener("click",()=>{this.testAnimation()}),document.getElementById("timelineStopBtn").addEventListener("click",()=>{this.stopAnimation()}),document.getElementById("timelineSaveBtn").addEventListener("click",()=>{this.saveTimeline()}),document.getElementById("timelineExportBtn").addEventListener("click",()=>{this.exportCheckpoints()}),document.getElementById("timelineCloseBtn").addEventListener("click",()=>{this.hide()})}loadCheckpointTimeline(){const e=r[0];if(h&&h.settings){this.manualStartZ=h.settings.startZ,this.manualEndZ=h.settings.endZ,console.log(`Loaded Z range from checkpointConfig: Start=${this.manualStartZ}, End=${this.manualEndZ}`);const t=I();t&&Array.isArray(t)&&t.length>0?this.points=t.map(i=>({z:i.z,speed:i.duration||i.speed||2,easing:i.easing||"easeInOut",pause:i.pause||0})):h.timeline&&Array.isArray(h.timeline)&&h.timeline.length>0?this.points=this.convertTimelineToPoints(h.timeline,(e==null?void 0:e.z)||0):this.points=[],h.labels&&Array.isArray(h.labels)&&h.labels.length>0?(this.namePoints=h.labels.map(i=>({z:i.z,name:i.name||"Name"})),this.sortNamePoints()):h.namePoints&&Array.isArray(h.namePoints)?(this.namePoints=h.namePoints.map(i=>({z:i.z,name:i.name||i.checkpointName||"Name"})),this.sortNamePoints()):h.timeline?(this.namePoints=[],h.timeline.forEach(i=>{if(i.checkpointName){let o;i.type==="move"?o=i.toZ:i.type==="pause"&&(o=i.atZ),o!==void 0&&(this.namePoints.find(a=>(a.name===i.checkpointName||a.checkpointName===i.checkpointName)&&Math.abs(a.z-o)<.1)||this.namePoints.push({z:o,name:i.checkpointName}))}}),this.sortNamePoints()):this.namePoints=[],e&&h.timeline&&(e.timeline=h.timeline),h.dashboardItems&&Array.isArray(h.dashboardItems)?(this.dashboardItems=h.dashboardItems,this.updateDashboardItemsInHTML()):this.loadDashboardItemsFromHTML(),h.lotties&&Array.isArray(h.lotties)?(this.lottiePoints=h.lotties.map(i=>({url:i.url||i.lottie,playZ:i.playZ!==void 0?i.playZ:i.zindex,stopZ:i.stopZ!==void 0?i.stopZ:null})),this.sortLottiePoints()):this.lottiePoints=[]}else e&&e.timeline?this.points=this.convertTimelineToPoints(e.timeline,e.z):this.points=[],e&&e.timelineStartZ!==void 0&&e.timelineEndZ!==void 0?(this.manualStartZ=e.timelineStartZ,this.manualEndZ=e.timelineEndZ,console.log(`Loaded Z range from checkpoint config: Start=${this.manualStartZ}, End=${this.manualEndZ}`)):(this.manualStartZ=null,this.manualEndZ=null),this.loadDashboardItemsFromHTML(),this.lottiePoints||(this.lottiePoints=[]);this.renderTimeline()}convertTimelineToPoints(e,t){const i=[];return e.forEach(o=>{o.type==="move"?(i.push({z:o.toZ,speed:o.duration||2,easing:o.easing||"easeInOut",pause:0,checkpointName:o.checkpointName||null}),o.toZ):o.type==="pause"&&i.length>0&&(i[i.length-1].pause=o.duration||1,o.checkpointName&&(i[i.length-1].checkpointName=o.checkpointName))}),i}addPointFromDialog(){const e=parseFloat(document.getElementById("addPointZ").value),t=parseFloat(document.getElementById("addPointSpeed").value),i=document.getElementById("addPointEasing").value||"easeInOut",o=parseFloat(document.getElementById("addPointPause").value);let n=document.getElementById("addPointCheckpointName").value.trim();if(n==="__NEW__"){if(n=document.getElementById("addPointCheckpointNameNew").value.trim(),!n){alert("Please enter a checkpoint name or select an existing one.");return}r.find(a=>a.name===n)||(r.push({name:n,z:e,speed:t}),console.log(`Added new checkpoint: ${n}`))}n=n||null,this.points.push({z:e,speed:t,easing:i,pause:o,checkpointName:n}),this.sortPoints(),this.renderTimeline(),this.closeDialog("addPointDialog")}updatePointFromDialog(){if(this.selectedPointIndex===null)return;const e=this.points[this.selectedPointIndex];e.z=parseFloat(document.getElementById("editPointZ").value),e.speed=parseFloat(document.getElementById("editPointSpeed").value),e.easing=document.getElementById("editPointEasing").value||"easeInOut",e.pause=parseFloat(document.getElementById("editPointPause").value);let t=document.getElementById("editPointCheckpointName").value.trim();if(t==="__NEW__"){if(t=document.getElementById("editPointCheckpointNameNew").value.trim(),!t){alert("Please enter a checkpoint name or select an existing one.");return}r.find(i=>i.name===t)||(r.push({name:t,z:e.z,speed:e.speed}),console.log(`Added new checkpoint: ${t}`))}e.checkpointName=t||null,this.sortPoints(),this.renderTimeline(),this.closeDialog("editPointDialog")}deleteSelectedPoint(){this.selectedPointIndex!==null&&confirm("Delete this point?")&&(this.points.splice(this.selectedPointIndex,1),this.renderTimeline(),this.closeDialog("editPointDialog"),this.selectedPointIndex=null)}addNamePointFromDialog(){const e=parseFloat(document.getElementById("addNamePointZ").value),t=document.getElementById("addNamePointName").value.trim();if(!t){alert("Please enter a name or label.");return}if(isNaN(e)){alert("Please enter a valid Z position.");return}this.namePoints.push({z:e,name:t}),this.sortNamePoints(),this.renderTimeline(),this.closeDialog("addNamePointDialog")}updateNamePointFromDialog(){if(this.selectedNamePointIndex===null)return;const e=this.namePoints[this.selectedNamePointIndex],t=parseFloat(document.getElementById("editNamePointZ").value),i=document.getElementById("editNamePointName").value.trim();if(!i){alert("Please enter a name or label.");return}if(isNaN(t)){alert("Please enter a valid Z position.");return}e.z=t,e.name=i,this.sortNamePoints(),this.renderTimeline(),this.closeDialog("editNamePointDialog")}deleteSelectedNamePoint(){this.selectedNamePointIndex!==null&&confirm("Delete this name point?")&&(this.namePoints.splice(this.selectedNamePointIndex,1),this.renderTimeline(),this.closeDialog("editNamePointDialog"),this.selectedNamePointIndex=null)}selectNamePoint(e){this.selectedNamePointIndex=e;const t=this.namePoints[e];document.getElementById("editNamePointZ").value=t.z,document.getElementById("editNamePointName").value=t.name||"",this.renderTimeline(),this.showDialog("editNamePointDialog")}sortNamePoints(){this.namePoints.sort((e,t)=>t.z-e.z)}addLottiePointFromDialog(){const e=document.getElementById("addLottiePointUrl").value.trim(),t=parseFloat(document.getElementById("addLottiePointPlayZ").value),i=document.getElementById("addLottiePointStopZ").value.trim(),o=i?parseFloat(i):null;if(!e){alert("Please enter a Lottie URL.");return}if(isNaN(t)){alert("Please enter a valid play Z position.");return}this.lottiePoints.push({url:e,playZ:t,stopZ:o}),this.sortLottiePoints(),this.renderTimeline(),this.closeDialog("addLottiePointDialog")}updateLottiePointFromDialog(){if(this.selectedLottiePointIndex===null)return;const e=this.lottiePoints[this.selectedLottiePointIndex],t=document.getElementById("editLottiePointUrl").value.trim(),i=parseFloat(document.getElementById("editLottiePointPlayZ").value),o=document.getElementById("editLottiePointStopZ").value.trim(),n=o?parseFloat(o):null;if(!t){alert("Please enter a Lottie URL.");return}if(isNaN(i)){alert("Please enter a valid play Z position.");return}e.url=t,e.playZ=i,e.stopZ=n,this.sortLottiePoints(),this.renderTimeline(),this.closeDialog("editLottiePointDialog")}deleteSelectedLottiePoint(){this.selectedLottiePointIndex!==null&&confirm("Delete this lottie point?")&&(this.lottiePoints.splice(this.selectedLottiePointIndex,1),this.renderTimeline(),this.closeDialog("editLottiePointDialog"),this.selectedLottiePointIndex=null)}selectLottiePoint(e){this.selectedLottiePointIndex=e;const t=this.lottiePoints[e];document.getElementById("editLottiePointUrl").value=t.url,document.getElementById("editLottiePointPlayZ").value=t.playZ,document.getElementById("editLottiePointStopZ").value=t.stopZ!==null?t.stopZ:"",this.renderTimeline(),this.showDialog("editLottiePointDialog")}sortLottiePoints(){this.lottiePoints.sort((e,t)=>t.playZ-e.playZ)}renderNamePoints(e,t,i,o){e&&(e.querySelectorAll(".timeline-name-point-marker").forEach(n=>n.remove()),this.namePoints.forEach((n,a)=>{const l=document.createElement("div");l.className=`timeline-name-point-marker ${a===this.selectedNamePointIndex?"selected":""}`,l.dataset.index=a;let s=(i-n.z)/o*100;s=Math.max(0,Math.min(100,s)),l.style.left=`${s}%`;const c=document.createElement("div");c.className="timeline-name-point-label",c.textContent=n.name||n.checkpointName||"Name",c.title=`Z: ${n.z.toFixed(1)} | ${n.name||n.checkpointName||"Name"}`,l.appendChild(c);const p=document.createElement("div");p.className="timeline-marker-z",p.textContent=`Z:${n.z.toFixed(0)}`,l.appendChild(p),l.addEventListener("click",d=>{d.stopPropagation(),this.selectNamePoint(a)}),e.appendChild(l)}))}clearTimeline(){confirm("Clear all points?")&&(this.points=[],this.renderTimeline(),this.closeDialog("settingsDialog"))}useCurrentZ(){const e=this.cameraController?this.cameraController.camera.position.z:0;document.getElementById("addPointZ").value=e.toFixed(1),this.closeDialog("settingsDialog"),this.showDialog("addPointDialog")}setStartZFromCamera(){if(!this.cameraController)return;const e=this.cameraController.camera.position.z;document.getElementById("timelineStartZ").value=e.toFixed(1)}setEndZFromCamera(){if(!this.cameraController)return;const e=this.cameraController.camera.position.z;document.getElementById("timelineEndZ").value=e.toFixed(1)}applyZRange(){const e=document.getElementById("timelineStartZ").value.trim(),t=document.getElementById("timelineEndZ").value.trim();e&&t?(this.manualStartZ=parseFloat(e),this.manualEndZ=parseFloat(t),this.renderTimeline(),console.log(`Z Range set: Start=${this.manualStartZ}, End=${this.manualEndZ}`),alert(`Z Range applied: ${this.manualStartZ} to ${this.manualEndZ}`)):alert("Please enter both Start Z and End Z values.")}resetZRange(){this.manualStartZ=null,this.manualEndZ=null,document.getElementById("timelineStartZ").value="",document.getElementById("timelineEndZ").value="",this.renderTimeline(),console.log("Z Range reset to auto-calculate"),alert("Z Range reset to auto-calculate")}loadDashboardItemsFromHTML(){const e=document.querySelectorAll(".dash__text--item[data-checkpoint-name]");this.dashboardItems=Array.from(e).map(t=>({checkpointName:t.getAttribute("data-checkpoint-name"),text:t.textContent.trim()}))}showDashboardEditor(){this.dashboardItems.length===0&&this.loadDashboardItemsFromHTML(),this.dashboardItems.length===0&&r.length>0&&(this.dashboardItems=r.map(t=>({checkpointName:t.name,text:t.name})));const e=document.getElementById("dashboardItemsList");e.innerHTML="",this.dashboardItems.forEach((t,i)=>{const o=document.createElement("div");o.style.display="flex",o.style.gap="10px",o.style.alignItems="center",o.style.padding="8px",o.style.background="rgba(255,255,255,0.05)",o.style.borderRadius="4px",o.innerHTML=`
        <label style="min-width: 120px; color: rgba(255,255,255,0.8);">
          ${t.checkpointName}:
        </label>
        <input type="text" 
               class="dashboard-text-input" 
               data-index="${i}"
               value="${t.text||""}" 
               placeholder="Enter dashboard text"
               style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
      `,e.appendChild(o)}),this.closeDialog("settingsDialog"),this.showDialog("dashboardEditorDialog")}saveDashboardItems(){document.querySelectorAll("#dashboardItemsList .dashboard-text-input").forEach(t=>{const i=parseInt(t.dataset.index);this.dashboardItems[i]&&(this.dashboardItems[i].text=t.value.trim())}),this.updateDashboardItemsInHTML(),console.log("Dashboard items saved:",this.dashboardItems),alert("Dashboard text items saved!"),this.closeDialog("dashboardEditorDialog")}updateDashboardItemsInHTML(){this.dashboardItems.forEach(e=>{const t=document.querySelector(`.dash__text--item[data-checkpoint-name="${e.checkpointName}"]`);t&&(t.textContent=e.text||e.checkpointName)})}populateCheckpointDropdown(e,t=""){const i=document.getElementById(e);if(!i)return;const o=i.querySelector('option[value="__NEW__"]');i.innerHTML='<option value="">-- None --</option>',r.forEach(l=>{const s=document.createElement("option");s.value=l.name,s.textContent=l.name,l.name===t&&(s.selected=!0),i.appendChild(s)});const n=e.replace("CheckpointName","CheckpointNameNew"),a=document.getElementById(n);if(o||a){const l=document.createElement("option");l.value="__NEW__",l.textContent="+ Add New Checkpoint Name",i.appendChild(l)}}showSlideNamesDialog(){var n,a;const e=((n=h)==null?void 0:n.timeline)||((a=r[0])==null?void 0:a.timeline)||[],t=[],i=new Set;if(e.forEach(l=>{if(l.checkpointName&&!i.has(l.checkpointName)){i.add(l.checkpointName);let s;l.type==="move"?s=l.toZ:l.type==="pause"&&(s=l.atZ),s!==void 0&&t.push({name:l.checkpointName,z:s,text:l.checkpointName})}}),t.sort((l,s)=>s.z-l.z),t.length===0){alert("No checkpoint names found in timeline. Add checkpoint names to timeline points first.");return}const o=document.getElementById("slideNamesList");o.innerHTML="",t.forEach((l,s)=>{const c=document.createElement("div");c.style.display="flex",c.style.gap="10px",c.style.alignItems="center",c.style.padding="10px",c.style.background="rgba(255,255,255,0.05)",c.style.borderRadius="4px",c.innerHTML=`
        <div style="min-width: 150px;">
          <div style="color: rgba(255,255,255,0.9); font-weight: bold; margin-bottom: 4px;">${l.name}</div>
          <div style="color: rgba(255,255,255,0.5); font-size: 12px;">Z: ${l.z.toFixed(1)}</div>
        </div>
        <input type="text" 
               class="slide-name-input" 
               data-checkpoint-name="${l.name}"
               value="${l.text||l.name}" 
               placeholder="Enter slide text"
               style="flex: 1; padding: 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; font-size: 14px;">
      `,o.appendChild(c)}),this.showDialog("slideNamesDialog")}saveSlideNames(){const e=document.querySelectorAll("#slideNamesList .slide-name-input"),t=[];e.forEach(i=>{const o=i.getAttribute("data-checkpoint-name"),n=i.value.trim()||o;o&&t.push({checkpointName:o,text:n})}),this.dashboardItems=t,this.updateDashboardItemsInHTML(),window.checkpointController&&window.checkpointController.initializeDashboardItems(),console.log("Slide names saved:",t),alert("Slide names saved! Dashboard will update."),this.closeDialog("slideNamesDialog")}sortPoints(){this.points.sort((e,t)=>t.z-e.z)}renderTimeline(){const e=document.getElementById("timelineCheckpointTrack"),t=document.getElementById("timelineTrack"),i=document.getElementById("timelineNameTrack"),o=document.getElementById("timelineLottieTrack");e&&(e.innerHTML=""),t&&(t.innerHTML=""),i&&(i.innerHTML=""),o&&(o.innerHTML="");const n=t||e;let a,l,s;if(this.manualStartZ!==null&&this.manualEndZ!==null)l=Math.max(this.manualStartZ,this.manualEndZ),a=Math.min(this.manualStartZ,this.manualEndZ),s=l-a||1;else{const d=[];if(this.points.length>0&&d.push(...this.points.map(m=>m.z)),this.namePoints.length>0&&d.push(...this.namePoints.map(m=>m.z)),r.length>0&&d.push(...r.map(m=>m.z)),this.lottiePoints.length>0&&this.lottiePoints.forEach(m=>{d.push(m.playZ),m.stopZ!==null&&m.stopZ!==void 0&&d.push(m.stopZ)}),d.length===0)a=-50,l=50,s=100,n&&(n.innerHTML='<div class="timeline-empty">No points or checkpoints. Click + to add points or 📍 to add checkpoints.</div>');else{a=Math.min(...d),l=Math.max(...d);const m=(l-a)*.1||10;l<=0&&l>=-m?(l=0,a-=m):(a-=m,l+=m),s=l-a||1}}const c=document.getElementById("timelineTracksWrapper");let p=c;if(c){let d=c.querySelector(".timeline-tracks-indicators-container");d||(d=document.createElement("div"),d.className="timeline-tracks-indicators-container",c.appendChild(d)),p=d}if(this.manualStartZ!==null&&this.manualEndZ!==null&&this.renderRangeIndicators(p||n,a,l,s),this.renderCameraIndicator(p||n,a,l,s),e&&this.renderCheckpointMarkers(e,a,l,s),i&&this.renderNamePoints(i,a,l,s),this.points.length===0&&this.namePoints.length===0&&r.length===0){this.startCameraIndicatorUpdate();return}t&&(this.renderSequenceBars(t,a,l,s),this.points.forEach((d,m)=>{const u=document.createElement("div");u.className=`timeline-marker ${d.pause>0?"has-pause":""} ${d.checkpointName?"has-checkpoint":""}`,u.dataset.index=m;let k=(l-d.z)/s*100;k=Math.max(0,Math.min(100,k)),u.style.left=`${k}%`;let g=`Z: ${d.z.toFixed(1)} | Speed: ${d.speed}s${d.pause>0?` | Pause: ${d.pause}s`:""}`;d.checkpointName&&(g+=` | Dashboard: ${d.checkpointName}`),u.title=g;const v=document.createElement("div");if(v.className="timeline-marker-name",v.textContent=`Z:${d.z.toFixed(0)}`,u.appendChild(v),d.checkpointName){const b=document.createElement("div");b.className="timeline-checkpoint-badge",b.textContent=d.checkpointName,b.title=`Changes dashboard text to: ${d.checkpointName}`,u.appendChild(b)}m===this.selectedPointIndex&&u.classList.add("selected"),u.addEventListener("click",b=>{b.stopPropagation(),this.selectPoint(m)}),t.appendChild(u)})),this.renderLottiePoints(a,l,s),this.startCameraIndicatorUpdate()}renderSequenceBars(e,t,i,o){if(!e||this.points.length<2)return;const n=[...this.points].sort((a,l)=>l.z-a.z);for(let a=0;a<n.length-1;a++){const l=n[a],s=n[a+1],c=(i-l.z)/o*100,p=(i-s.z)/o*100,d=Math.max(0,Math.min(100,c)),m=Math.max(0,Math.min(100,p)),u=Math.min(d,m),k=Math.abs(m-d);if(k<.5)continue;const g=document.createElement("div");g.className="timeline-sequence-bar";const v=s.speed||2,b=s.easing||"easeInOut";g.style.left=`${u}%`,g.style.width=`${k}%`,g.dataset.speed=v,g.dataset.easing=b,g.dataset.fromZ=l.z.toFixed(1),g.dataset.toZ=s.z.toFixed(1);const y=l.z.toFixed(1),f=s.z.toFixed(1);g.title=`Sequence: Z ${y} → ${f} | Speed: ${v}s | Easing: ${b}`;const E=document.createElement("div");E.className="timeline-sequence-speed",E.textContent=`${v}s`,E.title=`Duration: ${v} seconds`,g.appendChild(E);const C=document.createElement("div");C.className=`timeline-sequence-easing timeline-easing-${b}`,C.title=`Easing: ${b}`,g.appendChild(C);const P=document.createElement("div");P.className="timeline-sequence-from",P.textContent=`Z:${y}`,g.appendChild(P);const N=document.createElement("div");N.className="timeline-sequence-to",N.textContent=`Z:${f}`,g.appendChild(N),e.insertBefore(g,e.firstChild)}}renderLottiePoints(e,t,i){const o=document.getElementById("timelineLottieTrack");o&&(o.innerHTML="",this.lottiePoints.forEach((n,a)=>{const l=document.createElement("div");l.className=`timeline-lottie-marker timeline-lottie-play ${a===this.selectedLottiePointIndex?"selected":""}`,l.dataset.index=a,l.dataset.type="play";let s=(t-n.playZ)/i*100;s=Math.max(0,Math.min(100,s)),l.style.left=`${s}%`;const c=document.createElement("div");c.className="timeline-lottie-label",c.textContent="▶",c.title=`Play at Z: ${n.playZ.toFixed(1)}`,l.appendChild(c);const p=document.createElement("div");p.className="timeline-marker-z",p.textContent=`Z:${n.playZ.toFixed(0)}`,l.appendChild(p);const d=n.url.split("/").pop().split(".")[0]||`L${a}`,m=document.createElement("div");if(m.className="timeline-lottie-name",m.textContent=d.substring(0,8),m.title=n.url,l.appendChild(m),l.addEventListener("click",u=>{u.stopPropagation(),this.selectLottiePoint(a)}),o.appendChild(l),n.stopZ!==null&&!isNaN(n.stopZ)){const u=document.createElement("div");u.className=`timeline-lottie-marker timeline-lottie-stop ${a===this.selectedLottiePointIndex?"selected":""}`,u.dataset.index=a,u.dataset.type="stop";let k=(t-n.stopZ)/i*100;k=Math.max(0,Math.min(100,k)),u.style.left=`${k}%`;const g=document.createElement("div");g.className="timeline-lottie-label",g.textContent="⏹",g.title=`Stop at Z: ${n.stopZ.toFixed(1)}`,u.appendChild(g);const v=document.createElement("div");if(v.className="timeline-marker-z",v.textContent=`Z:${n.stopZ.toFixed(0)}`,u.appendChild(v),u.addEventListener("click",b=>{b.stopPropagation(),this.selectLottiePoint(a)}),o.appendChild(u),Math.abs(s-k)>1){const b=document.createElement("div");b.className="timeline-lottie-line";const y=Math.min(s,k),f=Math.abs(s-k);b.style.left=`${y}%`,b.style.width=`${f}%`,b.title=`Lottie: ${n.url.substring(0,30)}...`,o.appendChild(b)}}}))}renderRangeIndicators(e,t,i,o){e&&e.querySelectorAll(".timeline-range-indicator").forEach(l=>l.remove());const n=document.createElement("div");n.className="timeline-range-indicator timeline-range-start",n.style.left="0%",n.title=`Start Z: ${i.toFixed(1)}`,n.innerHTML=`<div class="timeline-range-label">START<br>${i.toFixed(1)}</div>`,e.appendChild(n);const a=document.createElement("div");a.className="timeline-range-indicator timeline-range-end",a.style.left="100%",a.title=`End Z: ${t.toFixed(1)}`,a.innerHTML=`<div class="timeline-range-label">END<br>${t.toFixed(1)}</div>`,e.appendChild(a)}renderCheckpointMarkers(e,t,i,o){e&&(e.querySelectorAll(".timeline-checkpoint-marker").forEach(n=>n.remove()),r.forEach((n,a)=>{const l=document.createElement("div");l.className=`timeline-checkpoint-marker ${a===this.selectedCheckpointIndex?"selected":""}`,l.dataset.checkpointIndex=a,l.dataset.checkpointZ=n.z;let s=(i-n.z)/o*100;s=Math.max(0,Math.min(100,s)),l.style.left=`${s}%`;const c=`${n.name}
Z: ${n.z.toFixed(1)}
Speed: ${n.speed}s`;l.title=c;const p=document.createElement("div");p.className="timeline-checkpoint-label",p.textContent=n.name,l.appendChild(p);const d=document.createElement("div");d.className="timeline-marker-z",d.textContent=`Z:${n.z.toFixed(0)}`,l.appendChild(d),l.addEventListener("click",m=>{m.stopPropagation(),this.selectCheckpoint(a)}),e.appendChild(l),n.z===0&&console.log(`Checkpoint "${n.name}" at Z=0: position=${s}%, maxZ=${i}, minZ=${t}, zRange=${o}`)}))}selectCheckpoint(e){if(e<0||e>=r.length){console.warn("Invalid checkpoint index:",e);return}this.selectedCheckpointIndex=e;const t=r[e];document.getElementById("editCheckpointName").value=t.name,document.getElementById("editCheckpointZ").value=t.z,document.getElementById("editCheckpointSpeed").value=t.speed||2,this.showDialog("editCheckpointDialog"),this.renderTimeline()}editCheckpointById(e){const t=r.findIndex(i=>i.name===e||i.name.toLowerCase()===e.toLowerCase());t>=0?this.selectCheckpoint(t):alert(`Checkpoint "${e}" not found.`)}addCheckpointFromDialog(){const e=document.getElementById("addCheckpointName").value.trim(),t=parseFloat(document.getElementById("addCheckpointZ").value),i=parseFloat(document.getElementById("addCheckpointSpeed").value);if(!e){alert("Please enter a checkpoint name/ID");return}if(r.some(n=>n.name===e)){alert(`Checkpoint "${e}" already exists. Please use a different name.`);return}const o={name:e,z:t,speed:i};r.push(o),this.updateCheckpointSelect(),this.renderTimeline(),this.closeDialog("addCheckpointDialog"),console.log("Added checkpoint:",o),alert(`Checkpoint "${e}" added at Z: ${t}`)}updateCheckpointFromDialog(){if(this.selectedCheckpointIndex===null)return;const e=r[this.selectedCheckpointIndex],t=document.getElementById("editCheckpointName").value.trim(),i=parseFloat(document.getElementById("editCheckpointZ").value),o=parseFloat(document.getElementById("editCheckpointSpeed").value);if(!t){alert("Please enter a checkpoint name/ID");return}if(t!==e.name&&r.some(n=>n.name===t)){alert(`Checkpoint "${t}" already exists. Please use a different name.`);return}e.name=t,e.z=i,e.speed=o,this.updateCheckpointSelect(),this.renderTimeline(),this.closeDialog("editCheckpointDialog"),console.log("Updated checkpoint:",e)}deleteSelectedCheckpoint(){if(this.selectedCheckpointIndex===null)return;if(r.length<=1){alert("Cannot delete the last checkpoint. At least one checkpoint is required.");return}const e=r[this.selectedCheckpointIndex];confirm(`Are you sure you want to delete checkpoint "${e.name}"?`)&&(r.splice(this.selectedCheckpointIndex,1),this.selectedCheckpointIndex=null,this.updateCheckpointSelect(),this.selectedCheckpointIndex===0&&this.loadCheckpointTimeline(),this.renderTimeline(),this.closeDialog("editCheckpointDialog"),console.log("Deleted checkpoint:",e.name))}updateCheckpointSelect(){}renderCameraIndicator(e,t,i,o){const n=document.getElementById("timelineTracksWrapper");if(n){const l=n.querySelector(".timeline-camera-indicator");l&&l.remove()}if(e){const l=e.querySelector(".timeline-camera-indicator");l&&l.remove()}const a=document.createElement("div");if(a.className="timeline-camera-indicator",a.id="timelineCameraIndicator",e)e.appendChild(a);else{const l=document.getElementById("timelineTracksWrapper");l&&l.appendChild(a)}this.updateCameraIndicator(t,i,o)}updateCameraIndicator(e,t,i){const o=document.getElementById("timelineCameraIndicator");if(!o||!this.cameraController||!this.cameraController.camera)return;const n=this.cameraController.camera.position.z;let a=(t-n)/i*100;a=Math.max(0,Math.min(100,a)),o.style.left=`${a}%`}startCameraIndicatorUpdate(){this.cameraIndicatorInterval&&clearInterval(this.cameraIndicatorInterval),this.cameraIndicatorInterval=setInterval(()=>{let e,t,i;if(this.manualStartZ!==null&&this.manualEndZ!==null)t=Math.max(this.manualStartZ,this.manualEndZ),e=Math.min(this.manualStartZ,this.manualEndZ),i=t-e||1;else{const o=[];if(this.points.length>0&&o.push(...this.points.map(n=>n.z)),r.length>0&&o.push(...r.map(n=>n.z)),o.length===0){const n=r[0];e=n?n.z-50:-50,t=n?n.z+50:50,i=t-e||100}else{e=Math.min(...o),t=Math.max(...o);const n=(t-e)*.1||10;t<=0&&t>=-n?(t=0,e-=n):(e-=n,t+=n),i=t-e||1}}this.updateCameraIndicator(e,t,i)},100)}stopCameraIndicatorUpdate(){this.cameraIndicatorInterval&&(clearInterval(this.cameraIndicatorInterval),this.cameraIndicatorInterval=null)}selectPoint(e){this.selectedPointIndex=e;const t=this.points[e];document.getElementById("editPointZ").value=t.z,document.getElementById("editPointSpeed").value=t.speed,document.getElementById("editPointEasing").value=t.easing||"easeInOut",document.getElementById("editPointPause").value=t.pause,this.populateCheckpointDropdown("editPointCheckpointName",t.checkpointName||""),this.setupCheckpointNameInput("editPointCheckpointName","editPointCheckpointNameNew");const i=document.getElementById("editPointCheckpointNameNew");i&&(i.style.display="none",i.value=""),this.renderTimeline(),this.showDialog("editPointDialog")}setupCheckpointNameInput(e,t){const i=document.getElementById(e),o=document.getElementById(t);if(!i||!o)return;const n=i.cloneNode(!0);i.parentNode.replaceChild(n,i),n.addEventListener("change",()=>{n.value==="__NEW__"?(o.style.display="block",o.focus()):(o.style.display="none",o.value="")}),o.addEventListener("blur",()=>{n.value!=="__NEW__"&&o.value&&n.value&&n.value!=="__NEW__"&&(o.value="",o.style.display="none")})}showDialog(e){const t=document.getElementById(e);t&&(t.style.display="flex")}closeDialog(e){const t=document.getElementById(e);t&&(t.style.display="none")}convertPointsToTimeline(){if(this.points.length===0)return null;const e=[];let t=this.points[0].z;return this.points.forEach((i,o)=>{if(o===0)t=i.z;else if(i.z!==t){const n={type:"move",fromZ:t,toZ:i.z,duration:i.speed||2,easing:i.easing||"easeInOut"};i.checkpointName&&(n.checkpointName=i.checkpointName),e.push(n),t=i.z}if(i.pause>0){const n={type:"pause",atZ:i.z,duration:i.pause};i.checkpointName&&(n.checkpointName=i.checkpointName),e.push(n)}else i.checkpointName&&o>0&&i.z===t&&e.length>0&&e[e.length-1].type==="move"&&(e[e.length-1].checkpointName=i.checkpointName)}),this.namePoints.forEach(i=>{e.forEach(o=>{let n;o.type==="move"?n=o.toZ:o.type==="pause"&&(n=o.atZ),n!==void 0&&Math.abs(n-i.z)})}),console.log("Converted timeline (forward order):",e.map((i,o)=>`${o}: ${i.type} ${i.fromZ||i.atZ} → ${i.toZ||i.atZ}${i.checkpointName?` [${i.checkpointName}]`:""}`).join(", ")),e.length>0?e:null}saveTimeline(){const e=r[0],t=this.convertPointsToTimeline();e.timeline=t,this.loadDashboardItemsFromHTML();const i={settings:{startZ:this.manualStartZ!==null?this.manualStartZ:null,endZ:this.manualEndZ!==null?this.manualEndZ:null},timeline:t||[],checkpoints:r.map(a=>({name:a.name,z:a.z,speed:a.speed})),dashboardItems:this.dashboardItems.length>0?this.dashboardItems:r.map(a=>({checkpointName:a.name,text:a.name})),namePoints:this.namePoints.map(a=>({z:a.z,name:a.name||a.checkpointName||"Name"})),lotties:this.lottiePoints.map(a=>({url:a.url,playZ:a.playZ,stopZ:a.stopZ}))},o=JSON.stringify(i,null,2),n=`export const checkpointConfig = ${o};`;window.checkpointController&&window.checkpointController.initializeDashboardItems(),window.checkpointController&&window.checkpointController.initializeDashboardItems(),console.log("=== CHECKPOINT CONFIG (copy this to checkpoint-config.js) ==="),console.log("Settings:",i.settings),console.log("Timeline segments:",i.timeline.length),console.log("Checkpoints:",i.checkpoints.length),console.log(`
`+n),console.log(`
=== JSON DATA ===`),console.log(o),alert(`Saved!

Config exported to console with:
- Settings (Z range)
- Timeline (${i.timeline.length} segments)
- Checkpoints (${i.checkpoints.length} markers)

Copy the "export const checkpointConfig = ..." code to checkpoint-config.js`)}exportCheckpoints(){var n;const e=((n=r[0])==null?void 0:n.timeline)||[];this.loadDashboardItemsFromHTML();const t={settings:{startZ:this.manualStartZ!==null?this.manualStartZ:null,endZ:this.manualEndZ!==null?this.manualEndZ:null},timeline:e,checkpoints:r.map(a=>({name:a.name,z:a.z,speed:a.speed})),dashboardItems:this.dashboardItems.length>0?this.dashboardItems:r.map(a=>({checkpointName:a.name,text:a.name})),namePoints:this.namePoints.map(a=>({z:a.z,name:a.name||a.checkpointName||"Name"})),lotties:this.lottiePoints.map(a=>({url:a.url,playZ:a.playZ,stopZ:a.stopZ}))},i=JSON.stringify(t,null,2),o=`export const checkpointConfig = ${i};`;window.checkpointController&&window.checkpointController.initializeDashboardItems(),console.log("=== CHECKPOINT CONFIG ==="),console.log("Settings:",t.settings),console.log("Timeline segments:",t.timeline.length),console.log("Checkpoints:",t.checkpoints.length),console.log(`
`+o),console.log(`
=== JSON DATA ===`),console.log(i),console.log(`
=== DETAILS ===`),console.log("Settings - Start Z:",t.settings.startZ,"End Z:",t.settings.endZ),console.log("Timeline -",t.timeline.length,"segments"),t.checkpoints.forEach((a,l)=>{console.log(`Checkpoint ${l}: "${a.name}" at Z: ${a.z}`)}),navigator.clipboard?navigator.clipboard.writeText(o).then(()=>{alert(`Config copied to clipboard!

Settings, Timeline (${t.timeline.length} segments), and ${t.checkpoints.length} checkpoints.
Paste it into checkpoint-config.js`)}).catch(()=>{alert(`Config exported to console.

Settings, Timeline, and Checkpoints included.
Copy the "export const checkpointConfig = ..." code to checkpoint-config.js`)}):alert(`Config exported to console.

Settings, Timeline, and Checkpoints included.
Copy the "export const checkpointConfig = ..." code to checkpoint-config.js`)}testAnimation(){if(!this.checkpointController||!this.cameraController){alert("Checkpoint controller not available");return}if(this.isTestPlaying)return;const e=r[0];this.originalTimeline=e.timeline?JSON.parse(JSON.stringify(e.timeline)):null;const t=this.convertPointsToTimeline();if(!t||t.length===0){alert("No timeline to test. Add points first.");return}e.timeline=t,this.isTestPlaying=!0,document.getElementById("timelineTestBtn").style.display="none",document.getElementById("timelineStopBtn").style.display="inline-block";const i=0,o=t[0];if(o)if(o.type==="move"){const n=o.fromZ;o.fromZ=0,console.log(`Adjusted first segment fromZ: ${n} → 0`)}else o.type==="pause"&&(t.unshift({type:"move",fromZ:0,toZ:o.atZ,duration:.1,easing:"linear"}),console.log("Inserted move segment to start from Z=0"));console.log("Test animation: Starting from Z:",i,"First segment:",t[0]),this.cameraController.camera.position.z=i,this.cameraController.targetZ=i,setTimeout(()=>{this.cameraController.camera.position.z=i,this.cameraController.targetZ=i,this.checkpointController.jumpToCheckpoint(0,!0)},150),this.monitorAnimationCompletion()}stopAnimation(){if(this.isTestPlaying){if(this.checkpointController&&(this.checkpointController.currentAnimationFrame!==null&&(cancelAnimationFrame(this.checkpointController.currentAnimationFrame),this.checkpointController.currentAnimationFrame=null),this.checkpointController.isAnimating=!1),this.originalTimeline!==null){const e=r[0];e.timeline=this.originalTimeline,this.originalTimeline=null}this.isTestPlaying=!1,document.getElementById("timelineTestBtn").style.display="inline-block",document.getElementById("timelineStopBtn").style.display="none",console.log("Animation stopped")}}monitorAnimationCompletion(){const e=setInterval(()=>{if(!this.isTestPlaying){clearInterval(e);return}this.checkpointController&&!this.checkpointController.isAnimating&&(this.stopAnimation(),clearInterval(e))},100);setTimeout(()=>{this.isTestPlaying&&this.stopAnimation(),clearInterval(e)},3e4)}show(){const e=document.getElementById("timelineBar");e&&(e.style.display="block",this.isVisible=!0)}hide(){const e=document.getElementById("timelineBar");e&&(e.style.display="none",this.isVisible=!1),document.querySelectorAll(".timeline-dialog").forEach(t=>t.style.display="none"),this.stopCameraIndicatorUpdate()}toggle(){this.isVisible?this.hide():this.show()}}export{w as TimelineEditor};
