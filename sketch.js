var player;
var food;
var score = 0;

function setup() 
{
  createCanvas(displayWidth-20,displayHeight-20);

  player = createSprite(750,400,10,10);
  player.shapeColor = "red";

  x = random(50,700);
  y = random(50,700);

  food = createSprite(x,y,10,10);
  food.shapeColor = "white";

  console.log("this is X position"+x);
  console.log("this is Y position" +y);
}

function draw() 
{
  background(0);

  textSize(20);
  fill(255);
  
  text( score,player.x-5,player.y+30);
  camera.position.x = displayHeight/2;
  camera.position.y = player.y;
  if(keyDown("UP_ARROW"))
  {
    player.velocityY=-3;
  } else 
  {
    player.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")) 
  {
    player.velocityY = 3;
  } 
  if(keyDown("LEFT_ARROW")) 
  {
    player.velocityX = -3;
  } else 
  {
    player.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")) 
  {
    player.velocityX = 3;
  } 

  if(player.isTouching(food)) 
  {
    food.x = random(50,700);
    food.y = random(50,700);
    score = score +1;
  }

  

  drawSprites();
}