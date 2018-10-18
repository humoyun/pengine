function userControl (event) {
  console.log("<script src=core/core.js></script>")
  var keyCode;
  var width = gEngine.Core.mWidth;
  var height = gEngine.Core.mHeight;
  var context = gEngine.Core.mContext;

  function _rand() {
    return Math.random()
  }

  if (window.event) {
    keyCode = event.keyCode;    
  } else if (event.which) {
    keyCode = event.which
  }
  
  console.log(keyCode);

  if (keyCode === 70) {
    context.strokeRect(
      _rand() * width * 0.8, 
      _rand() * height * 0.8,
      _rand() * 30 + 10, 
      _rand() * 30 + 10
    );
  }
  if (keyCode === 71) {
    context.beginPath();
    context.arc(
      _rand() * width * 0.8,
      _rand() * height * 0.8, 
      _rand() * 30 + 10, 
      0,
      Math.PI, 
      true
    );
    context.closePath();
    context.stroke();
  }
}