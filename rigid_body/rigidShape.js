/**
 * 
 * @param {Vec2D} center 
 * @param {*} mass 
 * @param {*} friction 
 * @param {*} restitution 
 */
function RigidShape (center, mass, friction, restitution) {
  this.center = center;
  this.angle = 0;
  this.mBoundRadius = 0;
  // wow
  gEngine.Core.mObjectStorage.push(this);
}

RigidShape.prototype.update = function() {

}

RigidShape.prototype.boundTest = function(otherShape) {
  const delta = otherShape.center.subtract(this.center);
  const distDiff = delta.magnitude();
  const radiuSum = this.mBoundRadius + otherShape.mBoundRadius;
  
  if (distDiff < radiuSum) {
    return true; // overlapping
  }
  return false;
}