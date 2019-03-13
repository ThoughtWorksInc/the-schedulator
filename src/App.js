import React, { Component } from 'react';
import './App.css';
import { Card } from 'semantic-ui-react'

const { Content, Meta, Header } = Card

const LocaltionEntry = ({ city, date }) => {
    return (
        <Card onClick={() => console.log(city)} >
            <Content>
                <Header>{city}</Header>
                <Meta>
                    <span className='date'>{date}</span>
                </Meta>
            </Content>
        </Card>
    )
}

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
        ]
    }

    render() {
        return (
            <>
                {
                    this.state.locations.map(l =>
                        <LocaltionEntry
                            key={l.city}
                            city={l.city}
                            date={l.date}
                        />
                    )
                }
            </>
        );
    }
}

export default App;
