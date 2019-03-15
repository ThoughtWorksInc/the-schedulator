import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import LocationsWithSchedules from "./data/LocationsWithSchedules";
import LandingPage from "./screens/LandingPage";
import { Router } from "@reach/router";
import TalkDetails from "./components/TalkDetails";

class App extends Component {
  constructor(props) {
    super(props);
    const cityName = localStorage.getItem("selectedLocation");
    const selectedLocation = this.findLocationByName(cityName);

    this.state = {
      selectedLocation,
      locations: LocationsWithSchedules
    };
  }

  findLocationByName = name =>
    LocationsWithSchedules.find(location => location.city === name);

  render() {
    const { locations, selectedLocation } = this.state;
    const locationNames = locations.map(location => location.city);
    const handleCityClick = cityName => {
      const selectedLocation = this.findLocationByName(cityName);
      localStorage.setItem("selectedLocation", cityName);
      this.setState({ selectedLocation });
    };
    const handleHomeClick = cityName => {
      this.setState({ selectedLocation: undefined });
    };

    return (
      <>
        <NavBar cities={locationNames} />
        <Router>
          {/* <LandingPage locations={locations} default /> */}
          <LandingPage locations={locations} path="/" default />
          <LocationPage locations={locations} path="/city/:city" />
          <TalkDetails locations={locations} path="/city/:city/:talkIndex" />
          <Venue locations={locations} path="/venue" />
          <Venue locations={locations} path="/venue/:city" />
        </Router>
      </>
    );
  }
}

export default App;
