import React from "react";
import { Header, List, Divider, Container } from "semantic-ui-react";
import Legend from "../components/Legend";
import Api from "../Api";

const LocationPage = ({ day, navigate }) => {
  const schedule = Api.getScheduleForDay(day);

  const listContent = (content, index) => {
    if (content.type === "talk") {
      return (
        <List.Item key={content.title} onClick={() => navigate(`${index}`)}>
          <List.Content content={content.time} />
          <List.Content
            content={content.title}
            description={content.speaker.name}
          />
          <List.Content>
            <Legend track={content.track} />
          </List.Content>
        </List.Item>
      );
    } else {
      return (
        <List.Item key={index}>
          <List.Content content={content.time} />
          <List.Content content="Break" />
        </List.Item>
      );
    }
  };

  return (
    <Container>
      <Header as="h2" style={{ marginTop: "1em" }}>
        DE Away Day - {day} day
      </Header>
      <Divider />
      {schedule.map((talk, index) => listContent(talk, index))}
    </Container>
  );
};

export default LocationPage;
