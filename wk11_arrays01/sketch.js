var num = 23;
var nums = [25, 100, 80, 53, 38, 60, 80, 36];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
    fill(255);
    //ellipse(50, height/2, num, num);
    
    for(var i = 0; i < nums.length; i++){
        ellipse(i*100+100, height/2, nums[i], nums[i]);
    }
    
//    ellipse(200, height/2, nums[0], nums[0]);
//    ellipse(300, height/2, nums[1], nums[1]);
//    ellipse(400, height/2, nums[2], nums[2]);
//    ellipse(500, height/2, nums[3], nums[3]);
//    ellipse(600, height/2, nums[4], nums[4]);
}