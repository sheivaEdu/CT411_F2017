function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    
    
    
    fill(255, 255, 0);
    rectMode(CORNERS);
    rect(100, 100, 50, 50);
    rect(100, 100, 150, 150);
    rect(100, 100, 50, 150);
    rect(100, 100, 150, 50);
    stroke(0, 255, 0);
    strokeWeight(15);
    line(100, 100, 100, 300);
    line(100, 200, 50, 200);
    line(100, 250, 50, 200);
    line(100, 225, 150, 200);
    line(100, 175, 150, 200);
    stroke(0);
    fill(0);
    strokeWeight(5);
    ellipse(100, 100, 50, 50);
    
    
    
}


