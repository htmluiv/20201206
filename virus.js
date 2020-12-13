class Virus   {
  constructor(x, y)  {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
  }

  display() {
    noStroke()
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  update()  {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}
