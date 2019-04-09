var datos;
var cuantos;
var perro;
var carpeta;
var collar;
var pata;

function preload() {
  datos = loadJSON("data.json");
  perro = loadImage("perro.png");
  carpeta = loadImage("carpeta.png");
  collar = loadImage("collar.png");
  pata = loadImage("pata.png");

}

function setup() {
  createCanvas(800, 800);
  background(0);


  cuantos = datos.number;
  //cuantos = datos.people.length;

  for (var i = 0; i < cuantos; i = i + 1) {


    var posX = random(width - (325 / 6) - 60);
    var posY = random(height - (567 / 6) + 60);
    image(perro, posX, posY, 80, 80);
    image(collar, posX - 40, posY - 30, 40, 40);
    image(carpeta, posX + 90, posY - 15, 80, 110);

    var nombre = datos.pets[i].petName;
    fill(255);
    textSize(20);
    text(nombre, posX + 10, posY - 10);

    var dueño = datos.pets[i].ownerName;
    fill(255);
    textSize(14);
    text(dueño, posX - 8, posY + 100);

    var info = datos.pets[i].aptNotes;
    fill(255);
    textSize(10);
    text(info, posX + 95, posY + 18, 70, 100);

    var fecha = datos.pets[i].aptDate;
    fill(0);
    textSize(10);
    text(fecha, posX + 90, posY- 2, 100, 20);
  }


}

function draw() {

}