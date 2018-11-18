let circleClock = 0;

function Circle (center, radius, mass, friction, rstitution) {
  RigidShape.call(this, center, mass, friction, rstitution);
  this.type = 'Circle';
  this.radius = radius;
  this.mBoundRadius = radius;
  // The start point of line in circle
  this.startPoint = new Vec2D(center.x, center.y - radius);
}

let circleProto = Object.create(RigidShape.prototype);
circleProto.constructor = Circle;
Circle.prototype = circleProto;

/**
 * 
 * @param {*} ctx 
 */
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

/**
 * 
 * @param {*} delta 
 */
Circle.prototype.move = function(delta) {
  // adding the movement vector `s` to the center and the startpoint.
  this.startPoint = this.startPoint.add(delta);
  this.center = this.center.add(delta);
  // console.log('**[Circle:move] center: (', this.center.x,',',this.center.y, '); pointer:(', this.startPoint.x,',', this.startPoint.y, ')');
  
  return this;
}

/**
 * 
 * @param {*} angle 
 */
Circle.prototype.rotate = function(angle) {
  // if (this.angle >= 6.30 || this.angle <= -6.30) {
  //   this.angle = 0;
  // }
  this.angle += angle;
  this.startPoint = this.startPoint.rotate(this.center, angle);
  // console.log('[Circle:rotate] = ', this);
  return this;
}
