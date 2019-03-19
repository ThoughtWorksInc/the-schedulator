import React from "react";
import banner from "./banner.jpeg";
import { Container, Image } from "semantic-ui-react";
import LocationEntries from "../../components/LocationEntries";
import API from "../../Api";
import { Redirect } from "@reach/router";

const LandingPage = () => {
  const locations = API.getConferenceSchedule();

  console.log(locations);
  const selectedDay = localStorage.getItem("selectedLocation");

  let toRender;
  if (selectedDay) {
    toRender = <Redirect to={`/day/${selectedDay}`} noThrow />;
  } else {
    toRender = (
      <>
        <Image src={banner} />
        <Container text>
          <p>
            XConf is created by technologists, for technologists, who care
            deeply about the craft of software and its ability to make the world
            a better place. This one-day, two-track event gives you in direct
            access to a diverse range of ThoughtWorks senior technologists
            working on our clients’ most complex challenges.
          </p>
          <LocationEntries locations={locations} basePath="day" />
        </Container>
      </>
    );
  }

  return toRender;
};

export default LandingPage;
