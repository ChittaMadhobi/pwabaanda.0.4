import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
// import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux"; // Provides the app with a store. This wraps around everything (as below)
import store from "./store";

import "./App.css";

import SideDrawer from "./components/navigation/SideDrawer/SideDrawer";
import Toolbar from "./components/navigation/Toolbar/Toolbar";
import Backdrop from "./components/navigation/Backdrop/Backdrop";
import Footer from "./components/navigation/Footer/Footer";
import Login from './components/entrance/Login';
import Register from './components/entrance/Register';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop CloseSideDrawer={this.backdropClickHandler} />;
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="total-space">
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="container">
              <div className="navbar-space">
                <h6 className="text-center">Build Together, Band Together, Bond Together</h6>
              </div>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
