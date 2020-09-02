import React from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  palette: "",
  loggedIn: false,
});

export default UserContext;
