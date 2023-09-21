function setup() {
    createCanvas(1000,1000);
    background("white");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }