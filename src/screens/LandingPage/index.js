import React from "react";
import banner from "./banner.jpeg";
import { Container, Image } from "semantic-ui-react";
import LocationEntries from "../../components/LocationEntries";
import API from "../../Api";
import { Redirect, navigate } from "@reach/router";

const LandingPage = () => {
  const locations = API.getLocations();

  const selectedLocation = localStorage.getItem("selectedLocation");

  let toRender;
  if (selectedLocation) {
    toRender = <Redirect to={`/city/${selectedLocation}`} noThrow />;
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
          <LocationEntries locations={locations} basePath="city" />
        </Container>
      </>
    );
  }

  return toRender;
};

export default LandingPage;
