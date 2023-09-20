//this is a p5 sketch about time
let chosen;
let words = ["Ghosts doing vigorous jazz hands", "The bachelorette season finale", "A tiny horse", "Parrots eating carrots","Self portrait of the artist as an old lady","An uncomfortable chair","Becoming a blueberry","Crab rangoon","A caterpillar on a date", "A disappointing birthday party"]

let ugly
let graphik

function preload() {
  graphik = loadFont('critter_data/Graphik-Semibold.otf');
  ugly = loadFont('critter_data/uglyhandwriting.ttf');
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   console.log("it works!");
   chosen = random(words);
}

function draw() {

   background(255,205,5);
   fill(0,0,0);
   textAlign(CENTER);

   textFont(ugly);
   textSize(72);
   text(chosen,width/2,height/3);

   textFont(graphik);
   textSize(36);
   text('Refresh the page to pick a new Art Card!',width/2,2*height/3);
}
