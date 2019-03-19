import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import LandingPage from "./screens/LandingPage";
import Feedback from "./screens/Feedback";
import { Router } from "@reach/router";
import TalkDetails from "./components/TalkDetails";
import API from "./Api";

class App extends Component {
  render() {
    return (
      <>
        <NavBar cities={API.getCities()} />
        <Router>
          <LandingPage path="/" default />
          <LocationPage path="/day/:city" />
          <TalkDetails path="/day/:city/:talkIndex" />
          <Venue path="/venue/:city" />
          <Venue path="/venue" />
          <Feedback path="/feedback" />
        </Router>
      </>
    );
  }
}

export default App;
