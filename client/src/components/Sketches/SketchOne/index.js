import React from "react";
import Sketch from "react-p5";
import "./styles.css";
import fnc from "../functions";

//* PALETTE VARS
let palette = "";
let tempPalette
let lineCol

class SketchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      // palette: createCols(temp)
    };
  }
  componentDidMount() {
    // console.log(this.props.paletteUrl);
    palette = this.props.paletteUrl;
    tempPalette = fnc.createCols(palette);
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  y = 0;
  direction = "^";

  render() {
    const { x } = this.state;
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Sketch
          setup={(p5, parentRef) => {
            p5.createCanvas(
              window.innerWidth - 400,
              window.innerHeight - 100
            ).parent(parentRef);
          }}
          draw={(p5) => {
            let rand = Math.floor(p5.random(tempPalette.length))
            console.log(tempPalette)
            // p5.background(0);
            p5.fill(tempPalette[rand]);
            p5.ellipse(this.state.x, this.y, p5.random(80));
            
            p5.ellipse(p5.width-this.state.x, this.y, p5.random(80));
            if (this.y > p5.height) this.direction = "";
            if (this.y < 0) {
              this.direction = "^";
            }
            if (this.direction === "^") this.y += 8;
            else this.y -= 4;
            // console.log(this.state);
          }}
        />
      </div>
    );
  }
}

export default SketchBox;
