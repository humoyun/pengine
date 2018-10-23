var gEngine = gEngine || {};
window.gEngine = gEngine;

gEngine.Core = (function(){
  const mObjectStorage = [];
  let showCanvasGrid = false;
  let mCanvas; 
  let mContext; 
  let mWidth = 800; 
  let mHeight = 450;
  let mCurrentTime; 
  let mElapsedTime; 
  let mPreviousTime = Date.now();
  let mLagTime = 0;
  let kFPS = 60; // frames per second
  let kFrameTime = 1 / kFPS; // seconds
  let mUpdateIntervalTime = kFrameTime;
  let kMPF = 1000 * kFrameTime; // milliseconds per frame

  mCanvas = document.getElementById('canvas');
  mContext = mCanvas.getContext('2d');
  mCanvas.width = mWidth;
  mCanvas.height = mHeight;

  /* ------------------------------------------------ */

  mCanvas.onmousedown = function( e ) {
    console.log('[onmousedown]: ', e.x, e.y, e.pageX, e.pageY, e.offsetX, e.offsetY, e.type);
  }
  
  mCanvas.onmouseup = function( e ) {
    console.log('[onmouseup]: ', e.x, e.y, canvas.offsetLeft, canvas.offsetRight);
  }
  
  mCanvas.onmousemove = function(e) {
  }

  var clearCanvas = function clearCanvas() {
    mContext.clearRect(0, 0, mCanvas.width, mCanvas.height);
  }

  var runGameLoop = function () {
    requestAnimationFrame(function() {
      runGameLoop();
    });
    
    //compute how much time has elapsed since the last RunLoop
    mCurrentTime = Date.now();
    mElapsedTime = mCurrentTime - mPreviousTime;
    mPreviousTime = mCurrentTime;
    mLagTime += mElapsedTime;
    //Update the game the appropriate number of times.
    //Update only every Milliseconds per frame. 
    //If lag larger then update frames, update until caught up.
    while (mLagTime >= kMPF) {
      mLagTime -= kMPF;
      update();
    }
    updateUIEcho();
    draw();
    if (showCanvasGrid) {
      drawCanvasGrid();
    }
  }

  var updateUIEcho = function() {
    const innerHTMLStr = `
    <div class="canvas-control">
      <p><b>Selected Object: </b>:</p>
      <ul style="margin: -10px;">
        <li><b>ID:</b> ${currObjIndex}</li>
        <li>
          <b>Center</b>: ${mObjectStorage[currObjIndex].center.x.toPrecision(3)},
          ${mObjectStorage[currObjIndex].center.y.toPrecision(3)}
        </li>
        <li><b>Angle</b>: ${mObjectStorage[currObjIndex].angle.toPrecision(3)}</li>
      </ul>
      <hr>
      <p><b>Control</b>: of selected object</p>
      <ul style="margin: -10px;">
        <li><b>Num</b> or <b>Up/Down Arrow: </b> SelectObject</li>
        <li><b>WASD + QE</b>: Position [Move + Rotate]</li>
      </ul>
      <hr>
      <b>F/G</b>: Spawn: [Rectangle/Circle] at random position
      <p><b>H</b>: Fix object</p>
      <p><b>R</b>: Reset System</p>
      <hr>
    </div>
    `;
    document.querySelector('#ui-echo-string').innerHTML = innerHTMLStr;
  }

  var draw = function() {
    mContext.clearRect(0, 0, mWidth, mHeight);
    for (let i=0; i<mObjectStorage.length; i+=1) {
      if (i === currObjIndex) {
        mContext.strokeStyle = 'red';
      } else {
        mContext.strokeStyle = 'blue';
        // mContext.shadowBlur = 4;
        // mContext.shadowColor = 'black';
        // mContext.shadowOffsetX = 4;
        // mContext.shadowOffsetY = 4;
      }
      mObjectStorage[i].draw(mContext);
    }
  }

  var update = function() {
    for (let i=0; i<mObjectStorage.length; i+=1) {
      mObjectStorage[i].update(mContext);
    }
  }

  var initEngineCore = function(canvasGrid) {
    runGameLoop();
    showCanvasGrid = canvasGrid;
  }

  var drawCanvasGrid = function() {
    mContext.save();
    for (let i=1; i<16; i+=1) {
      mContext.beginPath();
      mContext.strokeStyle = '#ccc';
      mContext.lineWidth = 0.4;
      mContext.moveTo(i*50, 0);
      mContext.lineTo(i*50, 450);
      if (i<10) {
        mContext.moveTo(0, i*50);
        mContext.lineTo(800, i*50);
      }
      mContext.stroke();
    }
    mContext.restore();
  }

  var mPublic = {
    mWidth,
    mHeight,
    mContext,
    clearCanvas,
    mObjectStorage,
    initEngineCore
  };

  return mPublic;
}());