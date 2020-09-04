import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Sketch from "components/Sketches/SketchThree";

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
    console.log(this.props)
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
