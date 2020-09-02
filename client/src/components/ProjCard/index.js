import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function EmpCard(props) {
  // console.log(props)
  return (
    <div className="card">
      <div className="img-container">
        <Link to={"/admin"+props.path}><img alt={props.name} src={props.image} /></Link>
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <Link to={"/admin"+props.path}><div>{props.name}</div></Link>
      
      
    </div>
  );
}

export default EmpCard;
