class Emoji  {
  display()  {
    let x = 200;
    let y = 200;
    let r = 100;
    strokeWeight(4);
    stroke(0);
    fill(255, 180, 0, 100);
    ellipse(x, y, r);
    line(x-20, y-20+slider.value()/100, x-10, y-10); //left eye
    line(x+20, y-20+slider.value()/100, x+10, y-10); //rignt eye
    line(x-15, y+25-slider.value()/70, x, y+17); // left lip
    line(x+15, y+25-slider.value()/70, x, y+17); // right lip
  }
}
