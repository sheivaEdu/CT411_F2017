var rectX = 100;
var rectY = 100;
var rectSize = 100;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var colR = 255;
var buttonClicked = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(200);
    
    
        fill(colR, 10, 100);
        rect(rectX, rectY, rectSize, rectSize);
      
}

function mousePressed(){
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && buttonClicked==false){
        colR = 0;
        buttonClicked = !buttonClicked;
    }else if (mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && buttonClicked==true){
        colR = 255; 
        buttonClicked = !buttonClicked;
    }
    
}

