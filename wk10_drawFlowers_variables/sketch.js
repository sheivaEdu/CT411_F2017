function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    
    var x = 100;
    var y = 100;
    var size = 25;
    
    strokeWeight(size/5);
    rectMode(CORNERS);
    rect(x, y, x-size*2, y-size*2);
    rect(x, y, x+size*2, y-size*2);
    rect(x, y, x+size*2, y+size*2);
    rect(x, y, x-size*2, y+size*2);
    stroke(0, 255, 0);
    strokeWeight(size*.85);
    line(x, y, x, y+size*8);
    line(x, y+size*4, x-size*2, y+size*4);
    line(x, y+size*6, x-size*2, y+size*4);
    line(x, y+size*5, x+size*2, y+size*4);
    line(x, y+size*3, x+size*2, y+size*4);
    stroke(0);
    fill(0);
    strokeWeight(size/5);
    ellipse(x, y, size*2, size*2);
    
    
}


