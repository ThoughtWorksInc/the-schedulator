import React from "react";
import { Header, List, Divider, Container } from "semantic-ui-react";
import Legend from "../components/Legend";
import Api from "../Api";

const LocationPage = ({ city, navigate }) => {
  const schedule = Api.getScheduleForCity(city); // locations.find(l => l.city === city).schedule;

  const listContent = content => {
    if (content.type === "talk") {
      return (
        <List.Content
          content={content.title}
          description={content.speaker.name}
        />
      );
    } else {
      return <List.Content content="Break" />;
    }
  };

  return (
    <Container>
      <Header as="h2" style={{ marginTop: "1em" }}>
        XConf {city}{" "}
      </Header>
      <Divider />

      {schedule.map((talk, index) => (
        <List.Item key={talk.title} onClick={() => navigate(`${index}`)}>
          <List.Content content={talk.time} />
          {listContent(talk)}
          <List.Content>
            <Legend track={talk.track} />
          </List.Content>
        </List.Item>
      ))}
    </Container>
  );
};

export default LocationPage;
