import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import sketches from "../sketches.json";
import ProjCard from "components/ProjCard";
import img1 from "assets/img/sketch2.png";

class Dashboard extends Component {
  state = {
    sketches: sketches,
  };

  render() {
    return (
      <div className="content">
        <Row>
          {this.state.sketches.map((entry, i) => (
            <Col lg={4} sm={6} key={i}>
              <ProjCard
                name={entry.name}
                image={entry.image}
                path={entry.path}
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
