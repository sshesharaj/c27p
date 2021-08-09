
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(600,680,1200,30)
stone1 = new Stone(100,100,100,100)
rubber1 = new Rubber(300,100,30)
hammer1 = new Hammer(300,100,80,20)
iron1 = new Iron(500,100,100,100)
sand1 = new Sand(600,100,1,1)
sand2 = new Sand(610,100,1,1)
sand3 = new Sand(620,100,1,1)
sand4 = new Sand(630,100,1,1)
sand5 = new Sand(640,100,1,1)
sand6 = new Sand(650,100,1,1)
sand7 = new Sand(660,100,1,1)
sand8 = new Sand(670,100,1,1)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground1.display()
 stone1.display()
 rubber1.display()
 hammer1.display()
 iron1.display()
 sand1.display()
 sand2.display()
 sand3.display()
 sand4.display()
 sand5.display()
 sand6.display()
 sand7.display()
 sand8.display()
 
}



