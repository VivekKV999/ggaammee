const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundI;
var gameState = "onSling";
var box1,box2,box3,box4,box5,log1,log2

function preload(){
  backgroundI=loadImage("bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(150, 305, 300, 170);
  ground = new Ground(600,height,1200,20);
  box1 = new Box(700,350,70,70);
  box2 = new Box(920,350,70,70);
  box3 = new Box(700,265,70,70);
  box4 = new Box(920,265,70,70);
  box5 = new Box(620,300,70,70);
  box6 = new Box(620,175,70,70);
  box7 = new Box(1000,300,70,70);
  box8 = new Box(1000,175,70,70);
  log1 = new Log(810,310,300,90);
  log2 = new Log(810,220,300,90);
  log3 = new Log(575,235,350,180);
  log4 = new Log(1045,235,350,180);
  log5 = new Log(805,55,485,90);
  enemy1 = new Enemy(615,300,50,50)
  enemy2 = new Enemy(615,175,50,50)
  enemy3 = new Enemy(1000,300,50,50)
  enemy4 = new Enemy(1000,175,50,50)
  enemy5 = new Enemy(700,265,50,50)
  enemy6 = new Enemy(700,350,50,50)
  enemy7 = new Enemy(920,265,50,50)
  enemy8 = new Enemy(920,350,50,50)
  ball = new Ball(210,50,500,100);
 
  treasure = new Treasure(800,130,10,10)
  slingshot = new SlingShot(ball.body,{x:210, y:50}); 

}

function draw() {
  background(backgroundI); 
  drawSprites(); 
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  treasure.display();
  platform.display();
 
  slingshot.display();  
  ball.display();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}