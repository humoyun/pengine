function Rectangle (center, width, height, fix) {
  RigidShape.call(this, center);
  this.width = width;
  this.height = height;
  this.mBoundRadius = Math.sqrt(width*width + height*height)/2;
  this.type = 'Rectangle';
  this.vertices = [];
  this.faceNormals = [];
  // if (this.width>10 && this.height>10) {
  this.centerPoint = center;
  //}
  

  /*  */  
  this.vertices[0] = new Vec2D(this.center.x-width/2, this.center.y-height/2);
  this.vertices[1] = new Vec2D(this.center.x+width/2, this.center.y-height/2);
  this.vertices[2] = new Vec2D(this.center.x+width/2, this.center.y+height/2);
  this.vertices[3] = new Vec2D(this.center.x-width/2, this.center.y+height/2);

  /* face normals for collision detection */
  this.calcFaceNormals();
}

// const shape = new RigidShape();
// let rectProto = Object.create(Object.getPrototypeOf(shape));
let rectProto = Object.create(RigidShape.prototype);
// by default rectProto.constructor points to RigidShape function
rectProto.constructor = Rectangle; 
Rectangle.prototype = rectProto;

Rectangle.prototype.draw = function(ctx) {
  ctx.save();
  ctx.translate(this.vertices[0].x, this.vertices[0].y);
  ctx.rotate(this.angle);
  ctx.strokeRect(0,0,this.width, this.height);
  ctx.restore();
}

Rectangle.prototype.move = function(delta) {
  for (let i=0; i<this.vertices.length; i+=1) {
    this.vertices[i] = this.vertices[i].add(delta);
  }
  this.center = this.center.add(delta);
  this.centerPoint.move(this.center);
  return this;
}

Rectangle.prototype.rotate = function(angle) {
  if (this.angle >= 6.30 || this.angle <= -6.30) {
    this.angle = 0;
  }
  this.angle += angle;
  for (let i=0; i<this.vertices.length; i+=1) {
    this.vertices[i] = this.vertices[i].rotate(this.center, angle);
  }
  /* recalculate face normals */
  this.calcFaceNormals();
  return this;
}

Rectangle.prototype.calcFaceNormals = function() {
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







// reCAPTCHA
// site key: 6LeKmXoUAAAAACocAAhavvh2Jv3FEVEn8ulNL9lo
// Secret key: 6LeKmXoUAAAAALAGEnzi7c52E5aldyQziRYcBtEF

// <script src='https://www.google.com/recaptcha/api.js'></script>
// 

// secret (required)	6LeKmXoUAAAAALAGEnzi7c52E5aldyQziRYcBtEF
// response (required)	The value of 'g-recaptcha-response'.



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
 */
