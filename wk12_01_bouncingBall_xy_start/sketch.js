var circX = 0;
var circY = 0;
var speed = 10;
var speedY = 10;


function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    drawBall();
    bounce();
    moveBall();
    
}


function drawBall(){
    //draw ball
    ellipse(circX, circY, 100, 100);
}

function bounce(){
    //bounce ball
    if(circX > width || circX < 0){
        speed = speed * -1;
    }
    if(circY > height || circY < 0){
        speedY = speedY * -1;
    }
}

function moveBall(){
    //move ball
    circX = circX + speed;
    circY = circY + speedY;
}
