var state = 1;


function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(200);
    noStroke();
    
    if(state == 1){
        fill(255, 10, 180, 50);
        ellipse(mouseX, mouseY, 40, 40);
        rect(100, 100, 100, 100);
    }else if(state == 2){
        fill(10, 100, 250, 50);
        ellipse(mouseX, mouseY, 40, 40);
        ellipse(200, 200, 100, 100);
    }else{
        fill(0, 50);
        ellipse(mouseX, mouseY, 40, 40);
    }
}

function mousePressed(){
    if(state < 3){
        state = state +1;
    }else{
        state = 1;
    }
}