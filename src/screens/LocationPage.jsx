import React from "react";

import { Container, Header, List, Label } from "semantic-ui-react";
import ScheduleEntry from "../components/TalkEntry";
import TalkDetails from "../components/TalkDetails";

class LocationPage extends React.Component {
  state = { selectedTalk: undefined };

  render() {
    const { city, schedule } = this.props;

    let toRender;
    if (this.state.selectedTalk) {
      toRender = <TalkDetails talk={this.state.selectedTalk} />;
    } else {
      toRender = (
        <List divided verticalAlign='middle'>
          {schedule.map(talk => (
            <List.Item
              key={talk.title}
              onClick={() => {
                this.setState({ selectedTalk: talk });
              }}
            >
              <List.Content>
                <div>{talk.time}</div>
              </List.Content>
              <List.Content>
                <ScheduleEntry entry={talk} />
              </List.Content>
              <List.Content floated='right' verticalAlign="middle">
                <Label horizontal>Track 1</Label>
              </List.Content>
            </List.Item>
          ))}
        </List>
      );
    }

    return (
      <Container text>
        <Header as="h2">XConf {city} </Header>
        {toRender}
      </Container>
    );
  }
}

export default LocationPage;
