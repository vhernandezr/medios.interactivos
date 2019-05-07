var tabla;
var mapa;
var nub1;
var nub2;
var nub3;
var nub4;
var fondo;
var niño;

var rutaImagen;
var numFilas;
var numColumnas;
var x = [];
var y = [];
var estado2 = false;
var textInfo = "";
var z = [];
var k = [];
var cant = 3;
var cant1 = 1;

function preload() {

  mapa = loadImage('maaaap.png');
  tabla = loadTable('tabla.csv', 'csv', 'header');
  nub1 = loadImage('oo.png');
  nub2 = loadImage('clouddd.png');
  nub3 = loadImage('gghg.png');
  fondo = loadImage('ppp.png');
  niño = loadImage('joni.png');
  nub4 = loadImage('nube.png');

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

var escala_x;
var escala_y;


function setup() {
  escala_x = 1;
  escala_y = 1;
  createCanvas(600, 500);
  background(255);
  ///
  image(fondo, 0, 0, 600 * escala_x, 500 * escala_y);
  for (var a = 0; a < cant; a = a + 1) {
    x[a] = random(width);
    y[a] = random(height);
  }
  for (var j = 0; j < cant1; j = j + 1) {
    z[j] = 0;
    k[j] = 500;
  }

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
    text("Seleciona la información de escolaridad por departamento que quieres ver", width / 2 - 85, height / 2 + 20);
    text("¡Inclina la pantalla y descubre más!", width / 2 - 70, height / 2 + 50);
    ///////✔ESTADO 1 = Animación durante M cantidad de tiempo

  } else if (estado == ANIMACION) {
    image(fondo, 0, 0, 600 * escala_x, 500 * escala_y);
    for (var a = 0; a < cant; a = a + 1) {

      image(nub1, x[a], 0, 300 * escala_x, 100 * escala_y);
      image(nub2, x[a], y[a], 200 * escala_x, 100 * escala_y);

      image(nub4, x[a], 0, 300 * escala_x, 100 * escala_y);

      if (x[a] < width || y[a] > height) {
        x[a] = x[a] + random(0, 5);
        y[a] = y[a] + random(-1, 1);
      } else if (x[a] > width || y[a] < height) {
        x[a] = -100;
        y[a] = random(0, height);
      }
    }

    for (var j = 0; j < cant1; j = j + 1) {


      image(niño, z[j], k[j], 300 * escala_x, 200 * escala_y);
      textSize(30);
      text('La educación es un derecho,', z[j] - 600, k[j] + 300);
      text(' no un privilegio', z[j] - 500, k[j] + 350);
      if (z[j] < width + 200 * escala_x || k[j] > height+600) {
        z[j] = z[j] + random(0, 5);
        k[j] = k[j] + random(-5, 0);

      }
    }


    if (millis() - tiempoAnterior > M) {
      estado = INTERACCION;
    }
    //////////////////✔ESTADO 2 = Interacción con el usuario
  } else if (estado == INTERACCION) {
    background(220);
    image(mapa, 0, 0, 600 * escala_x, 500 * escala_y);
    fill(0);
    textSize(18);
    text('Educación Basica ', 25 * escala_x, 40 * escala_y);
    text(' Departamentos', 20 * escala_x, 60 * escala_y);
    textSize(15);


    //cuando el mouse está sobre el círculo cambia de estado
    ellipse(x1, y1, 20 * escala_x, 20 * escala_y);
    if (dist(mouseX, mouseY, x1, y1) < 10) {
      estado = INFORMACION;
    }
    //////////////////////////✔ESTADO 3 = Información
  } else if (estado == INFORMACION) {
    background(0);
    image(mapa, 0, 0, 600 * escala_x, 500 * escala_y);
    fill(0)
    textSize(18)
    text('Educación Basica ', 25 * escala_x, 40 * escala_y);
    text(' Departamentos', 20 * escala_x, 60 * escala_y);
    textSize(15);

    numFilas = tabla.getRowCount();
    numColumnas = tabla.getColumnCount();


    for (var i = 0; i < numFilas; i++) {
      text(tabla.getString(i, 0), tabla.getString(i, 3), tabla.getString(i, 4));

      if (estado2) {
        fill(255);
        rect(20 * escala_x,  (500 - 80) * escala_y, 180, 50);
        fill(0);
        text(textInfo + "%", 30 * escala_x, (500 - 50) * escala_y);
        //image(loadImage(rutaImagen), 20, 20);
      }
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
    //estado = INTRODUCCION;

  }

}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}

function mouseClicked() {
  var indicador = "";
  if (mouseX > 251 * escala_x && mouseX * escala_x < 318 && mouseY > 64 * escala_y && mouseY < 73 * escala_y) {
    estado2 = true;
    indicador = "La Guajira";
  }
  if (mouseX > 217 * escala_x && mouseX < 290 * escala_x && mouseY > 90 * escala_y && mouseY < 98 * escala_y) {
    estado2 = true;
    indicador = "Magdalena";
  }
  if (mouseX > 261 * escala_x && mouseX < 299 * escala_x && mouseY > 125 * escala_y && mouseY < 134 * escala_y) {
    estado2 = true;
    indicador = "Cesar";
  }
  if (mouseX > 190 * escala_x && mouseX < 245 * escala_x && mouseY > 129 * escala_y && mouseY < 138 * escala_y) {
    estado2 = true;
    indicador = "Atlántico";
  }
  if (mouseX > 178 * escala_x && mouseX < 217 * escala_x && mouseY * escala_y > 149 && mouseY * escala_y < 160) {
    estado2 = true;
    indicador = "Sucre";
  }
  if (mouseX > 239 * escala_x && mouseX < 285 * escala_x && mouseY * escala_y > 149 && mouseY * escala_y < 160) {
    estado2 = true;
    indicador = "Bolívar";
  }
  if (mouseX > 280 * escala_x && mouseX < 407 * escala_x && mouseY * escala_y > 170 && mouseY * escala_y < 179) {
    estado2 = true;
    indicador = "Norte de Santander";
  }
  if (mouseX > 159 * escala_x && mouseX < 217 * escala_x && mouseY * escala_y > 170 && mouseY * escala_y < 179) {
    estado2 = true;
    indicador = "Córdoba";
  }
  if (mouseX > 173 * escala_x && mouseX < 235 * escala_x && mouseY * escala_y > 190 && mouseY * escala_y < 200) {
    estado2 = true;
    indicador = "Antioquia";
  }
  if (mouseX > 280 * escala_x && mouseX < 349 * escala_x && mouseY * escala_y > 195 && mouseY * escala_y < 206) {
    estado2 = true;
    indicador = "Santander";
  }
  if (mouseX > 228 * escala_x && mouseX < 280 * escala_x && mouseY * escala_y > 207 && mouseY * escala_y < 216) {
    estado2 = true;
    indicador = "Boyacá";
  }
  if (mouseX > 148 * escala_x && mouseX < 190 * escala_x && mouseY * escala_y > 219 && mouseY * escala_y < 230) {
    estado2 = true;
    indicador = "Chocó";
  }
  if (mouseX > 198 * escala_x && mouseX < 245 * escala_x && mouseY * escala_y > 224 && mouseY * escala_y < 233) {
    estado2 = true;
    indicador = "Caldas";
  }
  if (mouseX > 251 * escala_x && mouseX < 349 * escala_x && mouseY * escala_y > 233 && mouseY * escala_y < 245) {
    estado2 = true;
    indicador = "Cundinamarca";
  }

  if (mouseX > 379 * escala_x && mouseX < 429 * escala_x && mouseY * escala_y > 221 && mouseY * escala_y < 230) {
    estado2 = true;
    indicador = "Arauca";
  }
  if (mouseX > 178 * escala_x && mouseX < 245 * escala_x && mouseY * escala_y > 239 && mouseY * escala_y < 250) {
    estado2 = true;
    indicador = "Risaralda";
  }
  if (mouseX > 248 * escala_x && mouseX < 326 * escala_x && mouseY * escala_y > 252 && mouseY * escala_y < 265) {
    estado2 = true;
    indicador = "Bogotá D.C";
  }

  if (mouseX > 400 * escala_x && mouseX < 454 * escala_x && mouseY * escala_y > 250 && mouseY * escala_y < 259) {
    estado2 = true;
    indicador = "Vichada";
  }
  if (mouseX > 118 * escala_x && mouseX < 221 * escala_x && mouseY * escala_y > 272 && mouseY * escala_y < 286) {
    estado2 = true;
    indicador = "Valle del Cauca";
  }
  if (mouseX > 228 * escala_x && mouseX < 276 * escala_x && mouseY * escala_y > 286 && mouseY * escala_y < 294) {
    estado2 = true;
    indicador = "Tolima";
  }
  if (mouseX > 299 * escala_x && mouseX < 366 * escala_x && mouseY * escala_y > 277 && mouseY * escala_y < 291) {
    estado2 = true;
    indicador = "Casanare";
  }
  if (mouseX > 388 * escala_x && mouseX < 444 * escala_x && mouseY * escala_y > 280 && mouseY * escala_y < 291) {
    estado2 = true;
    indicador = "Guainía";
  }
  if (mouseX > 134 * escala_x && mouseX < 178 * escala_x && mouseY * escala_y > 298 && mouseY * escala_y < 310) {
    estado2 = true;
    indicador = "Cauca";
  }
  if (mouseX > 198 * escala_x && mouseX < 233 * escala_x && mouseY * escala_y > 304 && mouseY * escala_y < 315) {
    estado2 = true;
    indicador = "Huila";
  }
  if (mouseX > 299 * escala_x && mouseX < 332 * escala_x && mouseY * escala_y > 298 && mouseY * escala_y < 311) {
    estado2 = true;
    indicador = "Meta";
  }
  if (mouseX > 115 * escala_x && mouseX < 162 * escala_x && mouseY * escala_y > 314 && mouseY * escala_y < 325) {
    estado2 = true;
    indicador = "Nariño";
  }
  if (mouseX > 159 * escala_x && mouseX < 224 * escala_x && mouseY * escala_y > 329 && mouseY * escala_y < 342) {
    estado2 = true;
    indicador = "Putumayo";
  }
  if (mouseX > 239 * escala_x && mouseX < 296 * escala_x && mouseY * escala_y > 339 && mouseY * escala_y < 350) {
    estado2 = true;
    indicador = "Caquetá";
  }
  if (mouseX > 299 * escala_x && mouseX < 359 * escala_x && mouseY * escala_y > 320 && mouseY * escala_y < 332) {
    estado2 = true;
    indicador = "Guaviare";
  }
  if (mouseX > 349 * escala_x && mouseX < 400 * escala_x && mouseY * escala_y > 339 && mouseY * escala_y < 350) {
    estado2 = true;
    indicador = "Vaupés";
  }
  if (mouseX > 321 * escala_x && mouseX < 388 * escala_x && mouseY * escala_y > 368 && mouseY * escala_y < 382) {
    estado2 = true;
    indicador = "Amazonas";
  }

  for (var i = 0; i < tabla.getRowCount(); i++) {
    if (indicador == tabla.getString(i, 0)) {
      textInfo = "" + tabla.getString(i, 0) + " " + tabla.getString(i, 2);
      if (tabla.getString(i, 2) > 70) {
        rutaImagen = "more07q.png";
      } else if (tabla.getString(i, 0) > 40) {
        rutaImagen = "more07.png";
      } else {
        rutaImagen = "morwq.png";
      }
    }

  }
}
