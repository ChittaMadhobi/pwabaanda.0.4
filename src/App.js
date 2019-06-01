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

  componentWillMount() {
    localStorage.clear();
    console.log('in app.js componentwillmount');
  }

  drawerToggleClickHandler = () => {
    if (this.state.sideDrawerOpen) {
      localStorage.setItem('backdrop', 'close');
    } else {
      localStorage.setItem("backdrop", "open");
    }
    
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
    let yy = localStorage.getItem('backdrop');
    console.log('drawToggleClickHandler:' + yy);
    if (yy === 'close') {
      this.setState({ sideDrawerOpen: false });
    }
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  onSignupClick = () => {
    console.log("in onSignupClick");
    this.setState({ sideDrawerOpen: false });
    localStorage.removeItem('loggedout')
  };

  onLogoutClick = () => {
    console.log("logging out");
    this.setState({ sideDrawerOpen: false });
    localStorage.setItem('loggedout', 'yes');
    // return <Redirect to="/login" />;
  };

  render() {
    let backdrop;
    let loggedout= localStorage.getItem('loggedout');
    console.log('cloggedout:' + loggedout);

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop CloseSideDrawer={this.backdropClickHandler} />;
    }

    let redirectToLogin;
    if ( loggedout === 'yes') {
      console.log('Loging redirection if possible');
      redirectToLogin = <Login />
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="total-space">
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} onSignupClickApp={this.onSignupClick} onLogoutClickApp={this.onLogoutClick}/>
            <SideDrawer show={this.state.sideDrawerOpen} onSignupClickApp={this.onSignupClick} onLogoutClickApp={this.onLogoutClick}/>
            {backdrop}
            <div className="container">
              <div className="navbar-space">
                <h6 className="text-center">Build Together, Band Together, Bond Together</h6>
              </div>
              {redirectToLogin}
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
