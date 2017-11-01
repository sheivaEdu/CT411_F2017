var counter = 0;
var speed = 2;


function setup(){
  createCanvas(1000, 1000);  
    
}

function draw(){
    background(100);
    translate(400, 400);
    rotate(radians(counter));
    rectMode(CENTER);
    rect(0, 0, 200, 200);
    
    if(counter >-1440){
        counter-= speed;
        //counter+= speed;
    }
}