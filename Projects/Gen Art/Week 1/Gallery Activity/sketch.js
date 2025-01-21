let bw1;
let gridSize = 200;
let xT,yT;

function preload(){
  bw1 = loadImage("img/fingersalt.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // image(bw1,0,0,700,700);
  

  let xT = 1000;
  let yT = 200;
   for(x = 0; x < bw1.width; x += gridSize) {
       for (y = 0; y < bw1.height; y += gridSize) {
         copy(bw1,x,y,xT++,yT,x,y,gridSize,gridSize);
        bw1.resize(windowWidth,windowHeight);
       }
    }
 
}
