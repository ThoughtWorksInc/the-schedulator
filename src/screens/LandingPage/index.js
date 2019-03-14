import React, { Component } from 'react'
import LocationEntry from '../../components/LocationEntry';
import banner from './banner.jpeg'
import { Container, Menu, Image } from 'semantic-ui-react'

class LandingPage extends Component {
  render() {
    const {onClick, locations} = this.props

    const locationEntries = locations.map(l => <LocationEntry
      key={l.city}
      city={l.city}
      date={l.date}
      onClick={() => onClick(l)}
  />)

    return (
      <>
        <Image src={banner} />
        <Container text>
          <p>XConf is created by technologists, for technologists, who care deeply about the craft of software and its ability to make the world a better place. This one-day, two-track event gives you in direct access to a diverse range of ThoughtWorks senior technologists working on our clients’ most complex challenges.</p>
        </Container>
        {locationEntries}
      </>
    );
  }
}

export default LandingPage;
