var movingRect , fixedRect ;


function setup() { 
  createCanvas(800,400);
  movingRect = createSprite(200, 100, 50, 50);
  fixedRect = createSprite(200,200,30,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  //movingRect.velocityX = -5;
  movingRect.velocityY = 5; 
  fixedRect.velocityY = -5;
}

function draw() {
  background("black");



bounceOff(movingRect,fixedRect);

  drawSprites();
}



