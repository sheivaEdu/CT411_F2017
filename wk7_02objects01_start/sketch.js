//How would you translate lines 2-8  to JSON?
var rectX = 100;
var rectY = 100;
var rectSize = 100;
var rectTop = 0;
var rectBotton = 0;
var rectLeft = 0;
var rectRight = 0;

//HINT: The variable below (line 11) can stay and be used as normal throughout the code (no need to translate this to JSON)
var colR=100;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(100);
    
    //How would you translate lines 21-24  to JSON (how do you pull the values from up top here and override them)?
    var rectTop = rectY;
    var rectBottom = rectY + rectSize;
    var rectLeft = rectX;
    var rectRight = rectX + rectSize;
    
    //How would you translate the variables below to pull values out of JSON above (in lines 27-35)?
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        // HINT: Remember, you still have a "colR" variable up there so no need to translate that below (lines 25 and 27)
        colR = 0;   
    }else{
        colR = 255;   
    }
        fill(colR, 10, 100);
        // But the variables below do need some help/changing
        rect(rectX, rectY, rectSize, rectSize);  
    
}