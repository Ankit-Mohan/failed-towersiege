const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload() {
    backgroundImg = loadImage("sprites/polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(390,225,150,10);
}

function draw(){
    Engine.update(engine);
    ground1.display();
}
