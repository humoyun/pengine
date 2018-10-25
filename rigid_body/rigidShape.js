function RigidShape (center, mass, friction, restitution) {
  this.center = center;
  this.angle = 0;
  this.mBoundRadius = 0;
  // wow
  gEngine.Core.mObjectStorage.push(this);
}

RigidShape.prototype.update = function() {
  // if (this.center.y < gEngine.Core.mHeight && this.mFix !== 0) {
  //   this.move(new Vec2D(0, 1));
  // }
}

RigidShape.prototype.boundTest = function(otherShape) {
  const delta = otherShape.center.subtract(this.center);
  const dist = delta.magnitude();
  const radSum = this.mBoundRadius + otherShape.mBoundRadius;
  
  if (dist < radSum) {
    return true; // overlapping
  }
  return false;
}