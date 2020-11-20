const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base1, base2;

// base1
var b1x1x1, b1x1x2, b1x1x3, b1x1x4, b1x1x5, b1x1x6, b1x1x7;
var b1x2x1, b1x2x2, b1x2x3, b1x2x4, b1x2x5;
var b1x3x1, b1x3x2, b1x3x3;
var b1x4x1;

// base 2
var b2x1x1, b2x1x2, b2x1x3, b2x1x4;
var b2x2x1, b2x2x2;
var b2x3x1;

var stone;

var score = 0;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  base1 = new Ground(390, 265, 230, 20);
  
  b1x1x1 = new Box(300, 235, 30, 40);
  b1x1x2 = new Box(330, 235, 30, 40);
  b1x1x3 = new Box(360, 235, 30, 40);
  b1x1x4 = new Box(390, 235, 30, 40);
  b1x1x5 = new Box(420, 235, 30, 40);
  b1x1x6 = new Box(450, 235, 30, 40);
  b1x1x7 = new Box(480, 235, 30, 40);

  b1x2x1 = new Box(330, 195, 30, 40);
  b1x2x2 = new Box(360, 195, 30, 40);
  b1x2x3 = new Box(390, 195, 30, 40);
  b1x2x4 = new Box(420, 195, 30, 40);
  b1x2x5 = new Box(450, 195, 30, 40);

  b1x3x1 = new Box(360, 155, 30, 40);
  b1x3x2 = new Box(390, 155, 30, 40);
  b1x3x3 = new Box(420, 155, 30, 40);

  b1x4x1 = new Box(390, 115, 30, 40);


  base2 = new Ground(650, 130, 140, 20);

  b2x1x1 = new Box(605, 100, 30, 40);
  b2x1x2 = new Box(635, 100, 30, 40);
  b2x1x3 = new Box(665, 100, 30, 40);
  b2x1x4 = new Box(695, 100, 30, 40);

  b2x2x1 = new Box(635, 60, 30, 40);
  b2x2x2 = new Box(665, 60, 30, 40);

  b2x3x1 = new Box(650, 20, 30, 40);


  stone = new Ammo(100,250, 60);
  slingshot = new SlingShot(stone.body,{x:100, y:250});


}

function draw() {
  background("#331908");  
  textSize(35);
  fill("#FFFAFA");
  text("Score: " + score, 100, 40);

  b1x1x1.score();
  b1x1x2.score();
  b1x1x3.score();
  b1x1x4.score();
  b1x1x5.score();
  b1x1x6.score();
  b1x1x7.score();

  b1x2x1.score();
  b1x2x2.score();
  b1x2x3.score();
  b1x2x4.score();
  b1x2x5.score();

  b1x3x1.score();
  b1x3x2.score();
  b1x3x3.score();

  b1x4x1.score();


  b2x1x1.score();
  b2x1x2.score();
  b2x1x3.score();
  b2x1x4.score();

  b2x2x1.score();
  b2x2x2.score();

  b2x3x1.score();

  

  base1.display();
  b1x1x1.display();
  b1x1x2.display();
  b1x1x3.display();
  b1x1x4.display();
  b1x1x5.display();
  b1x1x6.display();
  b1x1x7.display();

  b1x2x1.display();
  b1x2x2.display();
  b1x2x3.display();
  b1x2x4.display();
  b1x2x5.display();

  b1x3x1.display();
  b1x3x2.display();
  b1x3x3.display();

  b1x4x1.display();

  
  base2.display();

  b2x1x1.display();
  b2x1x2.display();
  b2x1x3.display();
  b2x1x4.display();

  b2x2x1.display();
  b2x2x2.display();

  b2x3x1.display();

  stone.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{ 
    slingshot.fly();
}

function keyPressed(){
  console.log("i am called")
  if(keyCode === 32)
  {

      console.log("space is presssed")
      slingshot.attach(stone.body);
  }
}