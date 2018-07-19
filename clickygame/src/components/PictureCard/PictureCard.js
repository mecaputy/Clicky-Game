import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <div className="card">
    <div className="img-container">
    {/* add an onclick */}
      <img alt={props.name} src={props.image} onClick={props.handleCLICK} />
    </div>
  </div>
);
{/* <li className="nav-item">
<a onClick={() => props.handlePageChange("Home")} className="nav-link">
  Home
</a>
</li> */}

export default PictureCard;