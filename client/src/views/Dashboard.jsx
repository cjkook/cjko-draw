import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import sketches from "../sketches.json";
import ProjCard from "components/ProjCard";
import img1 from "assets/img/sidebar.png";
import img2 from "assets/img/sketch2.png";
import img3 from "assets/img/sketch3.png";
let images = [img2, img2, img3];

// const images = [img1]
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketches: sketches,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Row>
          {this.state.sketches.map((entry, i) => (
            <Col lg={6} sm={6} key={i}>
              <ProjCard
                name={entry.name}
                image={images[i] || images[0]}
                path={entry.path}
              />
            </Col>
          ))}
        </Row>
        {/* {console.log(this.state.sketches)}
        {this.state.sketches.forEach((entry, i) => (
          
        ))} */}

        
      </div>
    );
  }
}

export default Dashboard;
