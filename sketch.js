var bullet
var wall
var speed
var weight
var thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
 weight = random(30,52)
 thickness = random(22,83)

 bullet = createSprite(100, 200, 50, 10);
 bullet.shapeColor = "white"

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = "white"
}

function draw() {
  background("black");
  bullet.velocityX = speed;

  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5*speed * weight * speed/(thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = "red"
    }
    if(damage < 10){
      wall.shapeColor = "green"
    }
  }
  drawSprites();
}

function hascollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width
    wallLeftEdge = lwall.x
    if(bulletRightEdge >=wallLeftEdge){
      return true;
    }
    return false;
}