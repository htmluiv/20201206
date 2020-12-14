let viruses = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<200; i++)  {
    viruses[i] = new Virus(random(width), random(40, 400));
  }
  emoji = new Emoji();
  slider = createSlider(1, 999, 2);
  timepass = 0;
  repeller = new Repeller();
}

function draw() {
  background(slider.value()/4);
  emoji.display();
  strokeWeight(0);
  textStyle(BOLD);
  textSize(20);
  fill(255, 0, 0);
  text(timepass+ floor(slider.value()), 0, 20);
  fill(170, 0, 0);
  text('Days After COVID-19 Emerges', 40, 20);

  for(let i=0; i<200-slider.value()/5; i++)  {
    let force = repeller.repel(viruses[i]);
    viruses[i].applyForce(force);
    viruses[i].display();
    viruses[i].update();
  }
  repeller.display();
}
