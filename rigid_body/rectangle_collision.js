"use strict";
/*global Rectangle, Vec2 */

/**
 * 
 * @param {RigidShape} otherShape 
 * @param {RigidShape} collInfo 
 */
Rectangle.prototype.collisionTest = function(otherShape, collInfo) {
    let status = false;
    if (otherShape.type === "Circle") {
        status = false;
    } else {
        status = false;
    }

    return status;
}