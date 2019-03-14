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
    let toRender;
    if (this.state.selectedLocation) {
      toRender = (
        <LocationPage
          city={this.state.selectedLocation.city}
          schedule={this.state.selectedLocation.schedule}
        />
      );
    } else {
      toRender = (
        <LandingPage
          locations={this.state.locations}
          onClick={location => {
            this.setState({ selectedLocation: location });
          }}
        />
      );
    }

    return toRender;
  }
}

export default App;
