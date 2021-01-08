var space;
var space1;
var rocketship;
var astronautImage;
var rocket, astronaut;
var asteroidImage1, asteroidImage2, asteroidImage3, asteroidImage4;
var life=3;
var asteroidGroup;
var gameState="play";

function preload(){
  space1=loadImage("Space1.jpeg");
  rocketship=loadImage("Rocketship.png");
  astronautImage=loadImage("Astronaut.png");
  asteroidImage1=loadImage("asteroid1.png");
  asteroidImage2=loadImage("asteroid2.png");
  asteroidImage3=loadImage("asteroid3.png");
  asteroidImage4=loadImage("asteroid4.png");
}
function setup() 
 { 

  createCanvas(1500,800);
  background1=createSprite(750,800,1000,800);
  background1.addImage(space1);
  background1.velocityY=10;
  astronaut= createSprite(200,700,75,75);
  rocket= createSprite(750,700,80,64);
  rocket.addImage(rocketship);
  rocket.scale=0.1;
  astronaut.addImage(astronautImage);
  astronaut.scale=0.5;
  asteroidGroup=new Group();
  life=3;

}
function draw() 
{ 
  background(0); 
  if(gameState==="play"){

    if(background1.y>700){
      background1.y=400;
    }
    astronaut.x=rocket.x-5;
    astronaut.y=rocket.y;
    if (keyDown(UP_ARROW)){
      rocket.y=rocket.y-9;
    }
    if (keyDown(DOWN_ARROW)){
      rocket.y=rocket.y+10;
    }
    if (keyDown(RIGHT_ARROW)){
      rocket.x=rocket.x+10;
    }
    if (keyDown(LEFT_ARROW)){
      rocket.x=rocket.x-10;
    }
    spawnAsteroids();
    if(asteroidGroup.isTouching(astronaut)){
      life--;
      console.log(life);
     
      
    }
    
    if(life===0){
      gameState="end";
    }
  }
      drawSprites(); 
    for(var i=0;i<life;i++){
      image(astronautImage,50+i*50,40,50,50);
    }

}

function spawnAsteroids(){
  if (frameCount%75===0){
    var rand=Math.round(random(1,2));
    if (rand===1){
      var asteroid=createSprite(random(50,750),random(3,300),10,10);
      asteroid.velocityX=3;
      asteroid.velocityY=4;
    }
    else {
      var asteroid=createSprite(random(750,1400),random(3,300),10,10);
      asteroid.velocityX=-3;
      asteroid.velocityY=4;
    }
    var rand1= Math.round(random(1,4));
      switch(rand1){
        case 1:asteroid.addImage(asteroidImage1);break;
       case 2:asteroid.addImage(asteroidImage2);break;
       case 3:asteroid.addImage(asteroidImage3);break;
       default: asteroid.addImage(asteroidImage4);break;
     }
    asteroid.scale=0.2;
    asteroid.lifetime=220;
  asteroidGroup.add(asteroid)
  for(var j=0;j<asteroidGroup.length;j++){
    console.log(asteroidGroup.get(j));
      if((asteroidGroup.get(j)).isTouching(astronaut)){
        asteroidGroup.remove(asteroidGroup.get(j));

      }
    }
  }
}



