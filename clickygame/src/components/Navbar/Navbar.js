// NEEDS EDITS
import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav>
<ul className="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">{props.title}</a>
  </li>  
  <li className="navbar-text">
    {/* Score {this.state.score} put a function here for changing the score?*/}
  </li>
</ul>
</nav>
);

export default Navbar;