class Repeller {

  constructor() {
    this.pos = createVector(this.mouseX, this.mouseY);
  }

  display() {
    noStroke();
    fill(150, 0, 255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}
