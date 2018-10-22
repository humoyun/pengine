<<<<<<< HEAD
function Circle (center) {
    RigidShape.call(this);
    
=======
function Circle (center, radius) {
  RigidShape.call(this, center);
  this.type = 'Circle';
  this.radius = radius;
  // The start point of line in circle
  this.startPoint = new Vec2D(center.x, center.y - radius);
}

let circleProto = Object.create(RigidShape.prototype);
circleProto.constructor = Circle;
Circle.prototype = circleProto;

Circle.prototype.draw = function(ctx) {
  ctx.beginPath();
  // draw a circle
  ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, true);
  // draw a reference line
  ctx.moveTo(this.startPoint.x, this.startPoint.y);
  ctx.lineTo(this.center.x, this.center.y);
  ctx.closePath();
  ctx.stroke();
>>>>>>> 415e9da53131b3d1edf1426da7f1b0f268e4dedb
}