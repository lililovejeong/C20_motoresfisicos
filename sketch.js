
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var pelota_options = {
    restitution: 0.50,
    frictionAir:0.02
  }

  ball = Bodies.circle(100,10,20,ball_options);
  pelota = Bodies.circle(200,20,40,pelota_options);

  World.add(world,ball);
  World.add(world,pelota);

  var ground_options = {
    isStatic: true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(pelota.position.x,pelota.position.y,40);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}