import React, { Component } from 'react';
import './App.css';
import LocationEntry from './components/LocationEntry';

class App extends Component {

    state = {
        locations: [
            {
                city: 'Manchester',
                date: 'July 04 2019'
            },
            {
                city: 'Munich',
                date: 'July 05 2019'
            },
            {
                city: 'Barcelona',
                date: 'July 06 2019'
            },
        ],
        selectedLocation: undefined,
    }

    render() {
        return (
            <>
                {
                    this.state.locations.map(l =>
                        <LocationEntry
                            key={l.city}
                            city={l.city}
                            date={l.date}
                            onClick={
                                () => this.setState({ selectedLocation: l.city })
                            }
                        />
                    )
                }
            </>
        );
    }
}

export default App;
