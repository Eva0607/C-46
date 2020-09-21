const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var club;
var flag1;
var golfer;
var ball;
var background1;



function preload(){

  golfer = loadImage("golfer.png");

  background1 = loadImage("background.jpg");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  club = new Club(190, 250);
  
  flag1 = new Flag(600,200);

  ball = new Ball(225,280);


  
}

function draw() {
  background(background1);

  image(golfer, 50,100,200,200);
  
  club.display();

  flag1.display();

  ball.display();

  


 
}

function keyPressed(){
  if(keyCode === "UP_ARROW"){
    Matter.Body.applyForce(ball.body,ball.body.position, {x : 30, y : -30});
   }

}