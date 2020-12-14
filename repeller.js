class Repeller {

  constructor() {
   this.pos = createVector(this.mouseX, this.mouseY);
   this.mass = 20;
   this.G = -1;
 }

 repel(virus)  {
   let force = p5.Vector.sub(this.pos, virus.pos);
   let distance = force.mag();
   distance = constrain(distance, 10, 50);
   let strength = (this.G * this.mass * virus.mass) / (distance * distance);
   force.setMag(strength);
   return force;
 }

 display() {
   noStroke();
   fill(150, 0, 255);
   ellipse(mouseX, mouseY, 50, 50);
 }
}
