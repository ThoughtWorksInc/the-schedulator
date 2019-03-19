import React from "react";
import { Card } from "semantic-ui-react";

const { Content, Meta, Header } = Card;

const LocationEntry = ({ day, date }) => {
  return (
    <Card fluid style={{ marginTop: "1em" }}>
      <Content>
        <Header>{day}</Header>
        <Meta>
          <span className="date">{date}</span>
        </Meta>
      </Content>
    </Card>
  );
};

export default LocationEntry;
