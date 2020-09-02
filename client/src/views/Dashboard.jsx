import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import sketches from "./sketches.json";
import ProjCard from "components/ProjCard";
import img1 from "assets/img/sketch2.png"
import image from "assets/img/sidebar2.png";
console.log(img1)
class Dashboard extends Component {
  state = {
    sketches: sketches,
  };

  render() {
    return (
      <div className="content" id="dash-1">
        <Row>
          {this.state.sketches.map((entry, i) => (
            <Col lg={4} sm={6}>
            <ProjCard
                name={entry.name}
                image={img1}
                path={entry.path}
                // home={entry.location}
                // network={entry.network}
                key={i}
                // handleDelete={() => this.handleDelete(entry.id)}
              />
              </Col>
          ))}
        </Row>
        {/* {console.log(this.state.sketches)}
        {this.state.sketches.forEach((entry, i) => (
          
        ))} */}
        <Grid fluid></Grid>
      </div>
    );
  }
}

export default Dashboard;
