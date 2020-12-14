class Emoji  {
  display()  {
    let x = width/2;
    let y = height/2;
    let r = 250;
    strokeWeight(8);
    stroke(250-slider.value()/4, 200);
    fill(255, 180, 0, 0);
    ellipse(x, y, r);
    line(x-55, y-50+slider.value()/25, x-20, y-20); //left eye
    line(x+55, y-50+slider.value()/25, x+20, y-20); //rignt eye
    line(x-50, y+80-slider.value()/20, x, y+50); // left lip
    line(x+50, y+80-slider.value()/20, x, y+50); // right lip
  }
}
