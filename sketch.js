let viruses = [];
let repeller;

function setup() {
  createCanvas(600, 600);
  for(let i=0; i<200; i++)  {
    viruses[i] = new Virus(random(width), random(height));
  }
  emoji = new Emoji();
  slider = createSlider(1, 999, 2);
  timepass = 0;
  repeller = new Repeller();
}

function draw() {
  background(slider.value()/4);
  emoji.display();

  for(let i=0; i<200-slider.value()/5; i++)  {
    let force = repeller.repel(viruses[i]);
    viruses[i].applyForce(force);
    viruses[i].display();
    viruses[i].update();
  }
  repeller.display();

  strokeWeight(0);
  textStyle(BOLD);
  textSize(35);
  fill(255, 0, 0);
  text(timepass+ floor(slider.value()), 40, 570);
  fill(255, 0, 0);
  text('Days After COVID-19 Emerges', 330, 570);
}

function mouseMoved() {
  repeller.handleHover(mouseX, mouseY);
}

function mousePressed() {
  repeller.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  repeller.handleHover(mouseX, mouseY);
  repeller.handleDrag(mouseX, mouseY);
}

function mouseReleased()  {
  repeller.stopDragging()
}
