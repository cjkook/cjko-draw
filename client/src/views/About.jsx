import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Card,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  state = {};

  // When this component mounts
  componentDidMount() {}

  handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    console.log(e.target);

    // Updating the input's state
    // * match up name attribute to state property
    this.setState(
      {
        [name]: value,
      },
      this.handleFilterName // pass function without calling
    );
  };

  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col md={8}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.Lorem ipsum dolor sit
//                     amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua. Ut enim ad
//                     minim veniam, quis nostrud exercitation ullamco laboris nisi
//                     ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                     reprehenderit in voluptate velit esse cillum dolore eu
//                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                     proident, sunt in culpa qui officia deserunt mollit anim id
//                     est laborum.Lorem ipsum dolor sit amet, consectetur
//                     adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                     et dolore magna aliqua. Ut enim ad minim veniam, quis
//                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                     commodo consequat. Duis aute irure dolor in reprehenderit in
//                     voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     Excepteur sint occaecat cupidatat non proident, sunt in
//                     culpa qui officia deserunt mollit anim id est laborum.Lorem
//                     ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                     irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     cupidatat non proident, sunt in culpa qui officia deserunt
//                     mollit anim id est laborum.</p>
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
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


// <UserCard
//                 bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
//                 avatar={avatar}
//                 name="Mike Andrew"
//                 userName="michael24"
//                 description={
//                   <span>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum.Lorem ipsum dolor sit
//                     amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua. Ut enim ad
//                     minim veniam, quis nostrud exercitation ullamco laboris nisi
//                     ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                     reprehenderit in voluptate velit esse cillum dolore eu
//                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                     proident, sunt in culpa qui officia deserunt mollit anim id
//                     est laborum.Lorem ipsum dolor sit amet, consectetur
//                     adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                     et dolore magna aliqua. Ut enim ad minim veniam, quis
//                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                     commodo consequat. Duis aute irure dolor in reprehenderit in
//                     voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     Excepteur sint occaecat cupidatat non proident, sunt in
//                     culpa qui officia deserunt mollit anim id est laborum.Lorem
//                     ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                     irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     cupidatat non proident, sunt in culpa qui officia deserunt
//                     mollit anim id est laborum.
//                     <br />
//                   </span>
//                 }
//                 socials={
//                   <div>
//                     <Button simple>
//                       <i className="fa fa-facebook-square" />
//                     </Button>
//                     <Button simple>
//                       <i className="fa fa-twitter" />
//                     </Button>
//                     <Button simple>
//                       <i className="fa fa-google-plus-square" />
//                     </Button>
//                   </div>
//                 }
//               />