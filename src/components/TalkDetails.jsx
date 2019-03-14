import React from "react";
import { Container, Header, Image, Divider } from 'semantic-ui-react'

const TalkDetails = ({ talk }) => {
  return (
    <>
      <Image src={talk.speaker.img} floated='left' />
      <Header>{talk.title}</Header>
      <div>by {talk.speaker.name}</div>
      <div>{talk.speaker.twitter}</div>
      <div>{talk.speaker.homepage}</div>
      <div>{talk.time}</div>
      <div>{talk.track}</div>
      <Divider />
      <Container text>
        <p>
          {talk.abstract}
        </p>
      </Container>
      <Divider />
      <div>{talk.speaker.bio}</div>
    </>
  );
};

export default TalkDetails;
