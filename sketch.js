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

  createP('"US"를 잡고 움직여 바이러스로부터 도망치세요.');
  createP('슬라이더를 움직여보세요.');
  createP('1. 코로나 바이러스의 출현으로 부터 얼마나 지났는지 확인하세요.');
  createP('2. 시간이 지남에 따른 바이러스의 개수를 확인하세요.');
  createP('3. 시간이 지남에 따른 얼굴의 변화를 확인하세요.');
  createP('4. 시간이 지남에 따른 분위기의 변화를 확인하세요.')
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
