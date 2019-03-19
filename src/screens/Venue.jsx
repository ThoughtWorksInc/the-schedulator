import React from "react";
import { Container } from "semantic-ui-react";
import LocationEntries from "../components/LocationEntries";

const data = {
  manchester: {
    address: 'Etc. Venues London, EC3M 4PB',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.720206655386!2d-0.08807197047735797!3d51.51578251854584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1b5d03c23441ae!2setc.venues+155+Bishopsgate!5e0!3m2!1sen!2sde!4v1552992333255',
    venueInfo: `
      We have exclusive access to the venue, directly into the City Lounge where Registration will take place. Please arrive using this entrance: etc.venues, 43-44 Crutched Friars EC3N 2HH. Please note: this is also our FIRE EXIT route out of the building, assembly point in Savage Gardens.
      The closest train station is Fenchurch Street station (5 minswalk).The nearest tube stop is Tower Hill (5 mins walk) and Bank, Aldgate & Monument (15 mins walk). The nearest DLR station is Tower Gateway (7 minute walk). The following buses stop at the venue: 35, 47, 48, 149
    `
  },
  munich: {
    address: 'ThoughtWorks Deutschland GmbH, Bothestraße 11, 81675 München',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.6711136175322!2d11.61116531582472!3d48.13586555925881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7f51afd86f%3A0xfaf06857a11ceba6!2sThoughtWorks+Deutschland+GmbH!5e0!3m2!1sen!2sde!4v1552990221984',
    venueInfo: `
      We have exclusive access to the venue, directly into the City Lounge where Registration will take place. Please arrive using this entrance: etc.venues, 43-44 Crutched Friars EC3N 2HH. Please note: this is also our FIRE EXIT route out of the building, assembly point in Savage Gardens.
      The closest train station is Fenchurch Street station (5 minswalk).The nearest tube stop is Tower Hill (5 mins walk) and Bank, Aldgate & Monument (15 mins walk). The nearest DLR station is Tower Gateway (7 minute walk). The following buses stop at the venue: 35, 47, 48, 149
    `
  },
  barcelona: {
    address: 'La Sagrada Familia, Carrer de Mallorca, 401, 08013 Barcelona, Spain',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.6395378916495!2d2.1721671156598865!3d41.4036339029504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sLa+Sagrada+Familia!5e0!3m2!1sen!2sde!4v1552990301694',
    venueInfo: `
      We have exclusive access to the venue, directly into the City Lounge where Registration will take place. Please arrive using this entrance: etc.venues, 43-44 Crutched Friars EC3N 2HH. Please note: this is also our FIRE EXIT route out of the building, assembly point in Savage Gardens.
      The closest train station is Fenchurch Street station (5 minswalk).The nearest tube stop is Tower Hill (5 mins walk) and Bank, Aldgate & Monument (15 mins walk). The nearest DLR station is Tower Gateway (7 minute walk). The following buses stop at the venue: 35, 47, 48, 149
    `
  }
}

const Venue = ({ city }) => {
  if (city) {
    const {address, mapUrl, venueInfo} = data[city.toLowerCase()];
    const paragraphs = venueInfo.match(/.+\b/g).map(paragraph => <p>{paragraph.trim()}</p> )

    return (
      <Container>
        {address}
        {paragraphs}
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            src={mapUrl}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </Container>
    );
  } else {
    return <LocationEntries basePath="venue" />;
  }
};

export default Venue;
