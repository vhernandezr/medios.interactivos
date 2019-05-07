var tabla;
var numFilas;
var numColumnas;
var x = [];
var y = [];

var z = [];
var k = [];
var cant = 3;
var cant1 = 1;

function preload() {

  mapa = loadImage('maaaap.png');
  tabla = loadTable('tabla.csv', 'csv', 'header');
  nub1 = loadImage('oo.png');
  nub2 = loadImage('clouddd.png');
  nub3= loadImage('c.png');
  nub4= loadImage('gghg.png');
 fondo=loadImage('ppp.png');
  
  
}

var INTRODUCCION = 0;
var ANIMACION = 1;
var INTERACCION = 2;
var INFORMACION = 3;

var estado = INTRODUCCION;

var x1;
var y1;

var tiempoAnterior;
var M = 5330; //tiempo animación (milli segundos)


function setup() {

  createCanvas(600, 500);
  background(255);
  ///
  x1 = width / 2 + 20;
  y1 = (height / 2) - 30;
  tiempoAnterior = millis();
  /////
  
}

function draw() {
  ///////////////////////////✔ESTADO 0 = introducción al tema
  if (estado == INTRODUCCION) {
    background(100, 200, 200);
    text("Toca la pantalla para comenzar", width / 2 - 60, height / 2);
    text("Seleciona la información que quieres ver", width / 2 - 85, height / 2 + 20);
    text("¡Inclina la pantalla y descubre más!", width / 2 - 70, height / 2 + 50);
    ///////✔ESTADO 1 = Animación durante M cantidad de tiempo
  } else if (estado == ANIMACION) {
   
  image(fondo,0,0);
  image(nub1,0,0);
      image(nub2,0,0);
    if (millis() - tiempoAnterior > M) {
      estado = INTERACCION;
    }
    //////////////////✔ESTADO 2 = Interacción con el usuario
  } else if (estado == INTERACCION) {
    background(220);
    image(mapa, 0, 0, 600, 500);
    fill(0)
    textSize(18)
    text('Educación Basica ', 25, 40);
    text(' Departamentos', 20, 60);
    textSize(15)

    
    //cuando el mouse está sobre el círculo cambia de estado
    ellipse( x1, y1, 20, 20);
    if (dist(mouseX, mouseY, x1, y1) < 10) {
      estado = INFORMACION;
    }
    //////////////////////////✔ESTADO 3 = Información
  } else if (estado == INFORMACION) {
    background(0);
    image(mapa, 0, 0, 600, 500);
    fill(0)
    textSize(18)
    text('Educación Basica ', 25, 40);
    text(' Departamentos', 20, 60);
    textSize(15);
    
    numFilas = tabla.getRowCount();
    numColumnas = tabla.getColumnCount();


    for (var i = 0; i < numFilas; i++) {
      text(tabla.getString(i, 0), tabla.getString(i, 3), tabla.getString(i, 4));


    }
  }
}
///////////////////////////////////////////
function mouseReleased() {
  //Si se suelta el mouse en la introducción pasa a la animación
  //Guardar un nuevo valor de millis en la variable tiempoAnterior
  if (estado == INTRODUCCION) {
    estado = ANIMACION;
    tiempoAnterior = millis();

  } else if (estado == INFORMACION) {
    estado = INTRODUCCION;

  }

}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}

