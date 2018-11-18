function CollisionInfo () {
  this.mDepth = 0;
  this.mNormal = new Vec2D(0, 0);
  this.mStart = new Vec2D(0, 0);
  this.mEnd = new Vec2D(0, 0);
}

/**
 * Set the all value of the CollisionInfo
 * @memberOf CollisionInfo
 * @param {Number} d the depth of the CollisionInfo 
 * @param {Vec2D} n the normal of the CollisionInfo
 * @param {Vec2D} s the startpoint of the CollisionInfo
 * @returns {void}
 */
CollisionInfo.prototype.setInfo = function(depth, normal, start) {
  this.mDepth = depth;
  this.mNormal = normal;
  this.mStart = start;
  this.mEnd = start.add(normal.scale(depth));
}

CollisionInfo.prototype.setNormal = function(normal) {
  this.mNormal = normal;
}

CollisionInfo.prototype.getNormal = function() {
  return this.mNormal;
}

CollisionInfo.prototype.getDepth = function() {
  return this.mDepth;
}

/**
 * This function will be used to ensure that the normal is always pointing 
 * from the primary to the object that is being tested for collision.
 */
CollisionInfo.prototype.changeDirection = function() {
  this.mNormal = this.mNormal.scale(-1);
  const tmp = this.mStart;
  this.mStart = this.mEnd;
  this.mEnd = tmp;
} 