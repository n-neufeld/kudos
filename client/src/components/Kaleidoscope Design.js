let symmetry = 6;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let xoff = 0;

function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
  background(250);
  saveButton = createButton('save');
  saveButton.mousePressed(saveSnowflake);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  colorMode(HSB, 255, 255, 255);
}

function saveSnowflake() {
  save('snowflake.png');
}

function clearCanvas() {
  background(250);
}

function draw() {
  translate(width / 2, height / 2);
  
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;
  
  
  if (mouseIsPressed) {
    let hu = map(sin(xoff), -1,1,0,360);
    xoff += 0.1;
    stroke(hu, 255, 255, 100);
    let angle = 360 / symmetry;
    for(let i = 0; i < symmetry; i++) {  
      rotate(angle);
      let d = dist(mx, my, pmx, pmy);
      let sw = map(d, 0, 8, 8, 1);
      strokeWeight(sw);
      push();
      line(mx, my, pmx, pmy);
      pop();
      push();
      scale(-1,1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
  }

}