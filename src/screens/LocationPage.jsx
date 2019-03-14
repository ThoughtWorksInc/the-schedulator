import React from "react";

import { Container, Header, List } from "semantic-ui-react";
import TalkEntry from "../components/TalkEntry";
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
        <List>
          {schedule.map(talk => (
            <List.Item
              key={talk.title}
              onClick={() => {
                this.setState({ selectedTalk: talk });
              }}
            >
              <TalkEntry talk={talk} />
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
