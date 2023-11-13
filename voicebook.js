let mic;
let chosen;
let pages = [];
const pause = 1000;
let startPause = 0;

function preload() {
  let page1 = loadImage('images/page01.png');
  let page2 = loadImage('images/page02.png');
  let page3 = loadImage('images/page03.png');
  let page4 = loadImage('images/page04.png');
  pages = [page1,page2,page3,page4];

}

function setup(){
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
  
   createCanvas(windowWidth, windowHeight);
   


   console.log("it works!");

   chosen = random(pages);

}

function draw() {

   background(255,250,200);
  let vol = mic.getLevel();
    tint(255, 10+vol*800);
   textSize(136);
    imageMode(CENTER);
   image(chosen,windowWidth/2,windowHeight/2,windowWidth/1.2, windowWidth/1.2*(1080/1920));

   if(millis()<startPause+pause){
      //donothing
   } else {
      startPause=millis();
      chosen=random(pages);
   }
}
function mousePressed() {
  userStartAudio();
}
