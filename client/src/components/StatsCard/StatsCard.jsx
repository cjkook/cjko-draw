import "./styles.css";
import React, { Component } from "react";
import { Row } from "react-bootstrap";

export class StatsCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <h3>
            {this.props.name}
          </h3>
          <Row>
            {/* <img alt={this.props.name}  className="photo" src={this.props.image} /> */}
          </Row>
          <Row>
            <a href={this.props.page}>{this.props.text}</a> 
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.date}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
