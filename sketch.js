var sea
var ship
var shipImg
var seaImg
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadImage("ship-1.png", "ship-2.png" ,"ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);

sea=createSprite(0, 0,400,200)
sea.addImage(seaImg)
sea.velocityX=1

if (sea.x < 0){
  sea.x = sea.width/2;
}

ship=createSprite(200, 200, 50,50)
ship.addImage(shipImg)
ship.scale=0.3


}

function draw() {
  background("blue");
    drawSprites();

 
}
