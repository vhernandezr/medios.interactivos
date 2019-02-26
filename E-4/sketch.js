var posXrec1 = 10;
var posYrec1 = 10;
var tamRect1 = 40;

var posXrec2 = 10;
var posYrec2 = 60;
var tamRect2 = 40;

var posXrec3 = 10;
var posYrec3 = 110;
var tamRect3 = 40;

var posXrec4 = 10;
var posYrec4 = 160;
var tamRect4 = 40;

var colSel = 0;
var herSel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  noStroke();

  // Imagenes Botones
  fill(255, 0, 100);
  rect(posXrec1, posYrec1, tamRect1, tamRect1);
  fill(255, 255, 255);
  rect(posXrec2, posYrec2, tamRect2, tamRect2);
  fill(255, 255, 255);
  rect(posXrec3, posYrec3, tamRect3, tamRect3);
  fill(255, 255, 255);
  rect(posXrec4, posYrec4, tamRect4, tamRect4);


  // Seleccion Color
  if (colSel == 0) {
    // Blanco
    fill(255);
    stroke(255);
  } else if (colSel == 1) { 
    // Magenta
    fill(255, 0, 100);
    stroke(255, 0, 100);
  }


  if (mouseIsPressed == true) {
    // Seleccion Herramienta
    if (herSel == 0) {
      //ellipse(mouseX, mouseY, 10, 10);
      line(mouseX, mouseY, width/2, height/2);
    } else if (herSel == 1) {
      //rect(mouseX, mouseY, 20, 20);
      line(mouseX-10, mouseY-10, mouseX+10, mouseY+10);
    }


    // Zopna Sensible de los botones
    if (mouseX > posXrec1 
      && mouseX < posXrec1 + tamRect1
      && mouseY > posYrec1
      && mouseY < posYrec1 + tamRect1) {
      //background(100);
      colSel = 1;
    }
    if (mouseX > posXrec2 
      && mouseX < posXrec2 + tamRect2
      && mouseY > posYrec2
      && mouseY < posYrec2 + tamRect2) {
      //background(100);
      colSel = 0;
    }
    if (mouseX > posXrec3 
      && mouseX < posXrec3 + tamRect3
      && mouseY > posYrec3
      && mouseY < posYrec3 + tamRect3) {
      //background(100);
      //colSel = 0;
      //rect(mouseX, mouseY, 20, 20);
      herSel = 1;
    }
    if (mouseX > posXrec4 
      && mouseX < posXrec4 + tamRect4
      && mouseY > posYrec4
      && mouseY < posYrec4 + tamRect4) {
      //background(100);
      //colSel = 0;
      //rect(mouseX, mouseY, 20, 20);
      herSel = 0;
    }
  }
}
