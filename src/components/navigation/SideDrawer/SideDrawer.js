import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      closeDrawer: false
    };
  }

  // onLogoutClick = () => {
  //   // alert("loggig out");
  //   console.log("logging out");
  // };


  render() {
    let aa = localStorage.getItem("backdrop");
    console.log('aa:' + aa);

    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    let isAuthenticated = true;
    let user = { name: "Sarbojit Mukherjee" };
    let navbardisp;
    if (isAuthenticated) {
      navbardisp = (
        <div className="font-color">
          <ul>
            <li>
              <h6>{user.name}</h6>
            </li>
            <li>
              <Link to="/">
                <div className="font-color">&nbsp;MyAccount</div>
              </Link>
            </li>
            <li>

              <button
                onClick={this.props.onLogoutClickApp}
                className="transparent-button-d"
              >
                <div className="font-color">Logout</div>
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      navbardisp = (
        <div>
          <ul>
            <li>
              <Link to="/register" onClick={this.props.onSignupClickApp}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={this.props.onSignupClickApp}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return <nav className={drawerClasses}>{navbardisp}</nav>;
  }
}
export default SideDrawer;

// import React from "react";
// import "./SideDrawer.css";

// const sideDrawer = props => {
//     let drawerClasses = 'side-drawer';
//     if( props.show) {
//         drawerClasses = 'side-drawer open';
//     }

//   return (
//     <nav className={drawerClasses}>
//       <ul>
//         <li>
//           {" "}
//           <a href="/">Products</a>
//         </li>
//         <li>
//           {" "}
//           <a href="/">Other stuff1</a>
//         </li>
//         <li>
//           {" "}
//           <a href="/">Other Stuff2</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default sideDrawer;
