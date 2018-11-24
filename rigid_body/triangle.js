function Triangle(center, vertices) {
  const [A, B, C] = vertices;
  RigidShape.call(this, );
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
