function CollisionInfo () {
  this.mDepth = 0;
  this.mNormal = new Vec2D(0, 0);
  this.mStart = new Vec2D(0, 0);
  this.mEnd = new Vec2D(0, 0);
}

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

CollisionInfo.prototype.changeDirection = function() {
  this.mNormal = this.mNormal.scale(-1);
  const tmp = this.mStart;
  this.mStart = this.mEnd;
  this.mEnd = tmp;
} 