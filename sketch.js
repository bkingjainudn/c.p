
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;



var ball;
var ground;

function setup(){
createCanvas(400,400);
 engine = Engine.create();
  world = engine.world;

var ball_options={
    isStatic:false,
    restitution:0.3,
    frictions:0,
    density:1.2,
   ball=Bodies.circle(100,150,15,options)
   World.add(world,ball)
}
}

function draw(){
    background(51);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,15,15)
  Engine.update(engine);
 


}

function keyPressed(){
    if(keyCode===UP_ARROW){
     Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
    }
}




