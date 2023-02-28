let moire;
let bg;

function setup(){
   createCanvas(windowWidth, windowHeight);
   console.log("it works!");


}


function preload(){
  moire = loadImage('moire4_data/moire.png');
  bg = loadImage('moire4_data/background.png');

}

function draw(){

   background(bg);

   fill(255);

     image(moire, (mouseX-windowWidth), 0, (2*windowWidth), windowHeight);
}
