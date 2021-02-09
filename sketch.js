var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyBody;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairyBody=Bodies.circle(130,520,50,{isStatic:true,});
    World.add(world,fairyBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);
 star.position.x=starBody.position.x;
 star.position.y=starBody.position.y;
 fairy.position.x=fairyBody.position.x;
 fairy.position.y=fairyBody.position.y;
 if(keyDown("right")){
	 fairyBody.position.x=fairyBody.position.x+5;
 }
 if(mousePressedOver(star)){
   Matter.Body.setStatic(starBody,false);
 }
  drawSprites();

}

