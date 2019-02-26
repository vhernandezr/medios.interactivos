var posXrec1 = 10;
var posYrec1 = 10;
var tamRect1 = 30;

var posXrec2 = 10;
var posYrec2 = 50;
var tamRect2 = 30;

var posXrec3 = 10;
var posYrec3 = 90;
var tamRect3 = 30;

var posXrec4 = 10;
var posYrec4 = 130;
var tamRect4 = 30;

var posXrec5 = 10;
var posYrec5 = 170;
var tamRect5= 30;

var posXrec6 = 10;
var posYrec6 = 220;
var tamRect6= 30;

var posXrec7 = 10;
var posYrec7 = 260;
var tamRect7= 30;

var posXrec8 = 10;
var posYrec8 = 300;
var tamRect8= 30;

var posXrec9 = 10;
var posYrec9 = 340;
var tamRect9= 30;

var posXrec10 = 10;
var posYrec10 = 380;
var tamRect10= 30;
////////////////////////////////////////77
var posXrec11 = 860;
var posYrec11 = 10;
var tamRect11 = 30;

var posXrec12 = 860;
var posYrec12 = 50;
var tamRect12 = 30;

var posXrec13 = 860;
var posYrec13 = 90;
var tamRect13 = 30;

var posXrec14 = 860;
var posYrec14 = 130;
var tamRect14 = 30;

var posXrec15 = 860;
var posYrec15 = 170;
var tamRect15= 30;

var posXrec16 = 860;
var posYrec16 = 220;
var tamRect16= 30;

var posXrec17 = 860;
var posYrec17 = 260;
var tamRect17= 30;

var posXrec18 = 860;
var posYrec18 = 300;
var tamRect18= 30;

var posXrec19 = 860;
var posYrec19 = 340;
var tamRect19= 30;

var posXrec20 = 860;
var posYrec20 = 380;
var tamRect20= 30;

var posXrec21 = 50;
var posYrec21 = 10;
var tamRect21= 30;

var posXrec22 = 820;
var posYrec22 = 10;
var tamRect22 = 30;
//////////////////////////////////////////////////////////////
let angle=0;
var colSel = 0;
var herSel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {
  noStroke();
  // Imagenes Botones
  stroke(0, 100);
  fill(100);
  rect(posXrec1, posYrec1, tamRect1, tamRect1);
  fill(255);

  rect(posXrec2, posYrec2, tamRect2, tamRect2);
  noStroke();
  fill(200);
  rect(posXrec3, posYrec3, tamRect3, tamRect3);
  fill(170);
  rect(posXrec4, posYrec4, tamRect4, tamRect4);
  fill(140);
  rect(posXrec5, posYrec5, tamRect5, tamRect5);
  ///////////////////////////////////////////////
  fill(110);
  rect(posXrec6, posYrec6, tamRect6, tamRect6);
  fill(80);
  rect(posXrec7, posYrec7, tamRect7, tamRect7);
  fill(50);
  rect(posXrec8, posYrec8, tamRect8, tamRect8);
  fill(20);
  rect(posXrec9, posYrec9, tamRect9, tamRect9);
  fill(0);
  rect(posXrec10, posYrec10, tamRect10, tamRect10);
  /////////////////////////////////////////////////////
  fill(255, 247, 5);
  rect(posXrec11, posYrec11, tamRect11, tamRect11);
  fill(255, 200, 4);
  rect(posXrec12, posYrec12, tamRect12, tamRect12);
  fill(255, 133, 5);
  rect(posXrec13, posYrec13, tamRect13, tamRect13);
  fill(255, 0, 0);
  rect(posXrec14, posYrec14, tamRect14, tamRect14);
  fill(250, 3, 184);
  rect(posXrec15, posYrec15, tamRect15, tamRect15);
  ///////////////////////////////////////////////
  fill(150, 3, 255);
  rect(posXrec16, posYrec16, tamRect16, tamRect16);
  fill(35, 61, 220);
  rect(posXrec17, posYrec17, tamRect17, tamRect17);
  fill(4, 180, 255);
  rect(posXrec18, posYrec18, tamRect18, tamRect18);
  fill(33, 255, 87);
  rect(posXrec19, posYrec19, tamRect19, tamRect19);
  fill(215, 255, 3);
  rect(posXrec20, posYrec20, tamRect20, tamRect20);

  fill(0);
  rect(posXrec21, posYrec21, tamRect21, tamRect21);
  fill(0);
  rect(posXrec22, posYrec22, tamRect22, tamRect22);
  ////////////////////////////////////////////////

  noStroke();
  // Seleccion Color
  if (colSel == 0) {
    // negro
    fill(0);
    stroke(0);
  } else if (colSel == 1) { 
    // amarillo
    fill(255, 247, 5);
    noStroke();
  } else if (colSel == 2) { 
    // narajita
    fill(255, 200, 4);
    noStroke();
  } else if (colSel == 3) { 
    // naranja
    fill(255, 133, 5);
    noStroke();
  } else if (colSel == 4) { 
    // rojo
    fill(255, 0, 0);
    noStroke();
  } else if (colSel == 5) { 
    // Magenta
    fill(250, 3, 184);
    noStroke();
  } else if (colSel == 6) { 
    // morado
    fill(150, 3, 255);
    noStroke();
  } else if (colSel == 7) { 
    // azul
    fill(35, 61, 220);
    noStroke();
  } else if (colSel == 8) { 
    // cyan
    fill(4, 180, 255);
    noStroke();
  } else if (colSel == 9) { 
    // verde
    fill(33, 255, 87);
    noStroke();
  } else if (colSel == 10) { 
    //biche
    fill(215, 255, 3);
    noStroke();
  } else if (colSel == 11) { 
    //biche
    fill(255);
    noStroke();
  } else if (colSel == 12) { 
    //arco
    fill(mouseX, 150, mouseY);
    noStroke();
  }
  ///////////////////////////////7

  if (mouseIsPressed == true) {
    // Seleccion Herramienta
    if (herSel == 0) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (herSel ==1) {
      polygon(mouseX, mouseY, 20, 7);
      function polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
    } else if (herSel == 2) {

      star(mouseX, mouseY, 5, 40, 12);


      function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }

      //line(mouseX-10, mouseY-10, mouseX+10, mouseY+10);
    } else if (herSel == 3) {
      star(mouseX, mouseY, 5, 30, 4);


      function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
      polygon(mouseX, mouseY, 15, 8);
      function polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
    } else if (herSel == 4) {
      let val = cos(radians(angle)) * 12.0;
      for (let a = 0; a < 360; a += 75) {
        let xoff = cos(radians(a)) * val;
        let yoff = sin(radians(a)) * val;

        ellipse(mouseX + xoff, mouseY + yoff, val, val);
      }

      ellipse(mouseX, mouseY, 2, 2);
    } else if (herSel == 5) {
      line(mouseX-40, mouseY, mouseX+40, mouseY);
      line(mouseX, mouseY-40, mouseX, mouseY+40);
    } else if (herSel == 6) {
      let val = cos(radians(angle)) * 12.0;
      for (let a = 0; a < 560; a += 10) {
        let xoff = cos(radians(a)) * val;
        let yoff = sin(radians(a)) * val;

        ellipse(mouseX + xoff, mouseY + yoff, val, val);
      }
    } else if (herSel == 7) {
      star(mouseX, mouseY, 10, 30, 5);


      function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
    } else if (herSel == 8) {
      star(mouseX, mouseY, 20, 30, mouseY/60);


      function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
    } else if (herSel == 9) {
      polygon(mouseX, mouseY, mouseX/20, 8);
      function polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
    }


    /////////////////////////////////////////////////////////////////////////////////////

    // Zona Sensible de los botones
    if ((mouseX > posXrec1)
      && (mouseX < posXrec1 + tamRect1)
      && (mouseY > posYrec1)
      && (mouseY < posYrec1 + tamRect1)) {
      background(255);
    }
    if (mouseX > posXrec2 
      && mouseX < posXrec2 + tamRect2
      && mouseY > posYrec2
      && mouseY < posYrec2 + tamRect2) {
      colSel= 11;
      herSel= 1;
    }
    if (mouseX > posXrec3 
      && mouseX < posXrec3 + tamRect3
      && mouseY > posYrec3
      && mouseY < posYrec3 + tamRect3) {

      rect(mouseX, mouseY, 20, 20);
      herSel = 2;
    }
    if (mouseX > posXrec4 
      && mouseX < posXrec4 + tamRect4
      && mouseY > posYrec4
      && mouseY < posYrec4 + tamRect4) {
      herSel = 3;
    }
    if ((mouseX > posXrec5)
      && (mouseX < posXrec5 + tamRect5)
      && (mouseY > posYrec5)
      && (mouseY < posYrec5 + tamRect5)) {
      herSel = 4;
    }
    if ((mouseX > posXrec6)
      && (mouseX < posXrec6 + tamRect6)
      && (mouseY > posYrec6)
      && (mouseY < posYrec6 + tamRect6)) {
      herSel = 5;
    }
    if ((mouseX > posXrec7)
      && (mouseX < posXrec7 + tamRect7)
      && (mouseY > posYrec7)
      && (mouseY < posYrec7+ tamRect7)) {
      herSel = 6;
      ;
    }
    if ((mouseX > posXrec8)
      && (mouseX < posXrec8 + tamRect8)
      && (mouseY > posYrec8)
      && (mouseY < posYrec8 + tamRect8)) {
      herSel = 7;
    }
    if ((mouseX > posXrec9)
      && (mouseX < posXrec9 + tamRect9)
      && (mouseY > posYrec9)
      && (mouseY < posYrec9 + tamRect9)) {
      herSel = 8;
    }
    if ((mouseX > posXrec10)
      && (mouseX < posXrec10 + tamRect10)
      && (mouseY > posYrec10)
      && (mouseY < posYrec10 + tamRect10)) {
      herSel = 9;
      ///////////////////////////////////////////////////////////7
    }
    if ((mouseX > posXrec11)
      && (mouseX < posXrec11 + tamRect11)
      && (mouseY > posYrec11)
      && (mouseY < posYrec11 + tamRect11)) {
      colSel= 1;
    }
    if ((mouseX > posXrec12)
      && (mouseX < posXrec12 + tamRect12)
      && (mouseY > posYrec12)
      && (mouseY < posYrec12 + tamRect12)) {
      colSel= 2;
    }
    if ((mouseX > posXrec13)
      && (mouseX < posXrec13 + tamRect13)
      && (mouseY > posYrec13)
      && (mouseY < posYrec13 + tamRect13)) {
      colSel= 3;
    }
    if ((mouseX > posXrec14)
      && (mouseX < posXrec14 + tamRect14)
      && (mouseY > posYrec14)
      && (mouseY < posYrec14 + tamRect14)) {
      colSel= 4;
    }
    if ((mouseX > posXrec15)
      && (mouseX < posXrec15 + tamRect15)
      && (mouseY > posYrec15)
      && (mouseY < posYrec15 + tamRect15)) {
      colSel= 5 ;
    }
    if ((mouseX > posXrec16)
      && (mouseX < posXrec16 + tamRect16)
      && (mouseY > posYrec16)
      && (mouseY < posYrec16 + tamRect16)) {
      colSel= 6;
    }
    if ((mouseX > posXrec17)
      && (mouseX < posXrec17+ tamRect17)
      && (mouseY > posYrec17)
      && (mouseY < posYrec17 + tamRect17)) {
      colSel= 7;
    }
    if ((mouseX > posXrec18)
      && (mouseX < posXrec18 + tamRect18)
      && (mouseY > posYrec18)
      && (mouseY < posYrec18 + tamRect18)) {
      colSel= 8;
    }
    if ((mouseX > posXrec19)
      && (mouseX < posXrec19 + tamRect19)
      && (mouseY > posYrec19)
      && (mouseY < posYrec19 + tamRect19)) {
      colSel= 9;
    }
    if ((mouseX > posXrec20)
      && (mouseX < posXrec20 + tamRect20)
      && (mouseY > posYrec20)
      && (mouseY < posYrec20 + tamRect20)) {
      colSel= 12;
    }
    if ((mouseX > posXrec21)
      && (mouseX < posXrec21 + tamRect21)
      && (mouseY > posYrec21)
      && (mouseY < posYrec21 + tamRect21)) {
      herSel=0;
    }
    if ((mouseX > posXrec22)
      && (mouseX < posXrec22 + tamRect22)
      && (mouseY > posYrec22)
      && (mouseY < posYrec22 + tamRect22)) {
      colSel=0;
    }
  }
}


