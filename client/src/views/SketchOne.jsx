import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Sketch from "components/Sketches/SketchOne/index.js";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Sketch paletteUrl={this.props.palette} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
