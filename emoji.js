class Emoji  {
  display()  {
    let x = 200;
    let y = 200;
    let r = 100;
    strokeWeight(4);
    stroke(250-slider.value()/4, 200);
    fill(255, 180, 0, 150);
    ellipse(x, y, r);
    line(x-25, y-20+slider.value()/100, x-10, y-10); //left eye
    line(x+25, y-20+slider.value()/100, x+10, y-10); //rignt eye
    line(x-20, y+30-slider.value()/50, x, y+20); // left lip
    line(x+20, y+30-slider.value()/50, x, y+20); // right lip
  }
}
