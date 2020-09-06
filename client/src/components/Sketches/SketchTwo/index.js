import React from "react";
import Sketch from "react-p5";
import "./styles.css";
import fnc from "../functions";

// * AUTHOR: Sayama (https://www.openprocessing.org/user/159668)

//* PALETTE VARS
let palette = "";
let tempPalette
let lineCol
// * SKETCH VARS
const CYCLE = 300;

class SketchBox extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  // When this component mounts
  componentDidMount() {
    console.log(this.props.paletteUrl);
    palette = this.props.paletteUrl;
    tempPalette = fnc.createCols(palette);
    lineCol = tempPalette.splice(1, tempPalette.length - 1);
  }

  render() {
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Sketch
          preload={() => {}}
          /////////////////////////////
          // * SETUP
          setup={(p5, parentRef) => {
            fnc.wavedLinePlane = function (w, h, waveHeightRatio, sw, sc) {
              p5.strokeWeight(sw);
              p5.noStroke();
              p5.fill(tempPalette[0]);
              fnc.wavedPlane(w, h, waveHeightRatio, false);
              p5.stroke(sc);
              p5.noFill();
              fnc.wavedPlane(w, h, waveHeightRatio, true);
            };
            fnc.wavedPlane = function (w, h, waveHeightRatio, isStroke) {
              const cycle = CYCLE / 2;
              const vertNum = 50;
              let fr = (p5.frameCount % cycle) / cycle;
              const span = w / vertNum;

              if (isStroke) p5.beginShape();
              else p5.beginShape(p5.QUAD_STRIP);
              for (let x = -w / 2; x <= w / 2; x += span) {
                let radOffset = p5.map(x, -w / 2, w / 2, 0, p5.TAU * 2);
                let maxWaveH = h * 0.5 * waveHeightRatio;
                let waveH = p5.sin(fr * p5.TAU + radOffset) * maxWaveH;
                let y = waveH - maxWaveH;
                if (!isStroke) p5.vertex(x, h, 0);
                p5.vertex(x, y, 0);
              }

              if (!isStroke) p5.vertex(w / 2, h, 0);
              p5.endShape();
            };
            p5.createCanvas(
              window.innerWidth - 400,
              window.innerHeight - 100,
              p5.WEBGL
            ).parent(parentRef);
          }}
          ////////////////////////////////////
          // * DRAW
          draw={(p5) => {
            p5.randomSeed(0);
            p5.background(tempPalette[0]);
            const cycle = CYCLE;
            let fr = (p5.frameCount % cycle) / cycle;
            let size = p5.min(p5.height, p5.width) * 1;
            let num = 20;
            let span = size / num;
            p5.rotateX(-p5.PI / 5);
            //p5.rotateY(fr*TAU);
            p5.rotateY(-p5.PI / 6);
            let count = 0;
            for (let z = -size / 2; z < size / 2; z += span) {
              let radOffset = p5.map(z, -size / 2, size / 2, 0, p5.TAU);
              let waveRatio = p5.map(p5.abs(z), 0, size / 2, 0.5, 0);
              p5.push();
              p5.translate(0, 0, z);
              fnc.wavedLinePlane(
                size,
                size * 0.5,
                p5.sin(radOffset + fr * p5.TAU) * 0.5,
                10,
                lineCol[p5.int(count + p5.frameCount * 0) % lineCol.length]
              );
              p5.pop();
              count++;
            }
          }}
          ///////////////////////
          mousePressed={() => {}}
        />
      </div>
    );
  }
}

export default SketchBox;
