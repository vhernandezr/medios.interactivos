


var INTRODUCCION = 0;
var ESTADO2 = 1;
var ESTADO3 = 2;
var ESTADO4 = 3;
var ESTADO5= 4;
var ESTADO6=5;
var foto;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
var foto10;
var foto11;
var fond;
var voz;
function preload(){
foto=loadImage('Recurso 14.png');
  foto2=loadImage('Recurso 7.png');
  foto3=loadImage('Recurso 8.png');
  foto4=loadImage('Recurso 9.png');
  foto5=loadImage('Recurso 10.png');
  foto6=loadImage('Recurso 11.png');
  foto7=loadImage('r.png');
  foto8=loadImage('rr.png');
  foto9=loadImage('rrr.png');
  foto10=loadImage('Recurso 12.png');
  foto11=loadImage('Recurso 13.png');
  fondo=loadImage('fondi.png');
    fotow=loadImage('car.png');
    fotoww=loadImage('fotox.png');
     icono=loadImage('Recurso 2.png');
  voz =loadSound ( 'vozzz.mp3' );
  



}

var estado = INTRODUCCION;

var x;
var y;

var tiempoAnterior;
var M = 5330; //tiempo animación (milli segundos)

function setup() {
  createCanvas(1024, 768);
  x = width / 2 + 20;
  y = (height / 2) - 30;
  tiempoAnterior = millis();

}

function draw() {
  //ESTADO 0 = introducción al tema
   
  
    
  if (estado == INTRODUCCION) {
    background(255);
    image(fondo, 50,20,width-100,height-50);
    image(foto2, 50,250,150,150);
    image(foto3, 210,250,150,150);
    image(foto4, 210,410,150,150);
    image(foto5, 370,250,150,150);
    image(foto6, 370,410,150,150);
    image(foto7, 850,250,150,150);
    image(foto9, 690,410,150,150);
    image(foto8, 690,250,150,150);
    image(foto10, 530,250,150,150);
    image(foto, 50,410,150,150);
      image(foto11, 530,410,150,150);
     //if (mouseIsPressed == true) {
    if (mouseX > 50  && mouseX < 200  && mouseY >250  && mouseY < 400 ) {
      //image(foto2, 150,450,150,150);
    }
    if (mouseX > 210  && mouseX < 360  && mouseY >249  && mouseY < 400 ) {
    }
    if (mouseX > 370  && mouseX < 520  && mouseY >250  && mouseY < 400 ) {}
    if (mouseX > 530  && mouseX < 680  && mouseY >250  && mouseY < 400 ) {}
    if (mouseX > 690  && mouseX < 840  && mouseY >250  && mouseY < 400 ) {
    estado= ESTADO2}
    if (mouseX > 850  && mouseX < 1000  && mouseY >250  && mouseY < 400 ) {}
    if (mouseX > 50  && mouseX < 200  && mouseY >400  && mouseY < 560 ) {}
    if (mouseX > 210  && mouseX < 360  && mouseY >400  && mouseY < 560 ) {}
    if (mouseX > 370  && mouseX < 520  && mouseY >400  && mouseY < 560 ) {}
    if (mouseX > 530  && mouseX < 680  && mouseY >400  && mouseY < 568 ) {}
    if (mouseX > 690  && mouseX < 840&& mouseY >400  && mouseY < 560 ) {}
    //////////////////////////////////
        if (mouseX > 720  && mouseX < 800  && mouseY >590  && mouseY < 730 ) {}
    
     
    
    //ESTADO 1 = Animación durante M cantidad de tiempo
  } else if (estado == ESTADO2) {
    
     background(255);
    image(fondo, 50,20,width-100,height-50);
    image(foto2, 50,250,150,150);
    image(foto3, 210,250,150,150);
    image(foto4, 210,410,150,150);
    image(foto5, 370,250,150,150);
    image(foto6, 370,410,150,150);
    image(foto7, 850,250,150,150);
    image(foto9, 690,410,150,150);
    image(foto8, 150,600,120,120);
    image(foto10, 530,250,150,150);
    image(foto, 50,410,150,150);
      image(foto11, 530,410,150,150);
    // if (mouseIsPressed == true) {
    if (mouseX > 210  && mouseX < 360  && mouseY >249  && mouseY < 400 ) {
      estado=ESTADO3
    }
    //tiempo restante en segundos impreso en la pantalla
  
   
    
    //ESTADO 2 = Interacción con el usuario
  } else if (estado == ESTADO3) {
    background(255);
    image(fondo, 50,20,width-100,height-50);
    image(foto2, 50,250,150,150);
    image(foto3, 310,600,120,120);
    image(foto4, 210,410,150,150);
    image(foto5, 370,250,150,150);
    image(foto6, 370,410,150,150);
    image(foto7, 850,250,150,150);
    image(foto9, 690,410,150,150);
      image(foto8, 150,600,120,120);
    image(foto10, 530,250,150,150);
    image(foto, 50,410,150,150);
      image(foto11, 530,410,150,150);
     //if (mouseIsPressed == true) {
    if (mouseX > 658  && mouseX < 900 && mouseY >590  && mouseY < 750 ) 
    {estado=ESTADO4;
                                                                        
     }
    
   
   } else if (estado == ESTADO4) {
     
      background(255);
    image(fotow, 50,20,width-100,height-50);
    // text((M - floor((millis() - tiempoAnterior))) / 1000, width / 2, height / 2);
       if (millis()-tiempoAnterior > M) {
     estado = ESTADO5;
         voz.play();
}}
  
   else if(estado== ESTADO5){
   
    image(fotoww, 50,20,width-100,height-50);
image(icono, 800,0,100, 100);
      if (mouseX > 800  && mouseX < width && mouseY >0  && mouseY < 150 ) {estado=INTRODUCCION}
    

}
}
function mouseReleased() {
  if (estado == ESTADO4) 
    
    tiempoAnterior = millis();
  //Si se suelta el mouse en la introducción pasa a la animación
}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}