var bg,bgImg;
var Mech;
var zombie, zombieImg; 

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img


function preload(){
  
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")

  //zombieImg = loadAnamation("Zombies/Zombie1.png", "Zombies/zombie2.png", "Zombies/Zombie3.png", "Zombies/Zombie4.png", "Zombies/Zombie5.png", "Zombies/Zombie5.png")
  MechImg = loadImage("Mech/Mech1.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20) 
  bg.addImage(bgImg) 
  bg.scale = 1.1
  
   Mech = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   Mech.addImage("Mech1", MechImg)
   Mech.scale = 0.3



 
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
  

}
