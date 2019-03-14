import React from "react";

import { Container, Header, List, Responsive, Divider } from "semantic-ui-react";
import ScheduleEntry from "../components/ScheduleEntry";
import TalkDetails from "../components/TalkDetails";
import Legend from "../components/Legend";

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
      toRender = (<>
        {/* <Responsive position='right' {...Responsive.onlyComputer} >
        </Responsive>
        <Responsive as={List} divided verticalAlign="middle" {...Responsive.onlyMobile} > */}

          {schedule.map(talk => (
            <List.Item
              key={talk.title}
              onClick={() => {
                this.setState({ selectedTalk: talk });
              }}
            >
              <List.Content content={talk.time} />
              {
                talk.type === "talk" ? 
                <List.Content content={talk.title} description={talk.speaker.name} />
                : <List.Content content="Break" />
              }
              <List.Content>
              <Legend track={talk.track} />
              </List.Content>
            </List.Item>
          ))}


        {/* </Responsive> */}
      </>
      );
    }

    return (
      <>
        <Header as="h2" style={{ marginTop: '1em' }}>XConf {city} </Header>
        <Divider />
        {toRender}
      </>
    );
  }
}

export default LocationPage;
