import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import SketchBox from "components/SketchOne/index.js";


class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <SketchBox/>
            
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
