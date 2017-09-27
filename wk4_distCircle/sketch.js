var circX;
var circY;
var circDiameter = 100;
var circRadius = circDiameter/2;
var d;
var redCol = 255;
//// code below ("var isClicked") is commented out as part of more complex "&&" true/false example in the mousePressed function
//var isClicked = false;

function setup(){
    createCanvas(windowWidth, windowHeight); 
    circX = 200;
    circY = 100;
}

function draw(){
    background(redCol, 10, 100);
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    
////code below (if/else statement) is if we're creating a hover state in the draw function instead of using the same code in the mousePressed function 
//    if(d < circRadius){
//        redCol = 0;
//    }else{
//        redCol = 255;
//    }
    
}

function mousePressed(){
    if(d < circRadius){
        redCol = 0;
    }else{
        redCol = 255;
    }
    
////    code below is more complicated example of the code above that uses a true/false variable to click on the circle only to make an interaction happen
//    if(d < circRadius && isClicked == true){
//        redCol = 0;
//        isClicked = !isClicked;
//    }else if (d < circRadius && isClicked == false){
//        redCol = 255;
//        isClicked = !isClicked;
//    }
    
}


