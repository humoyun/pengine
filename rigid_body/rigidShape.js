function RigidShape (center) {
  this.center = center;
  this.angle = 0;
  // wow
  gEngine.Core.mObjectStorage.push(this);
}

RigidShape.prototype.update = function() {
  if (this.center.y < gEngine.Core.mHeight && this.mFix !== 0) {
    this.move(new Vec2D(0, 1));
  }
} 