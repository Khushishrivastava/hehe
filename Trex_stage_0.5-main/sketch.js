var ash, coin,doggo,ground,mudpoo;
var groundImage;

function preload(){
  ash = loadAnimation("ash.gif");
  groundImage = loadImage("spooky boo.jpg")
}

function setup(){
  createCanvas(900,900);
  
  // creating trex
  ash = createSprite(50,160,20,50);
  ash.addAnimation("running","ash.gif");
  edges = createEdgeSprites();
   ground = createSprite("400,400,20,30")
   ground.addImage("groundmoving",groundImage)
  ground.velocityX = -10
   //adding scale and position to trex
  ash.scale = 0.5;
  ash.x = 50
}


function draw(){
  //set background color 
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //logging the y position of the trex
  console.log(ash.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    ash.velocityY = -10;
  }
  
  ash.velocityY = ash.velocityY + 0.5;
  
  //stop trex from falling down
  ash.collide(edges[3])
  drawSprites();
}



///mam here is a msg for you i have only added some characters as you said i will later add other characters tooo but for now only s
//submitting like this only submitting player and bg not adding others
