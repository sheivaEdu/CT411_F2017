var satisfyFont;

function preload(){
    satisfyFont = loadFont("Satisfy-Regular.ttf");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
//    textFont("Arial");
    textFont(satisfyFont);
    textSize(60);
}

function draw(){
    background(200);
    fill(255, 0, 0);
    text("Hi, this is awesome! What if this is a longer sentence? Then what?", mouseX, mouseY, 200, 800);
    
    
}