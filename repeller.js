class Repeller {

  constructor() {
   this.pos = createVector(200, 200);
   this.mass = 10;
   this.G = 1;
   this.dragOffset = createVector(0, 0);
   this.dragging = false;
   this.rollover = false;
 }

 repel(virus)  {
   let force = p5.Vector.sub(this.pos, virus.pos);
   let distance = force.mag();
   distance = constrain(distance, 10, 10);
   let strength = (this.G * this.mass * virus.mass) / (distance * distance);
   force.setMag(strength);
   return force;
 }

 display() {
   noStroke();
   // fill(150, 0, 255);
   if(this.dragging)  {
     fill(50);
   } else if (this.rollover) {
     fill(100);
   } else {
     fill(175, 200);
   }
   ellipse(this.pos.x, this.pos.y, 50, 50);
 }

 //mouse interaction
  handlePress(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if(d<50) {
      this.dragging = true;
      this.dragOffset.x = this.pos.x - mx;
      this.dragOffset.y = this.pos.y - my;
    }
  }

  handleHover(mx, my)  {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if(d<50) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
}

  stopDragging()  {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if(this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    }
  }
}
