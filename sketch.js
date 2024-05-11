var frank,frankImg,frankL,frankR,frankImg2

function preload(){
  frankImg2 = loadImage("Assets/Frank(flipped).png")
  frankImg = loadImage("Assets/Frank.png")
}



function setup() {
  createCanvas(1350,700);

  frankR = createSprite(675,350)
  frankR.addImage(frankImg)
  frankR.scale = 0.85
  
  frankL = createSprite(frankR.x,frankR.y)
  frankL.addImage(frankImg2)
  frankL.scale = 0.85

  
   
}

function draw() 
{
  background(35)

  if(keyDown("up")){
    frankR.y = frankR.y - 6;
  }

  if(keyDown("down")){
    frankR.y = frankR.y + 6;
  }

  if(keyDown("right")){
    frankR.x = frankR.x + 6;
    frankL.visible = false
    frankR.visible = true
    console.log(frankR.x)
  }

  if(keyDown("left")){
    frankL.x = frankL.x - 6;
    console.log(frankL.x)
    frankR.visible = false
    frankL.visible = true
  }

  frankL.x = frankR.x
  frankL.y = frankR.y 

  
  drawSprites()
}




