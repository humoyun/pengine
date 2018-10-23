function MyGame () {
  const width = gEngine.Core.mWidth; // 800 
  const height = gEngine.Core.mHeight; // 450

  var center = new Rectangle(new Vec2D(width/2, height/2), 3, 3, 0);
  const up = new Rectangle(new Vec2D(width/2, 0), width, 3, 0);
  const down = new Rectangle(new Vec2D(width/2, height), width, 3, 0);
  const left = new Rectangle(new Vec2D(0, height/2), 3, height, 0);
  const right = new Rectangle(new Vec2D(width, height/2), 3, height, 0);
}