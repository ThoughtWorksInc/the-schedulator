import React from "react";
import { Container, Header, List } from 'semantic-ui-react'

const LocationPage = ({ city, schedule }) => <Container text>
    <Header as='h2'>XConf {city} </Header>
    <List>
        {schedule.map(s => <List.Item> {s.title} </List.Item>)}
    </List>
</Container>


export default LocationPage;
