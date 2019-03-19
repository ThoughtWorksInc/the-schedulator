import React from "react";
import { Container } from "semantic-ui-react";
import LocationEntries from "../components/LocationEntries";
import API from "../Api";
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
        <Container text>
          <LocationEntries locations={locations} basePath="day" />
        </Container>
      </>
    );
  }

  return toRender;
};

export default LandingPage;
