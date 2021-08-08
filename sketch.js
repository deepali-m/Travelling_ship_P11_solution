var sea,ship;
var seaImg,shipImg;
var iceBergImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadImage("ship-1.png");

  iceBergImg = loadImage("iceberg.png");

  
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addImage("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
  drawSprites();
  spawnIcerberg();
}

function spawnIcerberg(){
  if(frameCount % 80 ===0){
var iceberg= createSprite(400,250,20,20);
iceberg.velocityX= -5;
iceberg.addImage(iceBergImg);
iceberg.scale=0.2;
iceberg.y=random(250,400)

  }
}