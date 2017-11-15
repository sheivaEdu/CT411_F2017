var pups = ["Rex", "Dexter", "Patches", "Scruffy", "Scraggle"];
var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    textSize(60);
    text("click to see some puppy names!", 50, height/2);
}

function draw() {
  
}


function mousePressed(){
    background(255);
    fill("#000000");
    textSize(60);
    text(pups[index], 50, height/2);
    index = index +1;
    
    if(index == pups.length){
        index = 0;
    }
    
}