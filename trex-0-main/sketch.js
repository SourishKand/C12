var trex ,trex_running;
var ground, ground_Image, invisible_ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_Image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,170,10,10);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  ground = createSprite(300, 160, 600, 1);
  ground.addImage("ground", ground_Image);
  ground.velocityX = -3;

  invisible_ground = createSprite(300, 180, 600, 1);
  invisible_ground.visible = false;
}

function draw(){
  background("white")
  edges=createEdgeSprites();
  if(keyDown("space") && trex.y > 150){
     trex.velocityY=-10;
  }
  console.log(trex.y);
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  trex.velocityY+=0.8;
  trex.collide(invisible_ground);
  drawSprites();
}
