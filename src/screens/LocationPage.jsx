import React from "react";

import { Container, Header, List } from "semantic-ui-react";
import TalkEntry from "../components/TalkEntry";

const LocationPage = ({ city, schedule }) => (
  <Container text>
    <Header as="h2">XConf {city} </Header>
    <List>
      {schedule.map(talk => (
        <List.Item>
          <TalkEntry talk={talk} />
        </List.Item>
      ))}
    </List>
  </Container>
);

export default LocationPage;
