import React from "react";
import {
  Container,
  Header,
  Image,
  Divider,
  Button,
  List
} from "semantic-ui-react";
import API from "../Api";
import Legend from "./Legend";

const TalkDetails = ({ city, talkIndex, navigate }) => {
  const talk = API.getTalkAtIndexForCity(city, talkIndex);

  const twitterHandle = talk.speaker.twitter ? (
    <List.Item key="twitter">
      <List.Icon name="twitter" color="blue" />
      <List.Content>
        <a href={`https://twitter.com/${talk.speaker.twitter}`} target="_blank">
          {talk.speaker.twitter}
        </a>
      </List.Content>
    </List.Item>
  ) : null;

  const homepage = talk.speaker.homepage ? (
    <List.Item key="homepage">
      <List.Icon name="bookmark outline" color="grey" />
      <List.Content>
        <a href={talk.speaker.homepage} target="_blank">
          {talk.speaker.homepage}
        </a>
      </List.Content>
    </List.Item>
  ) : null;

  return (
    <>
      <Container text>
        <Button
          circular
          icon="arrow left"
          onClick={() => navigate(`..`)}
          floated="right"
        />
        <Header>
          <Image circular src={talk.speaker.img} floated="left" />
          {talk.title}

          <Header.Subheader>
            <List horizontal>
              <List.Item key="by">by {talk.speaker.name}</List.Item>
              <List.Item key="track">
                <Legend track={talk.track} />
              </List.Item>
            </List>
          </Header.Subheader>
        </Header>

        <List>
          <List.Item key="time">
            <List.Icon name="clock outline" color="orange" />
            <List.Content>{talk.time}</List.Content>
          </List.Item>
          {twitterHandle}
          {homepage}
        </List>

        <Divider horizontal>Abstract</Divider>
        <p>{talk.abstract}</p>
        <Divider horizontal>Speaker bio</Divider>
        <p>{talk.speaker.bio}</p>
      </Container>
    </>
  );
};

export default TalkDetails;
