var circX = 0;
var speed = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    
    //draw ball
    ellipse(circX, 300, 100, 100);

    //bounce ball
    if(circX > width || circX < 0){
        speed = speed * -1;
    }

    //move ball
    circX = circX + speed;
    
}