import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  // FormGroup,
  // ControlLabel,
  // FormControl,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";
import Form from "components/Form";
import LoginPage from "components/LoginPage/LoginPage"

class UserProfile extends Component {
  state = {
    user: {}, // ! 
  };

  // When this component mounts
  componentDidMount() {
    // this.setState({ });
  }

  

  render() {
    return (
      <div className="content">
        <Grid>
        <Row>
        {/* //! login logic */}
          <LoginPage></LoginPage>
        </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Input Palette"
                content={
                  <form className="form">
                    <Form
                      name="palette"
                      handleInputChange={this.props.handleInputChange}
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
