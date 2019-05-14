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
var i=[];
var x = [];
var y = [];
var estado2 = false;
var textInfo = "";
var textInfo2 = "";
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
  full = loadImage('bueno.png');
  bus = loadImage('more07.png');
  bad = loadImage('malo.png');
   libros = loadImage('libros.png');
  fin = loadImage('fin.jpeg');
fuente1 = loadFont('Black.otf');
  fuente2 = loadFont('Bold.otf');
  fuente3 = loadFont('Light.otf');
  fuente4 = loadFont('Regular.otf');
}

var INTRODUCCION = 0;
var ANIMACION = 1;
var INTERACCION = 2;
var INFORMACION = 3;
var INFORMACION2=4;
var estado = INTRODUCCION;

var x1;
var y1;

var tiempoAnterior;
var M = 5330; //tiempo animación (milli segundos)

var escala_x;
var escala_y;


function setup() {
  escala_x = 1024/600;
  escala_y =768/500;
  createCanvas(1024, 768);
  //escala_x = 1;
 // escala_y = 1;
  //createCanvas(600, 500);
  background(255);
  ///
  image(fondo, 0, 0, width, height);
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
   textFont(fuente1);
    textSize(15);
  
    text("Toca la pantalla para comenzar", width / 2 - 60, height / 2);
    text("Seleciona la información que quieres ver", width / 2 - 85, height / 2 + 20);
    text("¡Agita la pantalla y descubre más!", width / 2 - 70, height / 2 + 50);
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
    textSize(28);
    text('Porcentaje de educación Basica ', 25 * escala_x, 40 * escala_y);
    text(' por departamentos', 20 * escala_x, 60 * escala_y);
    textSize(15);


    //cuando el mouse está sobre el círculo cambia de estado
    image(bus, x1, y1, 100, 100);
    noFill();
    noStroke();
    ellipse(x1, y1, 20 * escala_x, 20 * escala_y);
    if (dist(mouseX, mouseY, x1, y1) < 10) {
      estado = INFORMACION;
    }
    //////////////////////////✔ESTADO 3 = Información
  } else if (estado == INFORMACION) {
    background(0);
    image(mapa, 0, 0, 600 * escala_x, 500 * escala_y);
    fill(0)
    textFont(fuente1);
    textSize(28)
    text('Porcentaje de educación Basica ', 25 * escala_x, 40 * escala_y);
    text(' por departamentos', 20 * escala_x, 60 * escala_y);
    
    textSize(15);

    numFilas = tabla.getRowCount();
    numColumnas = tabla.getColumnCount();


    for (var i = 0; i < numFilas; i++) {
      
      textSize(20);
      textFont('Georgia');
      text(tabla.getString(i, 0), tabla.getString(i, 3), tabla.getString(i, 4));

      if (estado2) {
        fill(255);
        rect(40,  655, 220, 60);
        
        fill(0);
        text(textInfo + "%", 50, 680);
        text(textInfo2 , 50,700);

      }
      
    
    var indicador = "";
   
  if (mouseX > 420 && mouseX  < (555 ) && mouseY > 91 && mouseY < 122){
    estado2 = true;
    indicador = "La Guajira"; 
    image(bad,280,  655,80,60);
  }
  if (mouseX > 375  && mouseX < 503  && mouseY >135  && mouseY < 160 ) {
    estado2 = true;
    indicador = "Magdalena";
    image(full,280,  655,80,60);
  }
  if (mouseX > 439  && mouseX < 512  && mouseY > 188  && mouseY < 208) {
    estado2 = true;
    indicador = "Cesar";
    image(full,280,  655,80,60);
  }
  if (mouseX > 325  && mouseX < 430  && mouseY > 196 && mouseY < 219 ) {
    estado2 = true;
    indicador = "Atlántico";
    image(full,280,  655,80,60);
  }
  if (mouseX > 306  && mouseX < 375  && mouseY  > 226 && mouseY  < 250) {
    estado2 = true;
    indicador = "Sucre";
    image(full,280,  655,80,60);
  }
  if (mouseX > 405 && mouseX < 495 && mouseY  > 226 && mouseY  < 250) {
    estado2 = true;
    indicador = "Bolívar";
    image(full,280,  655,80,60);
  }
  if (mouseX > 475  && mouseX < 704 && mouseY  > 258 && mouseY  < 284) {
    estado2 = true;
    indicador = "Norte de Santander";
    image(full,280,  655,80,60);
  }
  if (mouseX > 269  && mouseX < 370  && mouseY > 258 && mouseY  < 279) {
    estado2 = true;
    indicador = "Córdoba";
    image(full,280,  655,80,60);
  }
  if (mouseX > 295  && mouseX < 414  && mouseY > 288 && mouseY < 312) {
    estado2 = true;
    indicador = "Antioquia";
    image(full,280,  655,80,60);
  }
  if (mouseX > 475 && mouseX < 601  && mouseY  > 288 && mouseY  < 312) {
    estado2 = true;
    indicador = "Santander";
    image(full,290,  655,120,90);
  }
  if (mouseX > 392  && mouseX < 475  && mouseY  > 312 && mouseY  < 332) {
    estado2 = true;
    indicador = "Boyacá";
    image(full,280,  655,80,60);
  }
  if (mouseX > 252  && mouseX < 330  && mouseY  > 332 && mouseY  < 356) {
    estado2 = true;
    indicador = "Chocó";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 340  && mouseX < 423  && mouseY  > 344 && mouseY < 363) {
    estado2 = true;
    indicador = "Caldas";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 428 && mouseX < 600  && mouseY  > 356  && mouseY  < 379) {
    estado2 = true;
    indicador = "Cundinamarca";
    image(full,280,  655,80,60);
  }

  if (mouseX > 644  && mouseX < 732  && mouseY  > 332 && mouseY  < 356) {
    estado2 = true;
    indicador = "Arauca";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 306  && mouseX < 414  && mouseY  > 368 && mouseY  < 384) {
    estado2 = true;
    indicador = "Risaralda";
    image(full,280,  655,80,60);
  }
  if (mouseX > 423 && mouseX < 546  && mouseY  > 391  && mouseY < 412 ) {
    estado2 = true;
    indicador = "Bogotá D.C";
     image(bad,280,  655,120,90);
    
  }

  if (mouseX > 678  && mouseX < 775  && mouseY > 379  && mouseY < 402) {
    estado2 = true;
    indicador = "Vichada";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 199  && mouseX < 382 && mouseY  > 417 && mouseY  < 440) {
    estado2 = true;
    indicador = "Valle del Cauca";
    image(full,280,  655,80,60);
  }
  if (mouseX > 392  && mouseX < 475  && mouseY  > 434 && mouseY  < 455) {
    estado2 = true;
    indicador = "Tolima";
    image(full,280,  655,80,60);
  }
  if (mouseX > 503  && mouseX < 623  && mouseY  > 425 && mouseY  < 451) {
    estado2 = true;
    indicador = "Casanare";
    image(full,280,  655,80,60);
  }
  if (mouseX > 663 && mouseX < 761 && mouseY  > 425 && mouseY  < 451) {
    estado2 = true;
    indicador = "Guainía";
    image(full,280,  655,80,60);
  }
  if (mouseX > 225  && mouseX < 302  && mouseY  > 457 && mouseY  < 478) {
    estado2 = true;
    indicador = "Cauca";
    image(full,280,  655,80,60);
  }
  if (mouseX > 340 && mouseX < 405  && mouseY> 463 && mouseY  < 487) {
    estado2 = true;
    indicador = "Huila";
    image(full,280,  655,80,60);
  }
  if (mouseX > 512  && mouseX < 570  && mouseY  > 455 && mouseY < 480 ) {
    estado2 = true;
    indicador = "Meta";
    image(full,280,  655,80,50);
  }
  if (mouseX > 199 && mouseX < 290  && mouseY> 480   && mouseY < 498 ) {
    estado2 = true;
    indicador = "Nariño";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 269  && mouseX < 392  && mouseY  > 504 && mouseY  < 525) {
    estado2 = true;
    indicador = "Putumayo";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 405  && mouseX < 509  && mouseY  > 519 && mouseY  < 545) {
    estado2 = true;
    indicador = "Caquetá";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 509  && mouseX < 618 && mouseY  > 487  && mouseY < 509 ) {
    estado2 = true;
    indicador = "Guaviare";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 598  && mouseX < 688  && mouseY > 519   && mouseY  < 539) {
    estado2 = true;
    indicador = "Vaupés";
     image(bad,280,  655,80,60);
  }
  if (mouseX > 546  && mouseX < 663  && mouseY  > 565 && mouseY < 586 ) {
    estado2 = true;
    indicador = "Amazonas";
    image(full,280,  655,80,60);
  }
      
        if (indicador == tabla.getString(i, 0)) {
          textInfo = "" + tabla.getString(i, 0) + " " + tabla.getString(i, 2);
          textInfo2 = "Población " + tabla.getString(i, 1);
          if (tabla.getString(i, 2) >= 80) {
           // image(full,280,  655,50,50);
          }
          } else if (tabla.getString(i, 2) < 80) {
            // image(bad,280,  655,50,50);
          }
        }

      textFont(fuente1);
   text('Agite el equipo', 500 ,750);
        if (accelerationX >= 60 && accelerationY >= 60 || accelerationZ >= 10) {
          estado=INFORMACION2;
        }
    
} else if (estado == INFORMACION2) {
   
  image(fin, 0, 0, width, height);
}}
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
