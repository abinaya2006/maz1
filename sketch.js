var md;
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var wld,eng;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,
box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,
box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;

var player1;
function preload(){
 md=loadImage("mazedesign.jpg");
}

function setup(){
  createCanvas(1300,600)
  eng=Engine.create()
  wld=eng.world

  mazeobj1=new Maze1()

 pla1=new Player()
 

       
}

function draw(){
 background("white")
 Engine.update(eng)
 mazeobj1.display()
  pla1.display()
 //pla1.move()
 //spla1.keyPressed()
 
//console.log(pla1)

if(keyDown("DOWN_ARROW")){
  pla1.moveY(7)
}
if(keyDown("UP_ARROW")){
  pla1.moveY(-7)
}
if(keyDown("LEFT_ARROW")){
  pla1.moveX(-7)
}
if(keyDown("RIGHT_ARROW")){
  pla1.moveX(7)
}
}


