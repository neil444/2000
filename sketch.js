
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;
function setup() {

  createCanvas(800,400);
   engine = Engine.create();
   
    world = engine.world;
    Engine.run(engine)
  

 

  ground = new Ground(600,750,1200,20);
  box1 = new box(260,300,30,40);
  box2 = new box(290,300,30,40);
  box3 = new box(320,300,30,40);
  box4 = new box(350,300,30,40);
  box5 = new box(290,260,30,40);
  box6 = new box(320,260,30,40);
  box7 = new box(350,260,30,40);
  box8 = new box(320,220,30,40);
  box9 = new box(350,220,30,40);
  box10 = new box(350,180,30,40);
 polygon = Bodies.circle(50,200,20)
World.add(world.polygon)
slingshot = new SlingShot (this.polygon,{x:100,y:200})
imageMode(CENTER)
image(poly.jpg,polygon.position.x,polygon.position.y,40,40);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();;
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  slingshot.display();

  drawSprites();
}