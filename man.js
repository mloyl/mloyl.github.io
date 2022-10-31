let red;
let green;

var words = ["YES!", "NO!"];
var colors = ['red','green'];
var index = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  red = color(255,200,200);
  green = color(200,255,200);
}

function draw() {

  background(colors[index]);

  fill(255);
  textSize(136);
  textAlign(CENTER);
  text(words[index], width/2, height/2.5);

}

function mousePressed() {
  index = index+1;
  if (index == words.length) {
    index = 0;
  }

}
