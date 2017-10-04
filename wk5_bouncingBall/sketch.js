var circX = 0;
var speed = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    ellipse(circX, 300, 100, 100);
    if(circX > width || circX < 0){
        speed = speed * -1;
    }
//    if(circX > width || circX < 0){
//        speed = speed *-1;
//    }
    
    circX = circX + speed;
    
}