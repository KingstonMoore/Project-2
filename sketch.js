var canvas;
var backgroundImage;
var bgImg;
var db;
var form, player;
var playerCount,players,gameState,car1,car2;

function preload() {
  bgImg = loadImage("assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  db = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
 background(bgImg)
 if (playerCount===2){
   game.updateState(1)
 }
 if (gameState===1){
   game.play()
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
