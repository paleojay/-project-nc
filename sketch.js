
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roofObject = new roof(400,200,1200,20);
	  bobObject1 = new bob(330,600,90,90);
    bobObject2 = new bob(360,600,90,90);
    bobObject3 = new bob(390,600,90,90);
    bobObject4 = new bob(420,600,90,90);
    bobObject5 = new bob(450,600,90,90);
    rope1=new rope(bobObject1.body,roofObject.body,2,0);
    rope2=new rope(bobObject2.body,roofObject.body,2,0);
    rope3=new rope(bobObject3.body,roofObject.body,2,0);
    rope4=new rope(bobObject4.body,roofObject.body,2,0);
    rope5=new rope(bobObject5.body,roofObject.body,2,0);
}


function draw() {
  rectMode(CENTER);
  background(220);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 if(keyDown(UP_ARROW)) {
    bobObject1.velocityX = 10;
  }
  drawSprites();
 
}



