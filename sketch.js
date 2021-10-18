var path,pathImg
var bird,coin,cone
var wood,runnerboy




function preload(){
     
   pathImg = addImage("backgroundimg.jpg") 
   bird = addAnimation("birds.gif");
   coin = addImage("coin.jpg");
   cone = addImage("cone.jpg")
   wood = addImage("wood.jpg");
   runnerboy = addAnimation("runnerboy.jpg")


}

function setup() {
     createCanvas(800,400)
   
     path = createSprite(800,400)
     path.addImage(pathImg)
     path.scale = 0.1

}

function draw() {
   drawSprites()
}