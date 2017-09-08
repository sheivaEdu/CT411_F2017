// // STEP ONE & TWO: DECLARE THAT VARIABLE!
// var x;

function setup(){
    createCanvas(1024, 768);
}

function draw(){

// // STEP ONE: LET'S DRAW FOUR LINES MANUALLY
//    x = 5;
//    line(x, 0, x, height);
//    x = 10;
//    line(x, 0, x, height);
//    x = 15;
//    line(x, 0, x, height);
//    x = 20;
//    line(x, 0, x, height);
// // END STEP ONE 

// // STEP TWO: LET'S USE THAT VARIABLE AND SOME MATH
//    x = 5;
//    line(x, 0, x, height);
//    x = x + 5;
//    line(x, 0, x, height);
//    x = x + 5;
//    line(x, 0, x, height);
//    //can write "x = x + 5;" as "x+=5;"
//    x += 5;
//    line(x, 0, x, height);
// // END STEP TWO


// // STEP THREE: HOW CAN WE WRITE OUT THE ABOVE AS A LOOP?    
//    for(var i = 5; i<= 20; i+=5){
//        line(i, 0, i, height);     
//    }
// // END STEP THREE
    
// STEP FOUR: DON'T HAVE TO CHANGE MUCH TO ADD MORE LINES! JUST CHANGE THE TEST PARAMETER TO WIDTH  
    for(var i = 5; i<= width; i+=5){
        line(i, 0, i, height);     
    }
// END STEP FOUR

// Here's what a loop is looking for:
// for(___(1)initialize-the-var___, ___(2)test-keep-running-loop?___, ___(4)update-the-var___){
//      ___(3)code-statement___
//  }
    
}