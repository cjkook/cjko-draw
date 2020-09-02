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
      <a className="simple-text" href="/SketchOne"><div className="content">{props.name}</div></a>
      
    </div>
  );
}

export default EmpCard;
