
function setup(){
   createCanvas(1000, 768); 

}

function draw(){
    
    background(200); 
//// STEP FOUR: DON'T HAVE TO CHANGE MUCH TO ADD MORE LINES! JUST CHANGE THE TEST PARAMETER TO WIDTH  
//    for(var i = 5; i<= width; i+=5){
//        line(i, 0, i, height);     
//    }
//// END STEP FOUR

// Here's what a loop is looking for:
// for(___(1)initialize-the-var___, ___(2)test-keep-running-loop?___, ___(4)update-the-var___){
//      ___(3)code-statement___
//  }

//STEP FIVE: A NESTED LOOP. A LOOP WITHIN A LOOP TO CREATE A GRID OF CIRCLES
    fill(200, 40, 178, 10);
    for(var x = 5; x< width; x+=100){
        for(var y = 5; y < height; y+=100){
            ellipse(x, y, 500, 500);
        }
    }
//END STEP FIVE
    
    
}