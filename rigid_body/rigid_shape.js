function RigidShape (center) {
    this.center = center;
    this.angle = 0;
    gEngine.Core.allObjects.push(this);
}