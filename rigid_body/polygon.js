function Polygon (center, verticesArr) {
  RigidShape.call(this, center);
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
