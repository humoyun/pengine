
const Vec2D = function(x, y) {
    this.x = x;
    this.y = y;
}

/* base is (0,0) [the length of hypothenuse in triangle ] */
Vec2D.prototype.magnitude = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vec2D.prototype.direction = function() {

}

Vec2D.prototype.add = function(vec) {
    return new Vec2D(vec.x + this.x, vec.y + this.y);
}

Vec2D.prototype.subtract = function(vec) {
    return new Vec2D(this.x - vec.x, this.y - vec.y);
}

Vec2D.prototype.scale = function(n) {
    return new Vec2D(this.x*this.n, this.y*this.n);
}

Vec2D.prototype.dot = function(vec) {
    return (this.x * vec.x + this.y * vec.y);
}

Vec2D.prototype.cross = function(vec) {
    return (this.x * vec.y - this.y * vec.x);
}

Vec2D.prototype.rotate = function(center, angle) {
    // rotate in counterclockwise
    // https://matthew-brett.github.io/teaching/rotation_2d.html#theorem
    let r = [];
    const x = this.x - center.x;
    const y = this.y - center.y;
    r[0] = x * Math.cos(angle) - y * Math.sin(angle);
    r[1] = x * Math.sin(angle) + y * Math.cos(angle);
    r[0] = (r[0] + center.x).toPrecision(6);
    r[1] = (r[1] + center.y).toPrecision(6);
    
    return new Vec2D(r[0], r[1]);
}

Vec2D.prototype.normalize = function() {
    let magnitude = this.magnitude();
    if (!magnitude) {
        magnitude = 1/magnitude;
    }
    return new Vec2D(this.x*magnitude, this.y*magnitude);
}

Vec2D.prototype.distance = function(vec) {
    const x = this.x - vec.x;
    const y = this.y - vec.y;
    return Math.sqrt(x*x + y*y);
}
