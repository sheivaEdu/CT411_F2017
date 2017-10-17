var sound;

function preload(){
    sound = loadSound("MeowMeow.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(100);
}

function mousePressed(){
    sound.play();
}





