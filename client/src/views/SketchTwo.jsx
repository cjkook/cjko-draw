import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Sketch from "components/Sketches/SketchTwo";

class Dashboard extends Component {
  // When this component mounts
  componentDidMount() {
    // ! use url to load sketch files
    // let url = window.location.href
    // let slash_index = url.lastIndexOf("/");
    // let fileName = url.slice(slash_index + 1);
    // console.log(fileName)
    // import Sketch from ("components/Sketches/" + fileName);
  }
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