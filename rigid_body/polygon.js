function Polygon (center, verticesArr, type, type2, type3) {
  RigidShape.call(this, center);
  this.type = type; // Regular or Irregular
  this.type2 = type2; // Concave or Convex
  this.type3 = type3; // Simple or Complex
}

let polygonProto = Object.create(RigidShape.prototype);
polygonProto.constructor = Polygon;
Polygon.prototype = polygonProto;

Polygon.prototype.draw = function(ctx) {
  // not implemented yet
}

Polygon.prototype.move = function(delta) {
  // not implemented yet
}
