import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/chat-container">Chat</NavLink>
          </li>
          <li>
            <NavLink to="/pure-redux">Pure Redux</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
