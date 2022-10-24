let red;
let green;

var words = ["YES!", "NO!"];
var colors = ['red','green'];
var index = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  red = color(255,200,200);
  green = color(200,255,200);
  
  
    const firebaseConfig = {
    apiKey: "AIzaSyA9Rjl3IVUyuCAG7x6-DDjq63bePQFqh-k",
    authDomain: "man-in-the-house.firebaseapp.com",
    projectId: "man-in-the-house",
    storageBucket: "man-in-the-house.appspot.com",
    messagingSenderId: "951086785725",
    appId: "1:951086785725:web:72467acffc4f71cd2803d4",
    measurementId: "G-FY20SSC7PT"
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  consol.log(firebase);
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
