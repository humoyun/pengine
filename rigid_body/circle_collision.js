"use strict";
/* global Circle */

/**
 * 
 * @param {*} otherShape 
 * @param {*} collInfo 
 */
Circle.prototype.collisionTest = function(otherShape, collInfo) {
  let status = false;
  if (otherShape.type === 'Circle') {
    status = this.collidedCircCirc(this, otherShape, collInfo);
  } else {
    status = false;
  }
  return status;
}

/**
 * 
 * @param {Vec2D} C1 center of the first circle
 * @param {Vec2D} C2 center of the second circle
 * @param {CollisionInfo} collInfo 
 */
Circle.prototype.collidedCircCirc = function(C1, C2, collInfo) {
  const fromC1toC2 = C1.center.subtract(C2.center);
  const radiusSum = C1.radius + C2.radius;
  const distance = fromC1toC2.magnitude();

  if (distance > Math.sqrt(radiusSum*radiusSum)) {
    return false; // not overlapping
  }

  /* distance !== 0 or in other words distance < radiusSum 
   * (there is obviously collision)
   */
  if (distance !== 0) {
    // overlapping but not same position
    const normalFromC2toC1 = fromC1toC2.scale(-1).normalize();
    // radiusC2 - distance between the center of C2 and start point of depth 
    // which equals to the radius of C2
    const radiusC2 = normalFromC2toC1.scale(C2.radius); 
    const depth = radiusSum - distance;

    collInfo.setInfo(depth, fromC1toC2.normalize(), C2.center.add(radiusC2));
  } else {
    //same position
    if (C1.radius > C2.radius) {
      collInfo.setInfo(radiusSum, new Vec2D(0, -1), C1.center.add(new Vec2D(0, C1.radius)));
    } else {
      collInfo.setInfo(radiusSum, new Vec2D(0, -1), C2.center.add(new Vec2D(0, C2.radius)) );
    }
  }
}