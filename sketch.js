//Create variables here
var dog, dogImage, happyDog
var database, FoodS
var foodStock
function preload()
{
	//load images here
  dogImage = loadImage ("images/dogImg.png")
  happyDog = loadImage ("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(500, 500);
  dog = createSprite(250,300)
  dog.addImage(dogImage)
  dog.scale = 0.15

foodStock = database.ref("Food")
foodStock.on("value", function(data){
  FoodS = data.val()
})
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
 writeStock(FoodS)
 dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
fill("white")
stroke("black")
textSize(13)
text("Food Remaining: "+FoodS, 170,200)
}
function writeStock(x) {
  if(x <= 0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    Food:x
  })
}


