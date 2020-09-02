import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import API from "../utils/API";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Form from "components/Form";

class UserProfile extends Component {
  state = {
    user: {},
    colorPalettes: ["https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f"],
  };

  // When this component mounts
  componentDidMount() {
    // this.setState({ });
  }

  handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    // console.log(e.target);

    API.getPalette({
      palette: this.state.colorPalettes[0],
      // user:
      // title: titleRef.current.value,
      // body: bodyRef.current.value,
      // author: authorRef.current.value,
    })
      .then((result) => {})
      .catch((err) => console.log(err));
    API.savePalette({
      palette: this.state.colorPalettes[0],
      // user:
      // title: titleRef.current.value,
      // body: bodyRef.current.value,
      // author: authorRef.current.value,
    })
      .then((result) => {})
      .catch((err) => console.log(err));

    
    // Updating the input's state
    // * match up name attribute to state property
    this.setState(
      {
        [name]: value,
      },
      // console.log(this.state)
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col md={12}>
              <Card
                title="Input Palette"
                content={
                  <form className="form">
                    <Form
                      name="color 1"
                      handleInputChange={this.handleInputChange}
                    />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
