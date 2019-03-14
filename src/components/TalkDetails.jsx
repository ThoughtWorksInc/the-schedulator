import React from "react";
import { Container, Header, Image, Divider, Button } from 'semantic-ui-react'

const TalkDetails = ({ talk, goBack }) => {
  return (
    <>
      <Button circular icon='arrow left' onClick={goBack}/>
      <Image src={talk.speaker.img} floated='left' />
      <Header>{talk.title}</Header>
      <div>by {talk.speaker.name}</div>
      <div>{talk.speaker.twitter}</div>
      <div>{talk.speaker.homepage}</div>
      <div>{talk.time}</div>
      <div>{talk.track}</div>
      <Divider />
      <Container text>
        <p>{talk.abstract}</p>
      </Container>
      <Divider />
      <Container text>
        <p>{talk.speaker.bio}</p>
      </Container>
    </>
  );
};

export default TalkDetails;
