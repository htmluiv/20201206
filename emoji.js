class Emoji  {
  display()  {
    strokeWeight(4);
    stroke(0);
    fill(255, 180, 0);
    ellipse(mouseX, mouseY, 80,80);
    line(mouseX-20, mouseY-20+slider.value()/100, mouseX-10, mouseY-10); //left eye
    line(mouseX+20, mouseY-20+slider.value()/100, mouseX+10, mouseY-10); //rignt eye
    line(mouseX-15, mouseY+25-slider.value()/70, mouseX, mouseY+17); // left lip
    line(mouseX+15, mouseY+25-slider.value()/70, mouseX, mouseY+17); // right lip
  }
}
