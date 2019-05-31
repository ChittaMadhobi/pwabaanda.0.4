import React, { Component } from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onLogoutClick = () => {
    alert("loggig out");
  };

  render() {
    let isAuthenticated = true;
    let user = { name: "Sarbojit Mukherjee" };

    let navbardisp;
    if (isAuthenticated) {
      navbardisp = (
        <div>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                MyAccount &nbsp;&nbsp;|
              </Link>
            </li>
            <li>
              <button
                onClick={this.onLogoutClick}
                className="transparent-button"
              >
                {user.name} &nbsp;&nbsp;
                {/* <img
                  className="rounded-circle"
                  src={user.avatar}
                  style={{ width: "25px", marginRight: "5px" }}
                  alt={user.name}
                  title="You email should be Gravitar"
                />{" "} */}
                Logout
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      navbardisp = (
        <div>
          <ul >
            <li >
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li >
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <a href="/">Baanda</a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">{navbardisp}</div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar;
