var wall,thickness;
var bullet,speed,weight

function setup() {

thickness = random(22,83);
speed = random(223,321);  
weight = random(30,52); 

}

function draw() {

wall = createSprite(1200,200,thickness,width/2);

}

function hascollided(Lbullet,Lwall) 
{
bulletRightEdge=1bullet.x + 1bullet.width; 
wallLeftEdge = 1wall.x;
 


}
