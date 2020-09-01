import React from "react";
import Sketch from "react-p5";
import "./styles.css";

class SketchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  state = {};
  y = 0;
  direction = "^";

  render() {
    // let width = document.getElementById("dash-1").style.width;
    // console.log(window);
    const { x } = this.state;
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Sketch
          setup={(p5, parentRef) => {
            p5.createCanvas(window.innerWidth - 400 , window.innerHeight - 100).parent(parentRef);
          }}
          draw={(p5) => {
            p5.background(0);
            p5.fill(255, this.y * 1.3, 0);
            p5.ellipse(this.state.x / 2, this.y, 50);
            if (this.y > p5.height ) this.direction = "";
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
