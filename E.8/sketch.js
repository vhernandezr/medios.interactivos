var x = [];
var y = [];

var x1 = [];
var y1 = [];

var x2 = [];
var y2 = [];

var x3 = [];
var y3 = [];

var x4 = [];
var y4 = [];

var cant = 10;


function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < cant; i = i + 1) {
    x[i] = random(width);
    y[i] = random(200);
    x1[i] = random(500);
    y1[i] = random(height);
    x2[i] = random(width);
    y2[i] = random(height);
    x3[i] = random(width);
    y3[i] = random(height);
    x4[i] = random(width);
    y4[i] = 600;
    
  }
}

function draw() {
  background(70, 140, 240);

  for (var i = 0; i < cant; i = i + 1) {
    //patos
noStroke();
    fill(158,70, 28);
    beginShape();
    vertex(x[i], y[i]);
    vertex(x[i] - 4, y[i] + 1);
    curveVertex(x[i] - 9, y[i] - 3);
    vertex(x[i] - 17, y[i] + 3);
    vertex(x[i] - 20, y[i] + 13);
    vertex(x[i] - 47, y[i] + 4);
    vertex(x[i] - 54, y[i] - 14);
    curveVertex(x[i] - 112, y[i] - 24);
    vertex(x[i] - 81, y[i] - 2);
    vertex(x[i] - 69, y[i] + 18);
    vertex(x[i] - 56, y[i] + 36);
    vertex(x[i] - 60, y[i] + 47);
    curveVertex(x[i] - 74, y[i] + 55);
    vertex(x[i] - 58, y[i] + 69);
    vertex(x[i] - 52, y[i] + 54);
    vertex(x[i] - 31, y[i] + 46);
    curveVertex(x[i]+9 , y[i] + 46);
    
    curveVertex(x[i] + 16, y[i] +48);//
    vertex(x[i] + 46, y[i] + 56);
    vertex(x[i] + 26, y[i] + 22);//
    vertex(x[i]+7 , y[i] + 28);
    curveVertex(x[i] - 9, y[i] + 25);
    vertex(x[i] - 11, y[i] + 10);
    endShape(CLOSE);
    fill(255,210, 50);
beginShape();
    vertex(x[i], y[i]);
    vertex(x[i] - 4, y[i] + 1);
    curveVertex(x[i] - 9, y[i] - 3);
    vertex(x[i] - 7, y[i] + 3);
    vertex(x[i] - 2, y[i] + 3);
    vertex(x[i] - 7, y[i] + 4);
    vertex(x[i] - 5, y[i] - 4);
endShape();
    fill(0,255,0);
    quad(x[i], y[i], x[i] - 7, y[i] + 3);
    
    if(x[i]<width || y[i]>height){
    x[i]=x[i]+random(0,5);
    y[i]=y[i]+random(-5,0);
    }else if(x[i]>width || y[i]<height){
      x[i]=0;
      y[i]=random(0,height);}
beginShape();
     fill(255,210, 50);
    vertex(x1[i], y1[i]);
     vertex(x1[i] - 10, y1[i] + 10);
    vertex(x1[i] - 27, y1[i] + 4);
    vertex(x1[i] -44, y1[i] - 14);
    curveVertex(x1[i] - 82, y1[i] - 24);
    vertex(x1[i] - 71, y1[i] - 2);
    vertex(x1[i] - 59, y1[i] + 18);
    vertex(x1[i] - 89, y1[i] + 18);
    endShape();

    fill(258,170, 50);
    beginShape();
    vertex(x1[i], y1[i]);
    vertex(x1[i] - 4, y1[i] + 1);
    curveVertex(x1[i] - 9, y1[i] - 3);
    vertex(x1[i] - 17, y1[i] + 3);
    //pajaros 
   
     
    vertex(x1[i] - 30, y1[i] + 13);
    vertex(x1[i] - 37, y1[i] + 4);
    vertex(x1[i] - 54, y1[i] - 14);
    curveVertex(x1[i] - 112, y1[i] - 24);
    vertex(x1[i] - 81, y1[i] - 2);
    vertex(x1[i] - 69, y1[i] + 18);
    vertex(x1[i] - 56, y1[i] + 36);
    vertex(x1[i] - 60, y1[i] + 47);
    curveVertex(x1[i] - 74, y1[i] + 55);
    vertex(x1[i] - 58, y1[i] + 69);
    vertex(x1[i] - 52, y1[i] + 54);
    vertex(x1[i] - 31, y1[i] + 46);
    endShape();
    beginShape();
     fill(255,10, 5);
    vertex(x1[i], y1[i]);
     vertex(x1[i] - 5, y1[i] + 5);
    vertex(x1[i] - 7, y1[i] + 4);
    vertex(x1[i] -4, y1[i] - 1);
    endShape();
    //
    if(x1[i]<width){
    x1[i]=x1[i]+random(0,5);
    }else if(x1[i]>width) {
      x1[i]=0;}
    
    //////7loros
       fill(30,155, 25);
    beginShape();
    curveVertex(x2[i], y2[i]);
    vertex(x2[i] - 10, y2[i] -6);
    vertex(x2[i] - 22, y2[i] - 12);
    vertex(x2[i] - 39, y2[i] -4);
    vertex(x2[i] - 86, y2[i] - 11);
   
    vertex(x2[i] - 61, y2[i]+15);
    curveVertex(x2[i] - 97, y2[i] +35);
     curveVertex(x2[i] - 68, y2[i]+35);
    curveVertex(x2[i] - 38, y2[i] +29);
    curveVertex(x2[i] - 22, y2[i] +10);
   
    endShape();
  
    
   if(x2[i]<width || y2[i]>height){
    x2[i]=x2[i]+random(0,25);
    y2[i]=y2[i]+random(-1,4);
    }else if(x2[i]>width || y2[i]<height){
      x2[i]=0;
      y2[i]=random(0,height);}
    
    ///////colibries
    noStroke();
    fill(205,245, 5);
    beginShape();
    curveVertex(x3[i], y3[i]);
    vertex(x3[i] - 10, y3[i] -6);
    vertex(x3[i] - 22, y3[i] - 12);
    vertex(x3[i] - 39, y3[i] -4);
    vertex(x3[i] - 86, y3[i] - 11);
   
    vertex(x3[i] - 61, y3[i]+15);
    curveVertex(x3[i] - 97, y3[i] +35);
     curveVertex(x3[i] - 68, y3[i]+35);
    curveVertex(x3[i] - 47, y3[i] +29);//
    curveVertex(x3[i] - 27, y3[i] +16);
    curveVertex(x3[i] - 18, y3[i] +49);
    curveVertex(x3[i] - 22, y3[i] +10);
   
    endShape();
  
    
   if(x3[i]<width || y3[i]>height){
    x3[i]=x3[i]+random(-1,15);
    y3[i]=y3[i]+random(-1,15);
    }else if(x3[i]>width || y3[i]<height){
      x3[i]=random(0,200);
      y3[i]=0;}
    ///////////////pingui
     fill(5);
    beginShape();
    curveVertex(x4[i], y4[i]);
    curveVertex(x4[i] - 27, y4[i] -2);
   curveVertex(x4[i] - 57, y4[i] +76);
    curveVertex(x4[i] - 55, y4[i] +105);
    vertex(x4[i] - 48, y4[i] + 76);
   
    vertex(x4[i] - 43, y4[i]+105);
    curveVertex(x4[i] - 9, y4[i] +106);
     curveVertex(x4[i] -5, y4[i]+75);
    curveVertex(x4[i] + 1, y4[i] +102);//
    curveVertex(x4[i] + 5, y4[i] +81);
    curveVertex(x4[i] + 1, y4[i] +52);
   
    curveVertex(x4[i] - 17, y4[i] +16);
   
    endShape();
   ellipse(x4[i]-24, y4[i]+10, 30, 30);
    
   if(x4[i]<width || y4[i]>height){
    x4[i]=x4[i]+random(-5,5);
    y4[i]=y4[i]+random(-5,5);}
  }
  
}