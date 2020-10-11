
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, tree, ground;
var mango1, mango2, mango3, mango4, mango5;
var boyImage;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(500,200, 50,50);
	boy = setImage("image", boyImage);

	mango1 = new Mango(300, 500);
	mango2 = new Mango(150, 500);
	mango3 = new Mango(100, 500);
	mango4 = new Mango(250, 500);
	mango5 = new Mango(350, 500);

	stone = new Stone(450, 150);

	tree = new Tree(200,500,40,250);

	slingshot = new Slingshot(stone.body, [450, 150]);

	ground = new Ground(40, 10, 400, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  stone.display();
  slingshot.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, [mouseX, mouseY]);
}

function mousePressed(){
	slinghsot.fly();
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stoneObj.body, {x: 235, y:420});
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPositon.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance <= lmango.r + lstone.r){
			Matter.Body.setStatic(lmango.body, false);
		}
}
