var gEngine = gEngine || {};

gEngine.Core = (function(){
  const objectStorage = [];

  let mCanvas, mContext, mWidth = 800, mHeight = 450;
  mCanvas = document.getElementById('canvas');
  mContext = mCanvas.getContext('2d');
  mCanvas.width = mWidth;
  mCanvas.height = mHeight;
  
  var clearCanvas = function clearCanvas() {
    mContext.clearRect(0, 0, mCanvas.width, mCanvas.height);
  }

  var runGameLoop = function () {
    requestAnimationFrame(function() {
      runGameLoop();
    });
    updateUIEcho();
    draw();
  }

  var updateUIEcho = function() {
    const innerHTMLStr = `
    <p><b>Selected Object: </b>:</p>
    <ul style="margin: -10px;">
      <li>ID: ${currObjIndex}</li>
      <li>
        Center: ${objectStorage[currObjIndex].center.x.toPrecision(3)},
        ${objectStorage[currObjIndex].center.y.toPrecision(3)}
      </li>
    </ul>
    <hr>
    <p><b>Control</b>: of selected object</p>
    <ul style="margin: -10px;">
      <li><b>Num</b> or <b>Up/Down Arrow: </b> SelectObject</li>
      <li></li>
    </ul>
    <hr>
    <b>F/G</b>: Spawn: [Rectangle/Circle] at random position
    <hr>
    `;
    document.querySelector('#ui-echo-string').innerHTML = innerHTMLStr;
  }

  var draw = function() {
    mContext.clearRect(0, 0, mWidth, mHeight);
    for (let i=0; i<objectStorage.length; i+=1) {
      if (i === currObjIndex) {
        mContext.strokeStyle = 'red';
      } else {
        mContext.strokeStyle = 'blue';
      }
      objectStorage[i].draw(mContext);
    }
  }

  var initEngineCore = function() {
    runGameLoop();
  }

  var mPublic = {
    mWidth,
    mHeight,
    mContext,
    clearCanvas,
    objectStorage,
    initEngineCore
  };

  return mPublic;
}());