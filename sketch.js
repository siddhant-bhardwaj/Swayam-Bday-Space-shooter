var playerShuttle;
var playerimg,comimg;
var ComputerShuttle;
var laser;
var laser1;
var rand;
gameState = "start";

function preload(){
playerimg = loadImage("Images/Player.png");
comimg = loadImage("Images/Computer.png");
}

function setup() {
  createCanvas(400,400);
  playerShuttle = createSprite(20,200,20,20);
  playerShuttle.addImage(playerimg);
  playerShuttle.scale = 0.5;
  playerShuttle.visible = false;
  ComputerShuttle = createSprite(380,200,20,20);
  ComputerShuttle.addImage(comimg);
  ComputerShuttle.scale = 0.5;
  ComputerShuttle.visible = false;
  laser = createSprite(200,200,10,5);
  laser.shapeColor="red";
  laser.visible= false;
  laser1 = createSprite(200,300,10,5);
  laser1.shapeColor="purple";
  laser1.visible = false;
  
  
}


function draw() {
  background(0,0,0); 
  playerShuttle.y = mouseY;

  if(gameState==="start"){
    fill("yellow");
    text("WELCOME TO SPACE SHOOTER GAME",50,50);
    text("Press Enter to Start",100,100);
    text("Destroy the enmy ship",100,150);
    text("U can shoot by pressing the space bar",100,200);
    text("Do not constantly press space as your shot will end",100,250);
  }

  if(gameState==="start"&& keyDown("enter")){
    gameState="play";
    playerShuttle.visible = true;
    ComputerShuttle.visible = true;
  }

if(keyDown("space")&& gameState==="play"){
laser.visible = true;
laser.x = playerShuttle.x;
laser.y = playerShuttle.y;
laser.velocityX = 8;
}

if(laser.isTouching(ComputerShuttle)&& gameState==="play"){
  ComputerShuttle.visible = false;
  gameState="restart";
}

if(laser1.isTouching(playerShuttle)&& gameState==="play"){
playerShuttle.visible = false;
gameState="restart";
}

if(gameState==="restart"){
  text(" https://siddhant-bhardwaj.github.io/SWAYAM-BDAY-2/ ",5,50);
}

if(gameState==="restart"&& keyDown("r")){
 // ComputerShuttle.visible="false";
  gameState="start";
}

Computer();

  drawSprites();
}


function Computer(){
  if(frameCount % 60===0 && gameState==="play"){
    rand = random(10,380);
ComputerShuttle.y = rand;
laser1.visible = true;
laser1.x = ComputerShuttle.x;
laser1.y = ComputerShuttle.y;
laser1.velocityX = -8;

  }
}