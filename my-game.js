function MyGame () {
  const width = gEngine.Core.mWidth;
  const height = gEngine.Core.mHeight;
  const up = new Rectangle(new Vec2D(width/2, 0), width, 3);
  const down = new Rectangle(new Vec2D(width/2, height), width, 3);
  const left = new Rectangle(new Vec2D(0, height/2), 3, height);
  const right = new Rectangle(new Vec2D(width, height/2), 3, height);
}