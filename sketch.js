
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var ropeObject1,ropeObject2,ropeObject3, ropeObject4,ropeObject5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);

	bobObject1 = new bob(320,575,40)
	bobObject2 = new bob(360,575,40)
	bobObject3 = new bob(400,575,40);
	bobObject4 = new bob(440,575,40);
	bobObject5 = new bob(480,575,40);

	ropeObject1=new rope(bobObject1.body,roofObject.body, -80, 0)
	ropeObject2=new rope(bobObject2.body,roofObject.body, -40, 0)
	ropeObject3=new rope(bobObject3.body,roofObject.body, 0,0)
    ropeObject4=new rope(bobObject4.body,roofObject.body, 40,0)
	ropeObject5=new rope(bobObject5.body,roofObject.body, 80,0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){

     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}






