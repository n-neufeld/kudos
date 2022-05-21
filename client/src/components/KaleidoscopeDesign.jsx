import React from "react";
import Sketch from "react-p5";
// import p5 from "react-p5";

export default function KaleidoscopeDesign(props) {
  let symmetry = 6;
  let angle = 360 / symmetry;
  let xoff = 0;

  // let saveButton;
  // let clearButton;

  // <====================> SAVE <====================>
  // function saveKaleidoscope(p5) {
  //   p5.save(`${props.id}.png`);
  // }

  // if (props.saving === true) {
  //   p5.save(`${props.id}.png`);
  // }

  // <====================> CLEAR <====================>
  function clearCanvas(p5) {
    p5.background(250);
  }

  // <====================> SETUP <====================>
  function setup(p5, canvasParentRef) {
    p5.createCanvas(260, 260).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    // p5.saveButton = p5.createButton("save");
    // p5.saveButton.mousePressed(saveKaleidoscope);
    // p5.clearButton = p5.createButton("clear");
    // p5.clearButton.mousePressed(clearCanvas);
    p5.colorMode(p5.HSB, 255, 255, 255);
    // if (props.saving === true) {
    //   p5.save(`${props.id}.png`);
    // }
  }

  // <====================> DRAW <====================>
  function draw(p5) {
    p5.translate(p5.width / 2, p5.height / 2);

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
        p5.stroke(hu, 255, 255, 255);
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

    // if (props.saving == true) {
    //   p5.save(`${props.id}.png`);
    //   // saveKaleidoscope(p5);
    // }
  }

  return <Sketch setup={setup} draw={draw} />;
}
