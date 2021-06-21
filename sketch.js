
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg1,bg2,SS;
var lander;
var vx=0;
var g=0.05;
var vy=0;
function preload()
{
 bg1=loadImage("bg_sur.png");
 bg2=loadImage("bg.png");
 SS=loadImage("normal.png");
}

function setup() {
	createCanvas(1000, 700);
	frameRate(80);
	lander=createSprite(100,50,30,30);
	lander.addImage(SS)
	lander.scale=0.1;
	//tree.addImage(t);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(bg2,0,0);
  push()
   fill(255);
    text("Vertical Velocity: "+round(vy),800,75);
	 pop();
  vy=vy+g;
  lander.position.y=lander.position.y+vy;
  drawSprites();

 
}



