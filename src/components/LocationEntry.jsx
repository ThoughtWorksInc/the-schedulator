import React from 'react';
import { Card } from 'semantic-ui-react'

const { Content, Meta, Header } = Card

const LocationEntry = ({ city, date }) => {
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

export default LocationEntry;