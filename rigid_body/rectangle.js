function Rectangle (center, width, height) {
    RigidShape.call(this, center);
    this.type = 'Rectangle';
    this.width = width;
    this.height - height;
    this.vertex = [];
    this.faceNormals = [];

    /* edge vertex */
    this.vertex[0] = new Vec2D(center.x - width/2, center.y - height/2);
    this.vertex[1] = new Vec2D(center.x + width/2, center.y - height/2);
    this.vertex[2] = new Vec2D(center.x + width/2, center.y + height/2);
    this.vertex[3] = new Vec2D(center.x - width/2, center.y + height/2);

    /* face normals */
    this.faceNormals[0] = this.vertex[1].subtract(this.vertex[2]);
    this.faceNormals[0] = this.faceNormals[0].normalize();
    this.faceNormals[1] = this.vertex[2].subtract(this.vertex[3]);
    this.faceNormals[1] = this.faceNormals[1].normalize();
    this.faceNormals[2] = this.vertex[3].subtract(this.vertex[0]);
    this.faceNormals[2] = this.faceNormals[2].normalize();
    this.faceNormals[3] = this.vertex[0].subtract(this.vertex[1]);
    this.faceNormals[3] = this.faceNormals[3].normalize();
}
