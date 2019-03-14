import React from "react";

import { Container, Header, List } from "semantic-ui-react";
import TalkEntry from "../components/TalkEntry";
import TalkDetails from "../components/TalkDetails";

const LocationPage = ({ city, schedule }) => (
  <Container text>
    <Header as="h2">XConf {city} </Header>
    <List>
      {schedule.map(talk => (
        <List.Item>
          <TalkEntry talk={talk} />
          <TalkDetails talk={talk} />
        </List.Item>
      ))}
    </List>
  </Container>
);

export default LocationPage;
