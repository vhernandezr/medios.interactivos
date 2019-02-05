function setup() {

createCanvas(800, 600);
   //shape 4 
  fill(96, 78, 4, 200);
  noStroke();
  beginShape();
  vertex(130, 310);
  vertex(490, 385);
  vertex(460, 550);
  vertex(120, 550);
  endShape(CLOSE);
   //semicirculo
    fill(255, 255, 255);
    noStroke();
  beginShape();
  curveVertex(400, 338);
  curveVertex(400, 338); 
  curveVertex(397, 367); 
  curveVertex(368, 396); 
  curveVertex(320, 398); 
  curveVertex(290, 382);
  curveVertex(290, 382);
endShape();


  noStroke();
 //triang 1
  fill(241, 235, 20, 180);
  
  triangle(320, 40, 225, 375, 357, 415);
 
 
  
  //tri largooo
   fill(0, 0 ,0);
  triangle(0, 540, 0, 580, 800, 545);
  
  
  
  //triang 2
  fill(208, 30, 2, 240)
  triangle(120, 200, 80, 380, 288, 382);
  //shape 3
  fill(0, 0, 0);
  beginShape();
  vertex(285, 275);
   vertex(200, 335);
    vertex(212, 380);
     vertex(252, 338);
      vertex(230, 500);
       vertex(280, 545);
        vertex(370, 545);
         vertex(350, 490);
          vertex(290, 480);
          endShape(CLOSE);
          
   //triang 8
  triangle(503, 340, 508, 370, 710, 340);
 
   //circulo 9
   
   ellipse(450, 490, 140, 140);
   //circulo 9 inside
   fill(255, 255, 255)
  ellipse(450, 490, 95, 95);
    //
     strokeWeight(10);
              stroke(232, 60, 12);
  beginShape();

              curveVertex(470, 450);
              curveVertex(470, 450);
                curveVertex(450, 445); 
                curveVertex(430, 450);
                
              curveVertex(415, 465);
              curveVertex(415, 465);
             
              endShape();
              noStroke();
  //bb circulo
  fill(230, 60, 10);
  ellipse(455, 490, 20, 20);
 
  ellipse(425, 190, 20, 20);
  
  //shape 6
  fill(108, 150, 170, 210);
  beginShape();
  vertex(100, 440);
  vertex(165, 440);
  vertex(170, 565);
  vertex(70, 515);
  endShape(CLOSE);
 
  //shape 7 
  fill(232, 60, 12);
  beginShape();
  vertex(495, 260);
  vertex(600, 260);
  vertex(615, 440);
  vertex(565, 300);
  endShape(CLOSE);
 
 //3lineas
 strokeWeight(3);
 stroke(0, 0, 0);
 line(225, 210, 228, 150);
 line(200, 212, 180, 150);
 line(138, 180, 180, 235);
  //2lineas circ
   strokeWeight(3);
  line(458, 470, 480, 330);
  line(370, 510, 570, 470);
  
  //curvas
   noFill();
   beginShape(); 
 curveVertex(260, 200); 
 curveVertex(260, 200); 
  curveVertex(220, 196); 
   curveVertex(190, 208); 
    curveVertex(160, 240); 
     curveVertex(160, 240); 
      endShape();

 

beginShape();
       curveVertex(265, 175); 
       curveVertex(265, 175); 
        curveVertex(240, 168); 
         curveVertex(200, 175); 
          curveVertex(170, 195); 
           curveVertex(148, 225); 
           curveVertex(148, 225); 
            endShape();
            
            
           //curvitas
           strokeWeight(3);
            beginShape();
            
            curveVertex(480, 138); 
             curveVertex(480, 138); 
             curveVertex(460, 137); 
              curveVertex(420, 145); 
                curveVertex(360, 184); 
             curveVertex(300, 264); 
              curveVertex(300, 264);
             endShape();
              
              beginShape();
              curveVertex(440, 160); 
              curveVertex(440, 160); 
                curveVertex(420, 165); 
             curveVertex(360, 204); 
              curveVertex(296, 282); 
               curveVertex(296, 282); 
                endShape();
                
               //curvotas
               
        beginShape();
                curveVertex(448, 270); 
                 curveVertex(448, 270);
             curveVertex(460, 260); 
              curveVertex(450, 250); 
              curveVertex(460, 242); 
              curveVertex(475, 234); 
              
              curveVertex(465, 222); 
              curveVertex(426, 222); 
              curveVertex(360, 238); 
              curveVertex(290, 230); 
                  curveVertex(290, 230); 
              endShape();
              
              beginShape();
              
              curveVertex(425, 265); 
              curveVertex(425, 265); 
              curveVertex(440, 258); 
              curveVertex(433, 250); 
              curveVertex(448, 242);
              curveVertex(444, 235);
        
              
              curveVertex(425, 234);
              curveVertex(360, 248);
              curveVertex(280, 234); 
              curveVertex(280, 234); 

            endShape();
            
  beginShape();
              
              curveVertex(405, 270); 
              curveVertex(405, 268);
              curveVertex(415, 266); 
              curveVertex(410, 260); 
              curveVertex(425, 250);
              curveVertex(420, 245); 
              curveVertex(408, 248);
              curveVertex(360, 255); 
              curveVertex(270, 237);
              curveVertex(270, 237);
             
              endShape();
              
  //minicuad
  fill(255, 255, 255);
 noStroke();
 quad(608, 340, 610, 355, 584, 360, 580, 340);
 //
 strokeWeight(4);
 stroke(230, 20, 12);
    line(445, 290, 400, 315);
    
   //triag peque- semic
   fill(105, 55, 220);
   noStroke();
   triangle(410, 338, 350, 358, 397, 368);
   
   //detalles- curvas
    beginShape();
    noFill();
    strokeWeight(4);
             stroke(230, 60, 10);
              curveVertex(492, 340); 
                 curveVertex(492, 340); 
              curveVertex(494, 320);
              curveVertex(480, 310); 
              curveVertex(464, 320); 
              curveVertex(462, 340);
              curveVertex(462, 340);
            
              endShape();
   beginShape();
              
              curveVertex(550, 460);
              curveVertex(550, 460);
              curveVertex(565, 450);
              curveVertex(580, 460); 
              curveVertex(578, 480); 
              curveVertex(560, 486);
              curveVertex(560, 486);
           endShape();
  beginShape();
  noStroke();
              fill(230, 190, 25);
              curveVertex(210, 426); 
                curveVertex(210, 426); 
                curveVertex(197, 424);
                
              curveVertex(180, 430);
              curveVertex(178, 450);
              curveVertex(184, 460);
            
              curveVertex(184, 460); 
              endShape();
             
              //tringulitos
              fill(255, 255, 255);
              
              triangle(210, 442, 200, 460, 280, 510);
              
              triangle(450, 465, 320, 460, 320, 485);
              fill(0, 0, 0);
              triangle(450, 465, 420, 465, 420, 470);
              
              fill(0, 0, 0);
   quad(340, 440, 350, 450, 340, 460, 325, 450);
   fill(255, 255, 255);
   quad(520, 420, 540, 440, 460, 470, 465, 450);
   
              //cua ajedre
               strokeWeight(3);
              stroke(0, 0 ,0);
              
              noFill();
   quad(560, 390, 580, 420, 537, 448, 520, 420);
   line(525, 430, 565, 400);
   line(532, 438, 574, 410);
   line(530, 415, 545, 443);
   line(538, 405, 555, 435);
   line(550, 400, 565, 428);
   noStroke();
   fill(255, 255, 255);
   triangle(310, 405, 290, 430, 300, 455);
    
}