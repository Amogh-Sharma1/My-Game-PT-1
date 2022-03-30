var jet, jetimg
var star, starsimg
var run, runimg
var sky, skyimg




function preload() {
  jetimg = loadImage("Jet.png")
  starsimg = loadImage("Star.png")
  runimg = loadImage("Runaway.jpg") 
  skyimg = loadImage("Sky.jpg")
}
  function setup() {
  createCanvas(windowWidth ,windowHeight);
  sky = createSprite(400, 200,width,height ) 
  sky.addImage(skyimg)
  sky.scale = 10
  sky.velocityY = 10
  
  jet = createSprite(width/2,height/2)
  jet.addImage(jetimg)



}
function draw() {
  background(255,255,255);  
  if(sky.y >height){
    sky.y = height/2
  }

  if(keyDown("D")){
    jet.position.x = jet.position.x + 10
  }
  if(keyDown("A")){
    jet.position.x = jet.position.x - 10
  }
  if(keyDown("S")){
    jet.position.y = jet.position.y - 10
  }
  if(keyDown("W")){
    jet.position.y = jet.position.y + 10
  }
  drawSprites();
}