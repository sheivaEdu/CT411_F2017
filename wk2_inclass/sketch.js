var x;
var col;

function setup() {
    createCanvas(600,400);
    
}

function draw() {
    background(130);
//    noStroke();
    fill(130,6,189, 50);
//    ellipse(circleX, 100, 10, 10);
//    circleX = circleX + 10;
//    ellipse(circleX, 100, 10, 10);
    

//    x= 5;
//    line(x, 0, x, height);
//    x += 5;
//    line(x, 0, x, height);
//    x = x +5;
//    line(x, 0, x, height);
    
    col = map(mouseX, 0, 600, 0, 255);
    
    
    for(var i = 0; i < width; i += 50){
        for(var j = 0; j < height; j += 50){
            fill(0, 0, col, 100);
            ellipse(i, j, 100, 100);
            rect(i, j, 10, 10);
        }
//        line(i, 0, i, height);
    }
    
    
//    x = 1;
//    line(x, 0, x, height);
//
//    x = circleX + 5;
//    line(x, 0, x, height);
//    
    
}