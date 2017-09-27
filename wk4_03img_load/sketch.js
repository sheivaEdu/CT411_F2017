var img;


function preload(){
    img = loadImage("monkey_selfie.png");
}

function setup(){
    createCanvas(800,600);
    
}

function draw(){
    background(100);
    imageMode(CENTER);
    image(img, width/2, height/2, imageSize, imageSize); 
    
}
