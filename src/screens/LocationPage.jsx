import React from "react";

import { Container, Header, List, Label } from "semantic-ui-react";
import ScheduleEntry from "../components/ScheduleEntry";
import TalkDetails from "../components/TalkDetails";

class LocationPage extends React.Component {
  state = { selectedTalk: undefined };

  render() {
    const { city, schedule } = this.props;

    let toRender;
    if (this.state.selectedTalk) {
      toRender = (
        <TalkDetails
          talk={this.state.selectedTalk}
          goBack={() => {
            this.setState({ selectedTalk: undefined });
          }}
        />
      );
    } else {
      toRender = (
        <List divided verticalAlign="middle">
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
