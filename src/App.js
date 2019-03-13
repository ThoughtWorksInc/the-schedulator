import React, { Component } from 'react';
import './App.css';
import LocationEntry from './components/LocationEntry';
import LocationPage from './screens/LocationPage';
import LocationsWithSchedules from './data/LocationsWithSchedules';

class App extends Component {

    state = {
        locations: LocationsWithSchedules,
        selectedLocation: undefined,
    }

    render() {

        if (this.state.selectedLocation) {
            return <LocationPage
                city={this.state.selectedLocation.city}
                schedule={this.state.selectedLocation.schedule}
            />
        } else {
            return (
                <>
                    {this.state.locations.map(l =>
                        <LocationEntry
                            key={l.city}
                            city={l.city}
                            date={l.date}
                            onClick={() => {
                                this.setState({ selectedLocation: l })
                            }
                            }
                        />
                    )}
                </>
            );
        }
    }
}

export default App;
