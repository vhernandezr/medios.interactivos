var x = 0;
var y = 0;
var pos = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  noStroke();

  //fondo negro
  fill(x /12, x / 100, x / 50, 250);
  rect(0, 0, width, height);

  ////fondo cielo 
  fill(20/x, 255 + x / 50, 250, 10);
  rect(0, 0, width, height);
  //fondito
  fill(0);

  //// luna 
 

  ellipse(x - 100, height / 2, 100-x/20, 100-x/20);

  //// tierra
  fill(x + 3, x + 16, x + 13);
  ellipse(300, 200, 200, 200);
  //// tierra
  noStroke();
  fill(x / 50, x / 10, x / 30, 200);
  ellipse(300, 200, 200, 200);
///
  fill(x/50, x /20, x/ 100, 100);
  ellipse(300, 200, 200, 200);
  //// luna 
  fill(y*20, y*20, y*20);
ellipse(x - 100, height / 2, 100-x/20, 100-x/20);
 

///stars
  fill(82+y, 29+y, 250+y);
  ellipse(100, 300, 25, 25);
   ellipse(560, 25, 25, 25);
  ellipse(120, 140, 15, 15);
  ellipse(200, 360, 20, 20);
  fill(252+y, 5+y, 175+y);
  ellipse(20, 380, 18, 18);
  ellipse(580, 180, 20, 20);
  ellipse(500, 280, 15, 15);
  ellipse(250, 10, 15, 15);
  ellipse(210, 90, 15, 15);
  fill(200+y, 40+y, 110+y);

    ellipse(420, 50, 15, 15);
  ellipse(300, 350, 15, 15);
  ellipse(520,120, 15, 15);
  fill(2+y, 250+y, 226+y);
  ellipse(400, 380, 18, 18);
  ellipse(20, 100, 18, 18);
  ellipse(100, 20, 25, 25);
  ellipse(320,70, 18, 18);
 
  ellipse(540, 380, 20, 20);
  //////////////////
  y= y+ 3*pos;
  x = x + 1.5 * pos;
  if ((x > width + 200) || (x < 0)) {
    pos = pos * -1;
  
  }
}