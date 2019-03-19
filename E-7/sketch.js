var miFoto;
var miFoto2;
var miFoto3;
var miFoto4;
var miFoto5;
var miPajaro;
var miAgua;
var miPan;
var perota;
var yatao;
var agua;
var pajaros;
var dur;
var actual;
var actual2;
var actual3;
var actual4;
var vol;
var x = 380;
var y = 130;
var x2 = 0;
var y2 = 130;
var l=200;
 var k= 135;
var z = 195;

function preload() {
  miFoto = loadImage('multi/aguas.jpg');
  miFoto3 = loadImage('multi/perota.png');
  miFoto4 = loadImage('multi/yatao.jpg');
  miFoto5 = loadImage('multi/album.jpg');
  miPajaro = loadImage('pajaro.png');
  miAgua = loadImage('agua.png');
  miAdelante = loadImage('adelante.png');
  miPause = loadImage('pause.png');
  miStop = loadImage('stop.png');
  miPlay = loadImage('play.png');
  miIzq = loadImage('izq.png');
  miDer = loadImage('der.png');
  miMute = loadImage('mute.png');
  miVool = loadImage('vool.png');
  miVol = loadImage('vol.png');
  perota = loadSound('multi/perota.mp3');
  yatao = loadSound('multi/yatao.mp3');
  agua = loadSound('multi/agua.mp3');
  pajaros = loadSound('multi/pajaros.mp3');
}

function setup() {
  createCanvas(400, 400);

  background(100);
  /////////Cancion de perota
  perota.play();
  perota.rate();
  perota.pan(-1);
  dur = perota.duration();
  /////////Cancion de yatao
  yatao.play();
  yatao.rate();
  yatao.pan(-1);
  dur = yatao.duration();
}

function draw() {
  background(220);
  image(miFoto3, 200, 110, 200, 170);
  image(miFoto, 200, 0, 200, 130);
  image(miFoto4, 15, 0, 186, 150);
  image(miFoto5, 15, 130, 186, 150);

  /////
  actual = perota.currentTime();
  //////
  actual2 = yatao.currentTime();

  ////////////para perota 80, 240, 25, 25);270, 240, 25, 25);

  if (mouseIsPressed == true) {

      if ((mouseX > 270) && (mouseX <= 295) && (mouseY > 240) && (mouseY <= 265)){ 
        if (perota.isPlaying()) {
 
        perota.stop();
      } else {
        perota.play();
      }}
    
    if ((mouseX > 80) && (mouseX <= 105) && (mouseY > 240) && (mouseY <= 265)){ 
      if (yatao.isPlaying()) {
        yatao.stop();
      } else {
        yatao.play();
      }}
    ///////////////para yatoa (110, 240, 25, 25)(300, 240, 25, 25);


    if ((mouseX > 110) && (mouseX < 135) && (mouseY > 240) && (mouseY < 265)){
      if (yatao.isPlaying()) {

        yatao.jump(actual + 5);
      }}
if ((mouseX > 300) && (mouseX < 325) && (mouseY > 240) && (mouseY < 265)){
      if (perota.isPlaying()) {

        perota.jump(actual + 5);
      }}
    ////////////////para agua
    if ((mouseX > 280) && (mouseX < 340) && (mouseY > 300) && (mouseY < 360)) {
      agua.play();

    }
    /////////////para pajros 

    if ((mouseX > 60) && (mouseX < 120) && (mouseY > 300) && (mouseY < 360)) {
      pajaros.play();

    }
    ////40, 340, 25, 25);170, 340, 25, 25);235, 340, 25, 25);365, 340, 25, 25);
    if ((mouseX > 40) && (mouseX < 65) && (mouseY > 340) && (mouseY < 365)) {
      vol=vol- 0.2;
      pajaros.setVolume(vol);
  }
     if ((mouseX > 170) && (mouseX < 195) && (mouseY > 340) && (mouseY < 365)) {
      vol=vol+ 0.2;
      pajaros.setVolume(vol);
  }
     if ((mouseX > 235) && (mouseX < 260) && (mouseY > 340) && (mouseY < 365)) {
      
  }
     if ((mouseX > 365) && (mouseX < 390) && (mouseY > 340) && (mouseY < 365)) {
      
  }
  }
  //////////////////////////barras
  fill(0);
  rect(0, 270, 400, 400);
  stroke(255);
  line(200, 0, 200, 400);
  line(0, 130, 400, 130);

  fill(255);
  rect(0, 270, 400, 20);
  image(miIzq, 10, 270, 20, 20);
  image(miDer, 370, 270, 20, 20);
  /////botones otros sonidos
  rect(75, 300, 60, 60);
  rect(270, 300, 60, 60);
  image(miPajaro, 75, 305, 50, 50);
  image(miAgua, 270, 305, 70, 120);
  ellipse(40, 340, 25, 25);
  ellipse(170, 340, 25, 25);
  ellipse(235, 340, 25, 25);
  ellipse(365, 340, 25, 25);
  image(miVool, 160, 330, 20, 20);
  image(miVool, 355, 330, 20, 20);
  image(miVol, 225, 330, 20, 20);
  image(miVol, 30, 330, 20, 20);
  /////////////////////////barras lados  
  stroke(255);
  fill(0);
  rect(0, 0, 20, 270);
  rect(380, 0, 20, 270);
  fill(255);
  ////pause, ad3lante

  rect(110, 240, 25, 25);
  rect(80, 240, 25, 25);
  rect(270, 240, 25, 25);
  rect(300, 240, 25, 25);
  image(miPause, 80, 240, 25, 25);
  image(miAdelante, 110, 240, 25, 25);
  image(miPause, 270, 240, 25, 25);
  image(miAdelante, 300, 240, 25, 25);
  /////botones
  noStroke();
  map(y2, 0, 270, 0, 255);
  fill(255, y2, 0);
  rect(0, y2, 20, 20);
  map(y, 0, 270, 0, 255);
  fill(255, y, 0);
  rect(380, y, 20, 20);
  stroke(255);
  fill(0);
  rect(z, 270, 10, 20);
  stroke(255);
  strokeWeight(2.5);
  line(2, 8, 18, 8);
  line(10, 2, 10, 15);
  line(2, 260, 18, 260);
  line(380, 8, 398, 8);
  line(390, 2, 390, 15);
  line(380, 260, 398, 260);
  ////////////////
  stroke(0);
  fill(51, mouseY);
  ellipse(200,k, 40, 40);
  
  fill(51, mouseX);
  ellipse(l,135, 40, 40);
  
}

////////////para perota vol
function mouseDragged() {
  if ((mouseX >= 380) && (mouseX < 400) && (mouseY >= 0) && (mouseY < 250)) {
    vol = map(mouseY, 259, 0, 0, 1);
    perota.setVolume(vol);

    y = mouseY;
  }
  /////para yatoa vol
  if ((mouseX >= 0) && (mouseX < 20) && (mouseY >= 0) && (mouseY < 250)) {
    vol = map(mouseY, 259, 0, 0, 1);
    yatao.setVolume(vol);

    y2 = mouseY;
  }
  /////////para el pan
  if ((mouseX > 0) && (mouseX <= 400) && (mouseY > 270) && (mouseY <= 290)) {
    miPan = map(mouseX, 0, width, -1, 1);
    perota.pan(miPan);
    yatao.pan(miPan);

    z = mouseX;
    ///////////////////////////
  }
 if ((mouseX > 200) && (mouseX <= 240) && (mouseY > 30) && (mouseY <= 250)) {
   let speed = map(mouseY, 20, 250, 0, 2);
  speed = constrain(speed, 0.01, 4);
  perota.rate(speed);
   k= mouseY;
 }
  // 
  if ((mouseX > 45) && (mouseX <= 360) && (mouseY > 125) && (mouseY <= 165)) {
  let speed2 = map(mouseX, 20, 360, 0, 2);
  speed2 = constrain(speed2, 0.01, 4);
  yatao.rate(speed2);
  l=mouseX;
 }
}