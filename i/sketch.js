var canvas, backgroundImage;

var gameState = 0;
var playerCount,allPlayers;

var database;

var form, player, game;

var count;

function preload(){
  dog = loadImage("images/Dog.png");
  happy = loadImage("images/happydog.png");
}


function setup(){
  canvas = createCanvas(400,400);
  background("white");
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  count = 20;
}


function draw(){
if(playerCount == 1){
  game.update(1)
  var doogy = createSprite(200,300,20,20);
  doogy.addImage(dog);
  doogy.scale = 0.2
}
if(gameState === 1){
 clear()
 game.play();
}

if(keyDown(UP_ARROW) && player.index!== null){
count = count  + 2
player.update();
doogy.addImage(happy);
  }
  

drawSprites();

text(50)
text("Food remaining = "+count,150,200);
}




