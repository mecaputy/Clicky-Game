// NEEDS EDITS
import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav className="navbar">
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link" href="/">{props.title}</a>
  </li>  
  <li className="navbar-text">
    Score 
    {/* {{this.state.score} /* put a function here for changing the score? */} 
  </li>
</ul>
</nav>
);

export default Navbar;