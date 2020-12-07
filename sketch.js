let vir = [];
let l = 1;

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<200; i++)  {
    vir[i] = new Virus(random(width), random(40, 400));
  }
  emoji = new Emoji();
  slider = createSlider(1, 999, 2);
  timepass = 0;
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
    vir[i].display();
    vir[i].update();
  }
}
