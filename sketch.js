
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("white");

  if(keyIsDown(UP_ARROW)){
    background("red");
  }
  
  if(keyIsDown(DOWN_ARROW)){
    background("blue")
  }

  if(keyIsDown(RIGHT_ARROW)){
    background("purple")
  }

  if(keyIsDown(LEFT_ARROW)){
    background("orange")
  }

}





