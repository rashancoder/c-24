
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render
var dustbinob,paperob,grounob,world;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperob= new paper(200,450,70)
	groundob=new ground(width/2,670,width,20)
	dustbinob= new dustbin(1200,650)
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:1700,
			wireframes:false
		}
	})

	

	Engine.run(engine);
	Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperob.display()
  dustbinob.display()
  groundob.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){Matter.Body.applyForce(paperob.body,paperob.body.pos,{x:130, y:-145})}	
}



