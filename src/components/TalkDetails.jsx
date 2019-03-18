import React from "react";
import { Container, Header, Image, Divider, Button } from "semantic-ui-react";
import API from "../Api";

const TalkDetails = ({ city, talkIndex, navigate }) => {
  const talk = API.getTalkAtIndexForCity(city, talkIndex);

  return (
    <>
      <Container text>
        <Button circular icon="arrow left" onClick={() => navigate(`..`)} />
        <Image src={talk.speaker.img} floated="left" />
        <Header>{talk.title}</Header>
        <div>by {talk.speaker.name}</div>
        <div>{talk.speaker.twitter}</div>
        <div>{talk.speaker.homepage}</div>
        <div>{talk.time}</div>
        <div>{talk.track}</div>
        <Divider />
        <p>{talk.abstract}</p>
        <Divider />
        <p>{talk.speaker.bio}</p>
      </Container>
    </>
  );
};

export default TalkDetails;
