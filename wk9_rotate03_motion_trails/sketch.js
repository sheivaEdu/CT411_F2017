var counter = 0;
var counter2 = 0;
var speed = 2;
var speed2 = 10;


function setup(){
    createCanvas(1000, 1000);  
    //rectMode(CENTER);
}

function draw(){
    background(255, 10, 80, 10);
    
    
    fill(0, 40);
    push();
        translate(400, 400);
        rotate(radians(counter));
        rect(0, 0, 200, 200);
        push();
            fill(255);
            translate(200, 200);
            scale(mouseX/100);
            rotate(radians(counter2));
            rect(0, 0, 200, 200);
        pop();
    pop();
    
    push();
        translate(200,200);
        //scale(-1, 1);
        rect(0, 0, 200, 200);
    pop();
    
    counter+= speed;
    counter2-= speed2;
    
}


function mousePressed(){
    background(255, 10, 80, 10);
}