var miFoto;

var pajarracos = [];
var numPajarracos = 6;

var patos = [];
var numPatos = 8;

var robertos = [];
var numRobertos = 5;

var colibries = [];
var numColibries = 4;
var pin;
var pingui = [];
var numPingui = 7;
var gx=30;
var gy=65;

function preload() {
  miFoto = loadImage('cieloo.jpg');
}

function setup() {
  createCanvas(800, 600);
pin= new pepe (random(width), 500);
  for (var i = 0; i < numPajarracos; i = i + 1) {
    pajarracos[i] = new pajaro(random(width), random(200));
  }
  for (var j = 0; j < numPatos; j = j + 1) {
    patos[j] = new duck(random(width), random(height));
  }
  for (var k = 0; k < numRobertos; k = k + 1) {
    robertos[k] = new roberto(random(width), 400);
  }
 for (var v = 0; v < numColibries; v = v + 1) {
     colibries[v] = new coli(random(width), random(height));
   }
    for (var w = 0; w < numPingui; w = w + 1) {
     pingui[w] = new pepe(random(width), 500);
   }
}
//////////////////////////////////////777
function draw() {
  background(70, 140, 240);
  image(miFoto, 0, 0, width, height);
  pin.dibujarse();
  pin.moverse();
  //////////////////////////////////////////////////////////////7
  for (var i = 0; i < numPajarracos; i = i + 1) {
    pajarracos[i].dibujarse();
    pajarracos[i].moverse();

    if (dist(mouseX, mouseY, pajarracos[i].miX, pajarracos[i].miY) < 10) {
      pajarracos[i].morirse();
    }
  }
  ////////////////////////////////////////////////////////
  
  /////////////////////////////////
  for (var k = 0; k < numRobertos;k = k + 1) {
    robertos[k].dibujarse();
    robertos[k].moverse();

    if (dist(mouseX, mouseY, robertos[k].miX3, robertos[k].miY3) < 10) {
      robertos[k].morirse();
    }
    for(var t=0; t < numPajarracos; t= t+1){
    if (dist(robertos[k].miX3, robertos[k].miY3)< 20,pajarracos[t].miX,pajarracos[t].miY) {
    pajarracos[t].escapar();
    }
    }
  }
  ///////////////////////7
  for (var v = 0; v < numColibries;v = v + 1) {
   colibries[v].dibujarse();
    colibries[v].moverse();

    if (dist(mouseX, mouseY, colibries[v].miX4, colibries[v].miY4) < 10) {
      colibries[v].morirse();
    }
  }
  ///////////////////
  for (var w = 0; w < numPingui; w = w + 1) {
   pingui[w].dibujarse();
    pingui[w].moverse();
for (var e = 0; e < numColibries; e= e + 1) {
      if (dist( pingui[w].miX5, pingui[w].miY5)< 25,colibries[e].miX4, colibries[e].miY4) {
       colibries[e].parar();
  }
else if (dist( pingui[w].miX5, pingui[w].miY5)< 25,colibries[e].miX4, colibries[e].miY4){
pingui[w].gx=pingui[w].gx+0.5;
  pingui[w].gy=pingui[w].gy+2;
}}}
  ///////////////
  for (var j = 0; j < numPatos;j = j + 1) {
   patos[j].dibujarse();
    patos[j].moverse();
if (dist(mouseX, mouseY, patos[j].miX2, patos[j].miY2) < 10) {
      patos[j].morirse();
    }
  
  /////////////////////////7
  for (var a = 0; a < numPingui; a= a + 1) {
      if (dist(patos[j].miX2, patos[j].miY2, pingui[a].miX5, pingui[a].miY5)< 15) {
        pingui[a].miX5= patos[j].miX2;
        pingui[a].miY5=patos[j].miY2;
        
      }else if(pingui[a].miY5<0){
      pingui[a].morirse();}
        }
    
  for (var o = 0; o< numPajarracos; o= o + 1) {
      if (dist(patos[j].miX2, patos[j].miY2, pajarracos[o].miX, pajarracos[o].miY)<15) {
      pajarracos[o].morirse();
      }}
  //////////////////////////
  }
}
////////////////////////////////////////7

function pajaro(_x, _y) {
  this.miX = _x;
  this.miY = _y;
  this.dir = 1;
  this.estaViva = true;
  ///habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
      //pajaros

      noStroke();
      beginShape();
      fill(255, 210, 50);
      vertex(this.miX, this.miY);
      vertex(this.miX - 10, this.miY + 10);
      vertex(this.miX - 27, this.miY + 4);
      vertex(this.miX - 44, this.miY - 14);
      curveVertex(this.miX - 82, this.miY - 24);
      vertex(this.miX - 71, this.miY - 2);
      vertex(this.miX - 59, this.miY + 18);
      vertex(this.miX - 89, this.miY + 18);
      endShape();
      fill(258, 170, 50);
      beginShape();
      vertex(this.miX, this.miY);
      vertex(this.miX - 4, this.miY + 1);
      curveVertex(this.miX - 9, this.miY - 3);
      vertex(this.miX - 17, this.miY + 3);
      vertex(this.miX - 30, this.miY + 13);
      vertex(this.miX - 37, this.miY + 4);
      vertex(this.miX - 54, this.miY - 14);
      curveVertex(this.miX - 112, this.miY - 24);
      vertex(this.miX - 81, this.miY - 2);
      vertex(this.miX - 69, this.miY + 18);
      vertex(this.miX - 56, this.miY + 36);
      vertex(this.miX - 60, this.miY + 47);
      curveVertex(this.miX - 74, this.miY + 55);
      vertex(this.miX - 58, this.miY + 69);
      vertex(this.miX - 52, this.miY + 54);
      vertex(this.miX - 31, this.miY + 46);
      endShape();
      beginShape();
      fill(255, 10, 5);
      vertex(this.miX, this.miY);
      vertex(this.miX - 5, this.miY + 5);
      vertex(this.miX - 7, this.miY + 4);
      vertex(this.miX - 4, this.miY - 1);
      endShape();
      fill(255);
      ellipse(this.miX - 10, this.miY + 2, 5, 5);
      fill(0);
      ellipse(this.miX - 10, this.miY + 2, 2, 2);

    }
  }

  this.moverse = function() {
    if (this.miX < width) {
      this.miX = this.miX + random(0, 5);
    } else if (this.miX > width) {
     this.miX = 0;
    }
  }
  this.morirse = function() {
    this.estaViva = false;
  }
  this.escapar = function() {
    if(this.miX<width){
    this.dir = this.dir * -1;
    }else if(this.miX<0){
    this.dir = this.dir * -1;
    }
  }
}
/////////////////////////////////////////////////////////////7
function duck(_x, _y) {
  this.miX2 = _x;
  this.miY2 = _y;
  this.dir = 1;
  this.estaViva = true;
  ///habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
      //patos
      noStroke();
      fill(158, 70, 28);
      beginShape();
      vertex(this.miX2, this.miY2);
      vertex(this.miX2 - 4, this.miY2 + 1);
      curveVertex(this.miX2 - 9, this.miY2 - 3);
      vertex(this.miX2 - 17, this.miY2 + 3);
      vertex(this.miX2 - 20, this.miY2 + 13);
      vertex(this.miX2 - 47, this.miY2 + 4);
      vertex(this.miX2 - 54, this.miY2 - 14);
      curveVertex(this.miX2 - 112, this.miY2 - 24);
      vertex(this.miX2 - 81, this.miY2 - 2);
      vertex(this.miX2 - 69, this.miY2 + 18);
      vertex(this.miX2 - 56, this.miY2 + 36);
      vertex(this.miX2 - 60, this.miY2 + 47);
      curveVertex(this.miX2 - 74, this.miY2 + 55);
      vertex(this.miX2 - 58, this.miY2 + 69);
      vertex(this.miX2 - 52, this.miY2 + 54);
      vertex(this.miX2 - 31, this.miY2 + 46);
      curveVertex(this.miX2 + 9, this.miY2 + 46);

      curveVertex(this.miX2 + 16, this.miY2 + 48); //
      vertex(this.miX2 + 46, this.miY2 + 56);
      vertex(this.miX2 + 26, this.miY2 + 22); //
      vertex(this.miX2 + 7, this.miY2 + 28);
      curveVertex(this.miX2 - 9, this.miY2 + 25);
      vertex(this.miX2 - 11, this.miY2 + 10);
      endShape(CLOSE);
      fill(255, 120, 20);
      triangle(this.miX2 - 8, this.miY2 - 4, this.miX2 - 4, this.miY2 - 6 + 10, this.miX2 + 7, this.miY2 - 4);
      fill(255);
      ellipse(this.miX2 - 10, this.miY2, 5, 5)
      stroke(100);
      fill(0);
      ellipse(this.miX2 - 10, this.miY2, 2, 2)

    }
  }

  this.moverse = function() {
     if (this.miX2 < width || this.miY2> height) {
     this.miX2 = this.miX2 + random(0, 5);
     this.miY2 = this.miY2+ random(-5, 0);
    } else if (this.miX2 > width || this.miY2 < height) {
      this.miX2 = 0;
      this.miY2 = random(0, height);
    }}
  //morir
  this.morirse = function() {
    this.estaViva = false;
  }
}
////////////////////////////////////////////////////
function roberto(_x, _y) {
  this.miX3 = _x;
  this.miY3 = _y;
  this.dir = 1;
  this.estaViva = true;
  ///habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
      //loros
      noStroke();
      fill(255, 120, 14);
      triangle(this.miX3 - 12, this.miY3 - 8, this.miX3 + 15, this.miY3 + 16, this.miX3 - 10, this.miY3 + 20);
      fill(30, 155, 25);
      ellipse(this.miX3 - 25, this.miY3 + 30, 45, 60);
      ellipse(this.miX3 - 25, this.miY3, 30, 30);

      beginShape();

      curveVertex(this.miX3 - 40, this.miY3 + 10);
      curveVertex(this.miX3 - 76, this.miY3 + 20);
      curveVertex(this.miX3 - 50, this.miY3 + 30);
      curveVertex(this.miX3 - 21, this.miY3 + 30);
      endShape(CLOSE);
      ellipse(this.miX3 - 20, this.miY3 + 50, 10, 60);
      ellipse(this.miX3 - 28, this.miY3 + 54, 10, 70);
      ellipse(this.miX3 - 34, this.miY3 + 53, 10, 80);
      ellipse(this.miX3 - 40, this.miY3 + 58, 10, 80);
      fill(0);
      ellipse(this.miX3 - 20, this.miY3, 10, 10);
      fill(255);
      ellipse(this.miX3 - 20, this.miY3, 5, 5);
    }
  }

  this.moverse = function() {
   if (this.miX3 < width || this.miY3 > height) {
      this.miX3 = this.miX3 + random(0, 25);
      this.miY3 = this.miY3 + random(-1, 4);
    } else if (this.miX3 > width ||this.miY3 < height) {
      this.miX3= 0;
      this.miY3 = random(0, 300);
    }
  }
  this.morirse = function() {
    this.estaViva = false;
  }
}
////////////////////////////////////////////////////
function coli(_x, _y) {
  this.miX4 = _x;
  this.miY4 = _y;
  this.dir = 1;
  this.estaViva = true;
  ///habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
      //loros
      noStroke();
      fill(255, 120, 14);
      triangle(this.miX4 - 1, this.miY4 - 10, this.miX4 + 50, this.miY4 + 5, this.miX4 - 10, this.miY4 + 8);
      stroke(1, 100);
      fill(150, 255, 5);
      ellipse(this.miX4, this.miY4, 28, 28);
      noStroke();
      beginShape();
      curveVertex(this.miX4 - 10, this.miY4 + 10);
      curveVertex(this.miX4 - 76, this.miY4 + 20);
      curveVertex(this.miX4 - 50, this.miY4 + 30);
      curveVertex(this.miX4 - 21, this.miY4 + 30);
      endShape(CLOSE);
      beginShape();
      vertex(this.miX4 - 10, this.miY4 + 10);
      vertex(this.miX4 - 65, this.miY4 + 60);
      curveVertex(this.miX4 - 10, this.miY4 + 55);
      curveVertex(this.miX4 + 8, this.miY4 + 35);
      curveVertex(this.miX4 + 10, this.miY4 + 5);
      endShape(CLOSE);
      fill(0);
      ellipse(this.miX4 + 5, this.miY4 - 5, 8, 8);
      fill(255);
      ellipse(this.miX4 + 5, this.miY4 - 5, 5, 5);

    }
  }

  this.moverse = function() {
    
    if (this.miX4 < width ||  this.miY4 > height) {
      this.miX4= this.miX4 + random(-5, 25);
       this.miY4 =  this.miY4 + random(-10, 25);
    } else if (this.miX4 > width ||  this.miY4< 0) {
      this.miX4 = random(0, 100);
       this.miY4= random(0, 100);
    }
  }
  this.morirse = function() {
    this.estaViva = false;
  }
   this.parar= function() {
      this.miX4 =  this.miX4  + random(0, 1);
      this.miY4 = this.miY4  + random(0, 1);
  }
}
////////////////////////////////////////////////////
function pepe(_x, _y) {
  this.miX5 = _x;
  this.miY5 = _y;
  this.dir = 1;
  this.gx=30;
  this.gy=65;
  this.estaViva = true;
  ///habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
      //loros
      noStroke();
      fill(5);
    beginShape();
    curveVertex(this.miX5, this.miY5 );
    curveVertex(this.miX5 - 27, this.miY5  - 2);
    curveVertex(this.miX5 - 57, this.miY5  + 76);
    curveVertex(this.miX5 - 55, this.miY5  + 105);
    vertex(this.miX5 - 48, this.miY5  + 76);

    vertex(this.miX5 - 43,this.miY5  + 105);
    curveVertex(this.miX5 - 9, this.miY5  + 106);
    curveVertex(this.miX5 - 5, this.miY5  + 75);
    curveVertex(this.miX5 + 1,this.miY5  + 102); //
    curveVertex(this.miX5 + 5, this.miY5  + 81);
    curveVertex(this.miX5 + 1, this.miY5  + 52);

    curveVertex(this.miX5 - 17,this.miY5  + 16);

    endShape();
    ellipse(this.miX5 - 24, this.miY5  + 15, 35, 35);
    fill(222, 150, 20);
    triangle(this.miX5 - 14, this.miY5 + 15, this.miX5 - 34, this.miY5 + 15, this.miX5- 24, this.miY5 + 30);

    fill(255);
    ellipse(this.miX5 - 30, this.miY5 + 15, 15, 18);
    ellipse(this.miX5- 16, this.miY5  + 15, 15, 18);
    ellipse(this.miX5 - 24, this.miY5  + 60, this.gx, this.gy);
    fill(0);
    ellipse(this.miX5 - 30, this.miY5 + 15, 5, 5);
    ellipse(this.miX5 - 16, this.miY5  + 15, 5, 5);

    }
  }

  this.moverse = function() {
    
    if (this.miX5 < width || this.miY5 > height) {
      this.miX5 = this.miX5 + random(-5, 5);
      this.miY5 = this.miY5 + random(-5, 5);
    } else if (this.miX5 > width ||this.miY5 <0) {
      this.miX5 = 0;
      this.miY5= height;
    }
    
  }
  this.morirse = function() {
    this.estaViva = false;
  }
  this.engordar=function(){
    this.gx=30
    this.gy=65
  }
}