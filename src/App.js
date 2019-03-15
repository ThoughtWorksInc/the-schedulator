import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import { default as locations } from "./data/LocationsWithSchedules";
import LandingPage from "./screens/LandingPage";
import { Router } from "@reach/router";
import TalkDetails from "./components/TalkDetails";

class App extends Component {
  render() {
    const locationNames = locations.map(location => location.city);

    return (
      <>
        <NavBar cities={locationNames} />
        <Router>
          <LandingPage locations={locations} path="/" default />
          <LocationPage locations={locations} path="/city/:city" />
          <TalkDetails locations={locations} path="/city/:city/:talkIndex" />
          <Venue locations={locations} path="/venue/:city" />
          <Venue locations={locations} path="/venue" />
        </Router>
      </>
    );
  }
}

export default App;
