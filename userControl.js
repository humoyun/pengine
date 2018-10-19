const history = [];
const storage = [];

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

  function drawRect(rectObj) {
    context.strokeStyle = rectObj.color;
    context.strokeRect(
      rectObj.x,
      rectObj.y,
      rectObj.width,
      rectObj.height,
    ); 
  }

  function drawCircle(circleObj) {
    context.strokeStyle = circleObj.color;
    context.beginPath();
    context.arc(
      circleObj.x,
      circleObj.y,
      circleObj.r,
      circleObj.sAngle,
      circleObj.eAngle,
      circleObj.ccw,
    );
    context.closePath();
    context.stroke();
  }

  if (window.event) {
    keyCode = event.keyCode;    
  } else if (event.which) {
    keyCode = event.which
  }

  console.log(keyCode);

  if (keyCode === 70) {
    let rect = {
      type: 'rect',
      color : 'green',
      x : _rand(width, 0.8), 
      y : _rand(width, 0.8),
      width : _rand(30)+ 10,
      height : _rand(30) + 10,
      
    };
    drawRect(rect);
    history.push(rect);
  }

  if (keyCode === 71) {
    let circle = {
      type: 'circle',
      color : 'blue',
      x : _rand(width, 0.8), 
      y : _rand(height, 0.8),
      r : _rand(30) + 10,
      sAngle : 0,
      eAngle : 2 * Math.PI,
      ccw: true 
    };
    drawCircle(circle);
    history.push(circle);
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