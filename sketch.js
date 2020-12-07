let vir = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<100; i++)  {
    vir[i] = new Virus(random(width), random(height));
  }

  slider = createSlider(1, 999, 2);
  timepass = 0;
}

function draw() {
  background(slider.value()/4);
  textStyle(BOLD);
  textSize(20);
  fill(255, 0, 0);
  text(timepass+ floor(slider.value()), 0, 20);
  fill(170, 0, 0);
  text('Days After COVID-19 Emerges', 40, 20);
  for(let i=0; i<vir.length; i++)  {
    vir[i].display();
  }
}
