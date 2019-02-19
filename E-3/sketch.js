var z=600;
var x=118.75;
var x2= 681.25;
var i=250;
var i2=550;
var v= 175;
var v2= 325;
var w= 475;
var w2= 625;
var o= 137.5;
var o2= 212.5;
var h= 287.5;
var h2= 362.5;
var g= 437.5;
var g2= 512.5;
var c= 587.5;
var c2= 662.5;
var rojo=0;
var verde=0;
var azul=0;
var y=0;
function setup() {
  createCanvas(700, 400);
}

function draw() {

  background(0,0,0);
  
  
  fill(255);
 
  noStroke();

  fill(255);
  //grandeeee
  ellipse(400, 200, z, z);
  z= z-4;
  if (z>600) {
    z= 0;
   
  }
  
    z= z-4;
  if (z<0) {
    z= 600;
  }
  ////
   
  //medianos 
  //iz
  ///colooooor
 
  //azul
  if (i< 400) {
    r = map(i, 0, 700, 0, 230);

    fill(0, 180, i, 160);
  }
  //rojo
  if (i>=400) {
    r = map(i, 0, 700, 0, 252);

    fill(i, 7,200, 160);
  }
  ///figura
  ellipse(i, 200, 300, 300);
  i= i+2.09;
  if (i>=width-150) {
    i= 250;
  }
  //coloooooor
  //azzzza
  if (i2<=400) {
    r = map(i2, 0, 700, 0, 230);

    fill(20, 180, i2, 160);
  }
  ///roj
  if (i2>=400) {
    r = map(i2, 0, 700, 0, 252);

    fill(i2, 8, 200, 150);
  }
  //der
  ellipse(i2, 200, 300, 300);
  i2= i2-2.09;
  if (i2<=250) {
    i2= 550;
  }
//////////////////////////////
//colooooooooooor
//verdee
if (v<= 250) {
    r = map(v, 0, 400, 0, 255);

    fill(0, v,66, 160);
  }
  ///ficsia
  if (v>250) {
    r = map(v, 0, 400, 0, 140);

    fill(v, 10, 85, 160);
  }
  //pequeños
  //der
  ellipse(v, 200, 150, 150);
  v= v+2.05;
  if (v>=325) {
    v= 175;
  }
  //////////////////color
  //verde
  if (v2< 250) {
    r = map(v2, 0, 400, 0, 255);

    fill(0, v2,66, 160);
  }
  ///ficsia
  if (v2>250) {
    r = map(v2, 0, 400, 0, 140);

    fill(v2, 10, 85, 160);
  }
  //iz
  ellipse(v2, 200, 150, 150);
  v2= v2-2.05;
  if (v2<=175) {
    v2= 325;
  }
  //extrema iz
  //coloooor
   //verde
  if (w> 550) {
    r = map(w, 0, 400, 0, 252);

    fill(w,236,6, 160);
  }
  ///ficsia
  if (w<550) {
    r = map(w, 0, 400, 0, 255);

    fill(w, 100, 20, 160);
  }
  
  ellipse(w, 200, 150, 150);
  w= w+2.05;
  if (w>=width-75) {
    w= 475;
  }
   //verde
  if (w2> 550) {
    r = map(w2, 0, 400, 0, 252);

    fill(w2,237,6, 160);
  }
  ///ficsia
  if (w2<550) {
    r = map(w2, 0, 400, 0, 255);

    fill(w2, 100, 20, 160);
  }
  //extema der
  ellipse(w2, 200, 150, 150);
  w2= w2-2.05;
  if (w2<=475) {
    w2= 625;
  }
  //pequeñitos

    fill(0,0,0, 180);
 
  ellipse(o, 200, 75, 75);
  o= o+0.5;
  if (o>=250-37.5) {
    o= 137.5;
  }
  ellipse(o2, 200, 75, 75);
  o2= o2-0.5;
  if (o2<=137.5) {
    o2=250-37.5;
  }

  ellipse(h, 200, 75, 75);
  h= h+0.5;
  if (h>=400-37.5) {
    h= 250+37.5;
  }
  ellipse(h2, 200, 75, 75);
  h2= h2-0.5;
  if (h2<=250+37.5) {
    h2= 400-37.5;
  }

  ellipse(g, 200, 75, 75);
  g= g+0.5;
  if (g>=550-37.5) {
    g= 400+37.5;
  }
  ellipse(g2, 200, 75, 75);
  g2= g2-0.5;
  if (g2<=400+37.5) {
    g2= 550-37.5;
  }

  ellipse(c, 200, 75, 75);
  c= c+0.5;
  if (c>=700-37.5) {
    c= 550+37.5;
  }
  ellipse(c2, 200, 75, 75);
  c2= c2-0.5;
  if (c2<=550+37.5) {
    c2= 700-37.5;
  }
 
  ////pequeñititicoooo

  fill(255);
  ellipse(x, 200, 37.5, 37.5);
  x= x+3.9;
  if (x>width-18.75) {
    x= 118.75;
  }
  ellipse(x2, 200, 37.5, 37.5);
  x2= x2-3.9;
  if (x2<118.75) {
    x2=681.25;
  }
  

}
