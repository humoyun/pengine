function Triangle(center) {
  RigidShape.call(this, center);
}

let triangleProto = Object.create(RigidShape.prototype);
triangleProto.constructor = Triangle;
Triangle.prototype = triangleProto;

Triangle.prototype.draw = function(ctx) {
  // not implemented yet
}

Triangle.prototype.move = function(delta) {
  // not implemented yet
}
