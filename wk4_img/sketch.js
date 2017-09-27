var img;

function preload(){
    img = loadImage("monkey_selfie.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
}

function draw(){
    background(100);
    imageMode(CENTER);
    image(img, width/2, height/2, 600, 600);
}