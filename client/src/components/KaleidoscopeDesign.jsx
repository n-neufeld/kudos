import React from "react";
import Sketch from "react-p5";
import {} from "p5";

let x = 50;
let y = 50;
export default (props) => {
  let symmetry = 6;
  let angle = 360 / symmetry;
  // let saveButton;
  // let clearButton;
  let xoff = 0;

  // <====================> SAVE <====================>
  function saveKaleidoscope(p5) {
    p5.save("kaleidoscope.png");
  }

  // <====================> CLEAR <====================>
  function clearCanvas(p5) {
    p5.background(250);
  }

  // <====================> SETUP <====================>
  function setup(p5, canvasParentRef) {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    // p5.createCanvas(280, 280).parent(canvasParentRef);
    p5.createCanvas(280, 280).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    // p5.saveButton = createButton("save");
    // p5.saveButton.mousePressed(saveKaleidoscope);
    // p5.clearButton = createButton("clear");
    // p5.clearButton.mousePressed(clearCanvas);
    p5.colorMode(p5.HSB, 255, 255, 255);
  }

  function draw(p5) {
    p5.translate(p5.width / 2, p5.height / 2);
    // p5.background(0);
    // p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      let mx = p5.mouseX - p5.width / 2;
      let my = p5.mouseY - p5.height / 2;
      let pmx = p5.pmouseX - p5.width / 2;
      let pmy = p5.pmouseY - p5.height / 2;

      if (p5.mouseIsPressed) {
        let hu = p5.map(p5.sin(xoff), -1, 1, 0, 400);
        xoff += 0.9;
        p5.stroke(hu, 255, 255, 100);
        let angle = 360 / symmetry;
        for (let i = 0; i < symmetry; i++) {
          p5.rotate(angle);
          let d = p5.dist(mx, my, pmx, pmy);
          let sw = p5.map(d, 0, 8, 8, 1);
          p5.strokeWeight(sw);
          p5.push();
          p5.line(mx, my, pmx, pmy);
          p5.pop();
          p5.push();
          p5.scale(-1, 1);
          p5.line(mx, my, pmx, pmy);
          p5.pop();
        }
      }
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};
