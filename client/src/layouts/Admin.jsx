import React, { Component, useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import NotificationSystem from "react-notification-system";
import AdminNavbar from "components/Navbars/AdminNavbar";
// import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";

// sidebar image
import image from "assets/img/sidebar2.png";

// user context
import UserContext from "../utils/UserContext";

// auth0
const domainUrl = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri =
  process.env.REDIRECT_URI || "https://localhost:3000";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open",
      name: "",
      email: "",
      palette: "https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f",
      loggedIn: false,
    };
  }

  getRoutes = (routes) => {
    // console.log(routes)
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => (
              <prop.component
                {...props}
                // handleClick={this.handleNotificationClick}
                testProp={this.state.palette}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "cjko-draw";
  };

  componentDidUpdate(e) {
    document.title = "cjko sketchbook";
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        {/* <NotificationSystem ref="notificationSystem" style={style} /> */}
        <Sidebar
          {...this.props}
          routes={routes}
          image={this.state.image}
          color={this.state.color}
          hasImage={this.state.hasImage}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Auth0Provider
            domain={domainUrl}
            client={clientID}
            redirectUri={redirectUri}
          >
            <UserContext.Provider value={this.state}>
              <Switch>{this.getRoutes(routes)} </Switch>
            </UserContext.Provider>
          </Auth0Provider>
        </div>
      </div>
    );
  }
}

export default Admin;
