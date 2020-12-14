class Repeller {

  constructor() {
   this.pos = createVector(200,200);
   this.mass = 20;
   this.G = -5;
 }

 repel(virus)  {
   let force = p5.Vector.sub(this.pos, virus.pos);
   let distance = force.mag();
   distance = constrain(distance, 10, 100);
   let strength = (this.G * this.mass * virus.mass) / (distance * distance);
   force.setMag(strength);
   return force;
 }

 display() {
   noStroke();
   fill(150, 0, 255);
   ellipse(this.pos.x, this.pos.y, 50, 50);
 }
}
