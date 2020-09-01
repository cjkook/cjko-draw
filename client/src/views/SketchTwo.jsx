import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Sketch from "components/Sketches/SketchTwo/index.js";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Sketch />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
