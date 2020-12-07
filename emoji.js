class Emoji  {
  display()  {
    strokeWeight(4);
    stroke(0);
    fill(255, 180, 0);
    ellipse(mouseX, mouseY, 80,80);
    line(mouseX-20, mouseY-20, mouseX-10, mouseY-10);
    line(mouseX+20, mouseY-20, mouseX+10, mouseY-10);
    line(mouseX-15, mouseY+25, mouseX, mouseY+17);
    line(mouseX+15, mouseY+25, mouseX, mouseY+17);
  }
}
