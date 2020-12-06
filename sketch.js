function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 999, 2);
  timepass = 0;
}

function draw() {
  background(0);
  textStyle(BOLD);
  textSize(20);
  fill(255, 0, 0);
  text(timepass+ floor(slider.value()), 0, 20);
  fill(110);
  text('Days After COVID-19 Emerges', 40, 20);
}
