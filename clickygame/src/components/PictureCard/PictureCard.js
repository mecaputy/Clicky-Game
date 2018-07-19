import React from "react";

import Col from "../Col";
import "./PictureCard.css";

const PictureCard = props => (
  <Col size="md-3" className="click-item">
    <div className="img-container">
    {/* add an onclick */}
      <img className="click-item" alt={props.name} src={props.image} onClick={props.handleCLICK} />
    </div>
  </Col>
  
);


export default PictureCard;