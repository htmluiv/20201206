class Virus   {
  constructor(x, y)  {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.acc = createVector(0, 0);
    this.mass = 1;
  }

  applyForce(force)  {
   let f = p5.Vector.div(force, this.mass);
   this.acc.add(f);
 }

  display() {
    noStroke()
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    // if(this.pos.x > width || this.pos.x < 0)  {
    //   this.vel.x*= -1;
    // }
    // if(this.pos.y > width || this.pos.y < 0)  {
    //   this.vel.y*= -1;
    // }
  }

  update()  {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.limit(5);
  }
}
