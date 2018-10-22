function RigidShape (center) {
  this.center = center;
  this.angle = 0;
  // wow
  gEngine.Core.objectStorage.push(this);
}