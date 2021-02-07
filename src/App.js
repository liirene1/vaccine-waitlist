import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PatientCheckIn from "./components/PatientCheckIn";
import WaitingList from "./components/WaitingList";

import './App.css';

const list = [];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/" className="navbar-brand">Check In</Link>
          <Link to="/list" className="nav-link"> Waiting List </Link>

          <Route path="/" exact component={PatientCheckIn} />
          <Route
            path="/list"
            render={() => <WaitingList list={list} /> }
          />
        </div>
      </Router>
    );
  }

}

export default App;
