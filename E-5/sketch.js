var x = 300;
var y = 100;

var x2 = 200;
var y2 = 200;
var v2= 205;

var xdir = 1;  
var ydir = 1;

var zdir = 1;  
var idir = 1;

var z= 100;
var i= 100;

var dir=0;
var puntaje = 0;
var puntaje2=0;

function setup() {
  createCanvas(600, 400);
  x2 = random(0, width);
  y2 = random(height, 0);

  x=x+5;
  xdir = 1;
  ydir= 0;

  z=z+5;
  zdir = 0;
  idir = -1;
}

function draw() {
  background(puntaje, 0, puntaje2, 100);
  /////barras
  noStroke();
  fill(100, 0, 100, 200);
  rect(0, 0, 5, 200);
  rect(595, 200, 5, 200);
  fill(0, 200, 200, 100);
  rect(0, 200, 5, 200);
  rect(595, 0, 5, 200);
  /////////////////serpientes/////////1
  fill(255);
  rect(x, y, 20, 10);
  stroke(0);
  fill(255, 0, 50);
  rect(x, y, 20, 10);
  ellipse(x+10, y+16, 20, 15);
  rect(x+4, y+22, 12, 6);
  ellipse(x+10, y+16, 10, 15);
  ellipse(x+10.5, y+31, 12, 6);
  beginShape();
  vertex(x, y);
  vertex(x+20, y);
  vertex(x+25, y-8);
  vertex(x+20, y-15);
  vertex(x+10, y-20);
  vertex(x, y-15);
  vertex(x-5, y-8);
  endShape();
  fill(0);
  ellipse(x+2, y-10, 8, 8);
  ellipse(x+18, y-10, 8, 8);
  fill(255);
  ellipse(x+2, y-10, 4, 4);
  ellipse(x+18, y-10, 4, 4);

  /////////////////////////////
  stroke(0);
  fill(0, 100, 255);
  rect(z, i, 20, 10);
  ellipse(z+10, i+16, 20, 15);
  rect(z+4, i+22, 12, 6);
  ellipse(z+10, i+16, 10, 15);
  ellipse(z+10.5, i+31, 12, 6);
  beginShape();
  vertex(z, i);
  vertex(z+20, i);
  vertex(z+25, i-8);
  vertex(z+20, i-15);
  vertex(z+10, i-20);
  vertex(z, i-15);
  vertex(z-5, i-8);
  endShape();
  fill(0);
  ellipse(z+2, i-10, 8, 8);
  ellipse(z+18, i-10, 8, 8);
  fill(255);
  ellipse(z+2, i-10, 4, 4);
  ellipse(z+18, i-10, 4, 4);
  ///////////////////RATON/////////////////2
  stroke(0);
  fill(180);
  ellipse(x2, y2, 21, 25);
  stroke(0);
  ellipse(x2-12, y2+5, 12, 14);
  ellipse(x2+12, y2+5, 12, 14);
  ellipse(x2, y2+12, 20, 20);
  fill(255);
  ellipse(x2-5, y2+12, 10, 10);
  ellipse(x2+5, y2+12, 10, 10);
  fill(0);
  ellipse(x2-5, y2+12, 5, 5);
  ellipse(x2+5, y2+12, 5, 5);
  ellipse(x2, y2+22, 5, 5);
  fill(255);
  ellipse(x2-5, y2+12, 2, 2);
  ellipse(x2+5, y2+12, 2, 2);

  //////////////////////////////////////////////

  print(dist(x, y, x2, y2));
  if (dist(x, y, x2, y2) < 30) {
    x2 = random(0, width);
    y2 = random(height, 0);
    puntaje = puntaje + 20;
  }

  print(dist(z, i, x2, y2));
  if (dist(z, i, x2, y2) < 30) {
    x2 = random(0, width);
    y2 = random(height, 0);
    puntaje2 = puntaje2 + 20;
  }

  //////////////////////////////////////
  if (x<0 && y<200) {
    x= width;
    y=300;
  }
  if (x>width && y>200) {
    x= 0;
    y=100;
  }
  if (x<0 && y>200) {
    x= width;
    y=100;
  }
  if (x>width && y<200) {
    x= 0;
    y=300;
  }
  if (y<0) {
    y=height;
  }
  if (y>height) {
    y=0;
  }
  if (z<0 && i<200) {
    z= width;
    i=300;
  }
  if (z>width && i>200) {
    z= 0;
    i=100;
  }
  if (z<0 && i>200) {
    z= width;
    i=100;
  }
  if (z>width && i<200) {
    z= 0;
    i=300;
  }
  if (i<0) {
    i=height;
  }
  if (i>height) {
    i=0;
  }
  //////////////////////////////////
  if (keyIsPressed == true) {

    if (keyCode == '68') {
      z = z + 5;
      zdir = 1;
      idir =0;
    } else if (keyCode == '65') {
      z = z - 5;
      zdir = -1;
      idir =0;
    } else if (keyCode == '87') {
      i = i - 5;
      zdir = -1;
      idir =0;
    } else if (keyCode == '83') {
      i = i + 5;
      zdir = 1;
      idir =0;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == RIGHT_ARROW ) {
      x = x + 5;
      xdir = 1;
      ydir= 0;
    }
    if (keyCode == LEFT_ARROW) {
      x = x - 5;
      xdir = -1;
      ydir= 0;
    }
    if (keyCode ==UP_ARROW) {
      y = y - 5;
      xdir = -1;
      ydir= 0;
    }
    if (keyCode == DOWN_ARROW) {
      y = y + 5;
      xdir = 1;
      ydir= 0;
    }
  }
}
