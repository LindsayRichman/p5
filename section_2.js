//these lines that start with two forward slashes are comments

function setup(){
    createCanvas(640, 480, P2D);
    
}

function draw(){
    background(100,0, 200, 40);
    //fourth parameter is the alpha parameter, adds some trails
    //smaller alpha number will show the outline of movement

    push();
    stroke(255);
    strokeWeight(10);
    fill(random(100, 255), random(255), random(255), 255);
    ellipse(mouseX, mouseY, 100, 100);
    //ellipse(mouseX+200, mouseY+100, 100, 100);
    //you can also use noStroke();
    pop();

    push();
    stroke(255);
    strokeWeight(4);
    line(width/2, height, width/2, height/2);

    push();
    stroke(255);
    strokeWeight(10);
    fill(random(100), random(100), random(100), 255);
    translate(width/2, height/2);
    //for rectangle, divide height and width by 2 and subtract by 50
    //to center the rectangle
    rotate(frameCount *0.5);
    rect(0,0, 100, 50);
    //has the same attributes (stroke and fill) as the ellipse)
    //draw the shape you want in background first
    pop();




    //console.log("Mouse X Position: ", mouseX)
    //console.log(round(random(10)));
    //floor also works, built-in to JS
    //

  
}



