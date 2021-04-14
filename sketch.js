var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var binImg,bin

function preload()
{
  binImg = loadImage("Images/dustbingreen.png");

}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(150, 500, 10);   
   
   bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;
   
    leftSide = new Dustbin(902,505,10,120);
    bottom = new Dustbin(962,565,130,10);
    rightSide = new Dustbin(1024,505,10,120);

 
   ground = new Ground(600, height-35, 1200, 15); 

   sling1= new SlingShot(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  //leftSide.display();
  //bottom.display();
  //rightSide.display(); 
 
 

  paper1.display();
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
