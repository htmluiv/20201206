class Virus   {
  constructor(x, y)  {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
