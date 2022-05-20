import React from "react";
import Sketch from "react-p5";
import {
  createCanvas,
  angleMode,
  DEGREES,
  background,
  createButton,
  colorMode,
  HSB,
  save,
  translate,
  width,
  height,
  mouseX,
  mouseY,
  pmouseX,
  pmouseY,
  mouseIsPressed,
  map,
  sin,
  stroke,
  pop,
  push,
  rotate,
  dist,
  strokeWeight,
  line,
  scale,
} from "p5";

let x = 50;
let y = 50;
export default (props) => {
  let symmetry = 6;
  let angle = 360 / symmetry;
  // let saveButton;
  // let clearButton;
  let xoff = 0;

  // <====================> SAVE <====================>
  function saveKaleidoscope () {
    save("kaleidoscope.png");
  };

  // <====================> CLEAR <====================>
  function clearCanvas () {
    background(250);
  };

  // <====================> SETUP <====================>
  function setup (p5, canvasParentRef) {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    // p5.createCanvas(280, 280).parent(canvasParentRef);
    p5.createCanvas(280, 280).parent(canvasParentRef);
    p5.angleMode(DEGREES);
    p5.background(250);
    // p5.saveButton = createButton("save");
    // p5.saveButton.mousePressed(saveKaleidoscope);
    // p5.clearButton = createButton("clear");
    // p5.clearButton.mousePressed(clearCanvas);
    p5.colorMode(HSB, 255, 255, 255);
  };

  function draw (p5) {
    p5.translate(width / 2, height / 2);
    // p5.background(0);
    // p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let mx = mouseX - width / 2;
      let my = mouseY - height / 2;
      let pmx = pmouseX - width / 2;
      let pmy = pmouseY - height / 2;

      if (mouseIsPressed) {
        let hu = map(sin(xoff), -1, 1, 0, 360);
        xoff += 0.1;
        stroke(hu, 255, 255, 100);
        let angle = 360 / symmetry;
        for (let i = 0; i < symmetry; i++) {
          rotate(angle);
          let d = dist(mx, my, pmx, pmy);
          let sw = map(d, 0, 8, 8, 1);
          strokeWeight(sw);
          push();
          line(mx, my, pmx, pmy);
          pop();
          push();
          scale(-1, 1);
          line(mx, my, pmx, pmy);
          pop();
        }
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
