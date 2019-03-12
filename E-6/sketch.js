var miSegundo;
var miMinuto;
var miHora;
var colR;
var colG;
var colB;
var colR2;
var colG2;
var colB2;
var miAngulo = 0;

var x=250;
var y=250;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  miSegundo= second();
  miMinuto= minute(); 
  miHora= hour();

  miMinutoMod= map(miMinuto, 0, 60, 10,10);
  miSegundoMod= map(miSegundo, 0, 60, 0, 200);
  miSegundoCol= map(miSegundo, 0, 0, 0, 200);
 miHoraMod = map(miHora, 0, 12, 0, 255);
	miSegGrad = map(miSegundo, 0, 60, 0, 360);
  
fill(colR, colG, colB);
  colR=colR+miSegundoCol;
  colG=colG+miSegundoCol;
  colB= colB+ miSegundoCol;
  rect(0,0, 400, 400);

  //Petaloooooos
  noFill();
   push();
	translate(width / 2, height / 2);
rotate(miSegGrad);
  noStroke();
  fill(colR2, colG2, colB2);
  beginShape();
 vertex(0,0);
  vertex(-19, 25);
  vertex(-40, 38);
  vertex(-73, 28);
  vertex(-94, 0);
  vertex(-75, -17);
  vertex(-47, -29);
  vertex(-27, -21);

  endShape();
 
  beginShape();
 vertex(0,0);
  vertex(23, 23);
  vertex(35, 45);
  vertex(22, 76);
  vertex(0, 95);
  vertex(-22, 76);
  vertex(-32, 46);
 vertex(-19, 21);
  endShape();
  
   beginShape();
 vertex(0,0);
  vertex(-22, 20);
  vertex(-31, -48);
  vertex(-19, -73);
  vertex(0, -95);
  vertex(22, -73);
  vertex(36, -50);
 vertex(30, -25);
  endShape();
  
    beginShape();
 vertex(0,0);
  vertex(16, -21);
  vertex(46, -34);
  vertex(71, -23);
  vertex(95,0);
  vertex(78, 19);
  vertex(52, 34);
 vertex(20, 23);
  endShape();
pop();
  
  ///Centro de la flor 
  noStroke();
  fill(colR, colG, colB);
  ellipse(width/2, height/2, miMinutoMod, miMinutoMod);

  //circulo de segundos
  noStroke();
  fill(colR,colG, colB, 120);
  ellipse(width/2, height/2, miSegundoMod, miSegundoMod);
  
     fill(0);
ellipse (width/2, height/2,miSegundoMod ,20);
       fill(0);
ellipse (width/2, height/2,20 ,miSegundoMod);
  

/////////////////////////////////////////////////
  noFill();
  push();
	translate(width / 2, height / 2);
rotate(45);
  noStroke();
  fill(colR2, colG2, colB2);
  beginShape();
 vertex(0,0);
  vertex(-19, 25);
  vertex(-40, 38);
  vertex(-73, 28);
  vertex(-94, 0);
  vertex(-75, -17);
  vertex(-47, -29);
  vertex(-27, -21);

  endShape();
 
  beginShape();
 vertex(0,0);
  vertex(23, 23);
  vertex(35, 45);
  vertex(22, 76);
  vertex(0, 95);
  vertex(-22, 76);
  vertex(-32, 46);
 vertex(-19, 21);
  endShape();
  
   beginShape();
 vertex(0,0);
  vertex(-22, 20);
  vertex(-31, -48);
  vertex(-19, -73);
  vertex(0, -95);
  vertex(22, -73);
  vertex(36, -50);
 vertex(30, -25);
  endShape();
  
    beginShape();
 vertex(0,0);
  vertex(16, -21);
  vertex(46, -34);
  vertex(71, -23);
  vertex(95,0);
  vertex(78, 19);
  vertex(52, 34);
 vertex(20, 23);
  endShape();
pop();
  fill(0);
  ellipse(width/2, height/2,20 ,20);
noFill();
  

/////////////////////////////////////////7

 
////cada minuto cambio 
  if (miMinuto==miMinuto) {

    if ((miMinuto=>0)&&(miMinuto<1)) {
      colR=146;
      colG=40;
      colB=175;

      
    } else

      if ((miMinuto=>1)&&(miMinuto<2)) {
        colR=175;
        colG=41;
        colB=135;

        
      } else

        if ((miMinuto=>2)&&(miMinuto<3)) {
          colR=153;
          colG=51;
          colB=102;

          
        } else

          if ((miMinuto=>3)&&(miMinuto<4)) {
            colR=204;
            colG=51;
            colB=102;

            
          } else

            if ((miMinuto=>4)&&(miMinuto<5)) {
              colR=155;
              colG=51;
              colB=102;

             
            } else

              if ((miMinuto=>5)&&(miMinuto<6)) {
                colR=155;
                colG=0;
                colB=102;

                
              } else

                if ((miMinuto=>6)&&(miMinuto<7)) {
                  colR=204;
                  colG=51;
                  colB=51;

                  
                } else

                  if ((miMinuto=>7)&&(miMinuto<8)) {
                    colR=104;
                    colG=0;
                    colB=0;

                    
                  } else

                    if ((miMinuto=>8)&&(miMinuto<9)) {
                      colR=255;
                      colG=51;
                      colB=51;

                      
                    } else

                      if ((miMinuto=>9)&&(miMinuto<10)) {
                        colR=205;
                        colG=102;
                        colB=90;

                        
                      } else

                        if ((miMinuto=>10)&&(miMinuto<20)) {
                          colR=255;
                          colG=153;
                          colB=51;
} else

                        if ((miMinuto=>20)&&(miMinuto<50)) {
                          colR=178;
                          colG=53;
                          colB=51;
                          
                        
                          } else
                          if ((miMinuto==60)){
                             colR=204;
                            colG=153;
                            colB=51;

                            
                          }

  //color hora 
  if (miHora==miHora) {

    if ((miHora=>0)&&(miHora<1)) {
      

      colR2=51;
      colG2=51;
      colB2=102;
    } else

      if ((miHora=>1)&&(miHora<2)) {
        

        colR2=102;
        colG2=51;
        colB2=153;
      } else

        if ((miHora=>2)&&(miHora<3)) {
          

          colR2=153;
          colG2=51;
          colB2=153;
        } else

          if ((miHora=>3)&&(miHora<4)) {
          
            colR2=153;
            colG2=51;
            colB2=102;
          } else

            if ((miHora=>4)&&(miHora<5)) {
              

              colR2=204;
              colG2=51;
              colB2=102;
            } else

              if ((miHora=>5)&&(miHora<6)) {
                

                colR2=255;
                colG2=51;
                colB2=102;
              } else

                if ((miHora=>6)&&(miHora<7)) {
                  

                  colR2=255;
                  colG2=0;
                  colB2=102;
                } else

                  if ((miHora=>7)&&(miHora<8)) {
                   

                    colR2=204;
                    colG2=51;
                    colB2=51;
                  } else

                    if ((miHora=>8)&&(miHora<9)) {
                     

                      colR2=204;
                      colG2=0;
                      colB2=0;
                    } else

                      if ((miHora=>9)&&(miHora<10)) {
                      

                        colR2=255;
                        colG2=51;
                        colB2=51;
                      } else

                        if ((miHora=>10)&&(miHora<11)) {
                          

                          colR2=205;
                          colG2=102;
                          colB2=51;
                        } else

                          if ((miHora=>11)&&(miHora<12)) {
                            

                            colR2=255;
                            colG2=153;
                            colB2=51;
                          } else
                          if ((miHora==12)){
                          

                            colR2=255;
                            colG2=153;
                            colB2=51;
                          }
    
  }}}
