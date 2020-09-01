import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import sketches from "./sketches.json";

class Dashboard extends Component {
  state = {
    sketches: sketches,
  };

  render() {
    return (
      <div className="content" id="dash-1">
        {console.log(this.state.sketches)}
        <Grid fluid></Grid>
      </div>
    );
  }
}

export default Dashboard;
