var pc,stair,stairGroup;

 function preload(){
   zImage = loadImage("Sunbae game/26.png");
   zImage2 = loadImage("Sunbae game/32.png");
   zImage3 = loadImage("Sunbae game/33.png");
   pcImg  = loadImage("Sunbae game/34.png");
   zBack1 = loadImage("d-day.png");
   zBack2 = loadImage("Sunbae game/4.png");
   zBack3 = loadImage("Sunbae game/7.png");
   zBack4 = loadImage("Sunbae game/8.png");
   log  = loadImage("Sunbae game/35.png");
   gImg  = loadImage("Sunbae game/36.png");




 }
function setup() {
  createCanvas(1350,650);

  pc = createSprite(300, 200, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.7;
  pc.setCollider("rectangle",0,0,200,340);

  ground = createSprite(200,400,800,20);
  ground.addImage(gImg);
  ground.scale = 1;
  ground.setCollider("rectangle",0,0,400,100);


  for(var i =460;i<13050;i=i+250){ 
    stair = createSprite(i,random(30,350),80,10);
  }

  stairGroup = new Group();
  stairGroup.add(stair);


}

function draw() {
  background("black"); 
  background.velocityX=2;

    if(keyDown("up") && pc.y >= 130) {
      pc.velocityY = -18;
      pc.velocityX = 4;   
    }

    
    pc.velocityY = pc.velocityY + 0.8;
   
    stairGroup.shapeColor = "pink";

    stairGroup.debug = true;
    pc.debug = true;
    ground.debug = true;

    if(pc.collide(stairGroup)){
      pc.velocityX = 0;
    }

 // change background
    if(pc.x<4000){
      background(zBack2);
    }
    else if(pc.x>=4000&&pc.x<8000){
      background(zBack3);
    }
    else if (pc.x>=8000&&pc.x<12000){
      background(zBack4);
    }
    else if(pc.x>=12000){
    background(zBack1);
    }

  pc.collide(ground);
  pc.collide(stairGroup);
  

  camera.position.x  = pc.x;
  camera.position.y = pc.y;

  console.log(pc.x,pc.y);

  drawSprites();
  zombies();
}

function zombies(){
  
 if(frameCount%60===0){
   zomb = createSprite(1,460,20,20);
   zomb.velocityX =random(2,6);
   
   var rand = Math.round(random(1,3));
   switch(rand){
   case 1: zomb.addImage(zImage);
      break;
   case 2: zomb.addImage(zImage2); 
      break;
   case 3: zomb.addImage(zImage3);
      break;  
      default:break;  
   }
   zomb.scale = 0.56;
   
 }
}

