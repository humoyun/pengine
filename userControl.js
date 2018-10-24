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

  /* G */
  if (keyCode === 70) {
    const centre = gEngine.Core.mObjectStorage[currObjIndex].center;
    const center = new Vec2D(centre.x, centre.y);
    const mWidth = _rand(50) + 20;
    const mHeight = _rand(50) + 20;
    new Rectangle(center, mWidth, mHeight);
  }
  /* F */
  if (keyCode === 71) {
    const centre = gEngine.Core.mObjectStorage[currObjIndex].center;
    const center = new Vec2D(centre.x, centre.y);
    const radius = _rand(30) + 20;
    new Circle(center, radius);
  }

  /* [0..9] numbers */
  if (keyCode >= 48 && keyCode <= 57) {
    if (keyCode - 48 < gEngine.Core.mObjectStorage.length) {
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
    if (currObjIndex < gEngine.Core.mObjectStorage.length - 1) {
      currObjIndex += 1;
    }
  }

  /* move with WASD keys */
  if (keyCode === 87) {
    // [ W key ] x=0, y=-10 move down along Y axis (negative direction)
    gEngine.Core.mObjectStorage[currObjIndex].move(new Vec2D(0, -10));
  }
  if (keyCode === 83) {
    // [ S key ] x=0, y=-10 move down along Y axis (positive direction)
    gEngine.Core.mObjectStorage[currObjIndex].move(new Vec2D(0, 10));    
  }
  if (keyCode === 65) {
    // [ A key ] x=0, y=-10 move down along X axis (negative direction)
    gEngine.Core.mObjectStorage[currObjIndex].move(new Vec2D(-10, 0));
  }
  if (keyCode === 68) {
    // [ D key ] x=0, y=-10 move right along X axis (positive direction)
    gEngine.Core.mObjectStorage[currObjIndex].move(new Vec2D(10, 0));
  }
  /* Rotate CW & CCW */
  if (keyCode === 81) {
    // [ Q key ] rotate by -0.1 radian CCW (Counter Clock Wise)
    gEngine.Core.mObjectStorage[currObjIndex].rotate(-0.1);
  }
  if (keyCode === 69) {
    // [ E key ] rotate by 0.1 radian CW (Clock Wise)
    gEngine.Core.mObjectStorage[currObjIndex].rotate(0.1);
  }

  /* Toggle gravity with `H` key */
  if (keyCode === 72) {
    if(gEngine.Core.mObjectStorage[currObjIndex].mFix === 0) {
      gEngine.Core.mObjectStorage[currObjIndex].mFix = 1;
    } else {
      gEngine.Core.mObjectStorage[currObjIndex].mFix = 0;
    }
  }

  /* [ R key ] Reset the scene */
  if (keyCode === 82) {
    gEngine.Core.mObjectStorage.splice(5, gEngine.Core.mObjectStorage.length);
    currObjIndex = 0;
  }

  // if (keyCode === 90) {
  //   clearCanvas();
  //   const rem = history.pop();
  //   storage.push(rem);
  //   console.log('back: ', rem);
    
  //   history.forEach(shape => {
  //     if (shape.type === 'circle') {
  //       drawCircle(shape);
  //     } else {
  //       drawRect(shape);
  //     }
  //   });
  // }
  // if (keyCode === 89) {
  //   const shape = storage.pop();
    
  //   if (shape) {
  //     if (shape.type === 'circle') {
  //       drawCircle(shape);
  //     } else {
  //       drawRect(shape);
  //     }
  //     history.push(shape);
  //   }
  // }
}