//How would you translate lines 2-8  to JSON?

var rect1 = {
    x: 100,
    y: 100,
    size: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0  
};

var rect2 = {
    x: 600,
    y: 100,
    size: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0  
};

//var rectX = 100;
//var rectY = 100;
//var rectSize = 100;
//var rectTop;
//var rectBotton;
//var rectLeft;
//var rectRight;

//HINT: The variable below (line 11) can stay and be used as normal throughout the code (no need to translate this to JSON)
var colR=100;
var colG=40;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(100);
    
    //How would you translate lines 21-24  to JSON (how do you pull the values from up top here and override them)?
    rect1.top = rect1.y;
    rect1.bottom = rect1.y + rect1.size;
    rect1.left = rect1.x;
    rect1.right = rect1.x + rect1.size;
    
    rect2.top = rect2.y;
    rect2.bottom = rect2.y + rect2.size;
    rect2.left = rect2.x;
    rect2.right = rect2.x + rect2.size;
    
    //How would you translate the variables below to pull values out of JSON above (in lines 27-35)?
    if(mouseX > rect1.left && mouseX < rect1.right && mouseY > rect1.top && mouseY < rect1.bottom){
        // HINT: Remember, you still have a "colR" variable up there so no need to translate that below (lines 25 and 27)
        colR = 0;   
    }else{
        colR = 255;   
    }
    
    if(mouseX > rect2.left && mouseX < rect2.right && mouseY > rect2.top && mouseY < rect2.bottom){
        // HINT: Remember, you still have a "colR" variable up there so no need to translate that below (lines 25 and 27)
        colG = 0;   
    }else{
        colG = 255;   
    }
    
    
    
    fill(colR, 10, 100);
        // But the variables below do need some help/changing
    rect(rect1.x, rect1.y, rect1.size, rect1.size);  
    fill(100, colG, 100);
    rect(rect2.x, rect2.y, rect2.size, rect2.size);
    
}