import React, { useContext } from "react";
import Sketch from "react-p5";
import "./styles.css";
import fnc from "../functions";

// * AUTHOR: Sayama (https://www.openprocessing.org/user/159668)

//* PALETTE VARS
let palette = "";
// * SKETCH VARS
// user context
// const { palette } =
// useContext(UserContext) ||
// "https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c";

export default (props) => {
  const setup = (p5, parentRef) => {
    palette = fnc.createCols(props.paletteUrl.testProp);

    fnc.bendLineTwoSide = function (radius, length) {
      fnc.bendedLine(radius, length);
      p5.rotateZ(p5.PI);
      fnc.bendedLine(radius, length);
    };

    fnc.bendedLine = function (radius, length) {
      const radiusStep = p5.PI / 20;
      const edgePosX = radius * 3;
      p5.noFill();
      p5.beginShape();
      p5.vertex(length / 2, 0, 0);
      for (let rad = -p5.PI * 0.5; rad <= p5.PI * 1.5; rad += radiusStep) {
        let x = p5.map(rad, -p5.PI * 0.5, p5.PI * 1.5, edgePosX, -edgePosX);
        p5.vertex(x, p5.pow((p5.sin(rad) + 1) / 2, 2.5) * radius);
      }
      p5.vertex(-length / 2, 0, 0);
      p5.endShape();
    };
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(
      window.innerWidth - 400,
      window.innerHeight - 100,
      p5.WEBGL
    ).parent(parentRef);

    //ortho
    let dep = p5.max(p5.width, p5.height);
    p5.ortho(
      -p5.width / 2,
      p5.width / 2,
      -p5.height / 2,
      p5.height / 2,
      -dep * 3,
      dep * 3
    );
  };

  const draw = (p5) => {
    p5.background(0);
    p5.strokeWeight(p5.min(p5.width, p5.height) * 0.005);
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.PI / 6);

    const cycle = 100;
    let frameRatio = (p5.frameCount % cycle) / cycle;
    let size = p5.min(p5.width, p5.height) * 0.75;
    let vSphRadius = size / 6;
    let vSphZ = frameRatio * (size + vSphRadius * 2) - size / 2 - vSphRadius;
    let count = 0;

    for (let z = -size / 2; z < size / 2; z += size / 50) {
      p5.stroke(palette[count % palette.length]);
      let dist = p5.abs(vSphZ - z);
      let radius =
        dist > vSphRadius ? 0 : p5.sin(p5.acos(dist / vSphRadius)) * vSphRadius;
      p5.push();
      p5.translate(0, 0, z);
      if (count % 2 == 0) p5.rotateZ(p5.PI / 2);
      if (radius > 0) fnc.bendLineTwoSide(radius, size);
      else p5.line(-size / 2, 0, 0, size / 2, 0, 0);
      p5.pop();
      count++;
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
