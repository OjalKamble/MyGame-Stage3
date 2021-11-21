//adding variables...
var player,playerImg;
var bg;
var bulletgrp,bulletImg;
var asteriod1,asteriod1Img;
var asteriod2,asteriod2Img;
var restart,restartImg;
var gameOver,gameOverImg;
var spawnAsteriod1;
var spawnAsteriod2;
var score = 0;
var lives = 5;

function preload(){
  //loading images...
  playerImg = loadImage("images/spaceship1.png");
  bg = loadImage("images/bg1.jpg");
  asteriod1Img = loadImage("images/asteriod1.png");
  asteriod2Img = loadImage("images/asteriod2.png")
  bulletImg = loadImage("images/bullet.png");
  restartImg = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1000,750);
  
  //player sprite...
  player = createSprite(750, 650);
  player.addImage(playerImg);
  player.scale = 0.3;
  
  //creating new group...
  A1grp = new Group();
  A2grp = new Group();
  bulletgrp = new Group();
}

function draw() {
  background(bg);

  //adding texts...
  textSize(30);
  fill("white");
  text("SCORE: ",+score,30,30);

  //keywork...
  if (keyDown("left")) {
    player.x = player.x -5;
  }
  
  if (keyDown("right")) {
    player.x = player.x +5;
  }

  if((keyDown("space")) && bulletgrp.isTouching(player) === false){
    firebullet();
  }
  
  //isTouching...
  if(bulletgrp.isTouching(A1grp)){
    A1grp.destroyEach();
    score = score +1;
  }

  if(bulletgrp.isTouching(A2grp)){
    A2grp.destroyEach();
    score = score +1;
  }

  if(A1grp.isTouching(player)|| A2grp.isTouching(player)){
    lives = lives-1
    A1grp.destroyEach();
    A2grp.destroyEach();
  }

  drawSprites();
  spawnAsteriod1();
  spawnAsteriod2();
  }

function spawnAsteriod1(){
  asteriod1 = createSprite(Math.round(random(0,1000)),0);
  asteriod1.addImage(asteriod1Img)
  asteriod1.scale = 0.3;
  asteriod1.velocityY = 2.5;
  A1grp.add(asteriod1);
}
function spawnAsteriod2(){
  asteriod2 = createSprite(Math.round(random(0,1000)),0);
  asteriod2.addImage(asteriod2Img)
  asteriod2.scale = 0.3;
  asteriod2.velocityY = 2.5;
  A2grp.add(asteriod2);
}