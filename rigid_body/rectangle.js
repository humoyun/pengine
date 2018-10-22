function Rectangle (center, width, height) {
  RigidShape.call(this, center);
  this.width = width;
  this.height = height;
  this.type = 'Rectangle';
  this.vertices = [];
  this.faceNormals = [];

  /*  */  
  this.vertices[0] = new Vec2D(this.center.x-width/2, this.center.y-height/2);
  this.vertices[1] = new Vec2D(this.center.x+width/2, this.center.y-height/2);
  this.vertices[2] = new Vec2D(this.center.x+width/2, this.center.y+height/2);
  this.vertices[3] = new Vec2D(this.center.x-width/2, this.center.y+height/2);

  /* face normals for collision detection */
  this.faceNormals[0] = this.vertices[1].subtract(this.vertices[2]);
  this.faceNormals[0] = this.faceNormals[0].normalize();
  this.faceNormals[1] = this.vertices[2].subtract(this.vertices[3]);
  this.faceNormals[1] = this.faceNormals[1].normalize();
  this.faceNormals[2] = this.vertices[3].subtract(this.vertices[0]);
  this.faceNormals[2] = this.faceNormals[2].normalize();
  this.faceNormals[3] = this.vertices[0].subtract(this.vertices[1]);
  this.faceNormals[3] = this.faceNormals[3].normalize();
}

let rectProto = Object.create(RigidShape.prototype);
rectProto.constructor = Rectangle;
Rectangle.prototype = rectProto;

Rectangle.prototype.draw = function(ctx) {
  ctx.save();
  ctx.translate(this.vertices[0].x, this.vertices[0].y);
  ctx.rotate(this.angle);
  ctx.strokeRect(0,0,this.width, this.height);
  ctx.restore();
}


/**
 * When you perform a transformation, the entire context’s coordinate system 
 * is transformed. After transforming, you often want the coordinate system 
 * to be back to normal for your next step. Reversing the transformation 
 * by using another transformation is a dicey affair and can easily 
 * introduce small errors that add up quickly. It’s easier to 
 * simply save the normal starting coordinate system as 
 * a saved drawing state and then after we do our 
 * transformation and wish to have a normal 
 * coordinate system as opposed to our 
 * newly transformed one, we simply 
 * restore the state we saved 
 * before transforming. 
 * 
 * Got it? LOL. Here’s some pictures to make it clearer.
 */