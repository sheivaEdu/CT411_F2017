var img;
//var imageSize;
//var imageRadius;

function preload(){
    img = loadImage("monkey_selfie.png");
}

function setup(){
    createCanvas(800,600);
//    imageSize = 300;
//    imageRadius = imageSize/2;
    
}

function draw(){
    background(100);
    imageMode(CENTER);
    image(img, width/2, height/2, imageSize, imageSize); 
    
}

function mousePressed(){

}