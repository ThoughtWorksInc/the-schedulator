import React from "react";
import { Container } from "semantic-ui-react";
import LocationEntries from "../components/LocationEntries";

const Venue = ({ locations, city }) => {
  if (city) {
    return (
      <Container>
        Etc. Venues London, EC3M 4PB
        <p>
          We have exclusive access to the venue, directly into the City Lounge
          where Registration will take place. Please arrive using this entrance:
          etc.venues, 43-44 Crutched Friars EC3N 2HH. Please note: this is also
          our FIRE EXIT route out of the building, assembly point in Savage
          Gardens.
        </p>
        <p>
          The closest train station is Fenchurch Street station (5 minswalk).The
          nearest tube stop is Tower Hill (5 mins walk) and Bank, Aldgate &
          Monument (15 mins walk). The nearest DLR station is Tower Gateway (7
          minute walk). The following buses stop at the venue: 35, 47, 48, 149
        </p>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Bothestra%C3%9Fe%2011%2081675%20M%C3%BCnchen+(Thoughtworks)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
        </div>
      </Container>
    );
  } else {
    return <LocationEntries locations={locations} basePath="venue" />;
  }
};

export default Venue;
