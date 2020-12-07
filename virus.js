class Virus   {
  constructor(x, y)  {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  display() {
    // strokeWeight(3);
    // stroke(250-slider.value()/4);
    noStroke()
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
