const history = [];
const storage = [];
var currObjIndex = 0;

function userControl (event) {
  var keyCode;
  var width = gEngine.Core.mWidth;
  var height = gEngine.Core.mHeight;
  var context = gEngine.Core.mContext;
  var clearCanvas = gEngine.Core.clearCanvas;

  function _rand() {
    const sum = Array.from(arguments).reduce((a,b)=>a*b);
    return Math.round(Math.random() * sum);
  }

  if (window.event) {
    keyCode = event.keyCode;    
  } else if (event.which) {
    keyCode = event.which
  }

  console.log(keyCode);

  if (keyCode === 70) {
    const center = new Vec2D(_rand(width, 0.8), _rand(height, 0.8));
    const mWidth = _rand(30) + 10;
    const mHeight = _rand(30) + 10;
    new Rectangle(center, mWidth, mHeight);
  }

  if (keyCode === 71) {
    const center = new Vec2D(_rand(width, 0.8), _rand(height, 0.8));
    const radius = _rand(30) + 20;
    new Circle(center, radius);
  }

  if (keyCode >= 48 && keyCode <= 57) {
    if (keyCode - 48 < gEngine.Core.objectStorage.length) {
      currObjIndex = keyCode - 48;
    }
  } 
  /* up arrow */
  if(keyCode === 38) {
    if (currObjIndex > 0) {
      currObjIndex -= 1
    }
  }
  /* down arrow */
  if(keyCode === 40) {
    if (currObjIndex < gEngine.Core.objectStorage.length - 1) {
      currObjIndex += 1;
    }
  }

  if (keyCode === 90) {
    clearCanvas();
    const rem = history.pop();
    storage.push(rem);
    console.log('back: ', rem);
    
    history.forEach(shape => {
      if (shape.type === 'circle') {
        drawCircle(shape);
      } else {
        drawRect(shape);
      }
    });
  }
  if (keyCode === 89) {
    const shape = storage.pop();
    
    if (shape) {
      if (shape.type === 'circle') {
        drawCircle(shape);
      } else {
        drawRect(shape);
      }
      history.push(shape);
    }
  }
}