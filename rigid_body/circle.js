function Circle (center, radius, fix) {
  RigidShape.call(this, center);
  this.type = 'Circle';
  this.radius = radius;
  this.mFix = fix;
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
}

Circle.prototype.move = function(delta) {
  // adding the movement vector `s` to the center and the startpoint.
  this.startPoint = this.startPoint.add(delta);
  this.center = this.center.add(delta);
  return this;
}

Circle.prototype.rotate = function(angle) {
  this.angle += angle;
  this.startPoint = this.startPoint.rotate(this.center, angle);
  return this;
}