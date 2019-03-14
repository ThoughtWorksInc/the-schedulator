import React, { Component } from "react";
import "./App.css";
import LocationEntry from "./components/LocationEntry";
import LocationPage from "./screens/LocationPage";
import LocationsWithSchedules from "./data/LocationsWithSchedules";
import LandingPage from "./screens/LandingPage";

class App extends Component {
  state = {
    locations: LocationsWithSchedules,
    selectedLocation: undefined
  };

  render() {
    if (this.state.selectedLocation) {
      return (
        <LocationPage
          city={this.state.selectedLocation.city}
          schedule={this.state.selectedLocation.schedule}
        />
      );
    } else {
      return (
        <LandingPage
          locations={this.state.locations}
          onClick={location => {
            this.setState({ selectedLocation: location });
          }}
        />
      );
    }
  }
}

export default App;
