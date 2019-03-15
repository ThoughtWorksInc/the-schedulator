import React from "react";
import { Link } from "@reach/router";
import LocationEntry from "./LocationEntry";

const LocationEntries = ({ locations, basePath }) => {
  const locationEntries = locations.map(l => (
    <Link to={`/${basePath}/${l.city}`} key={l.city}>
      <LocationEntry city={l.city} date={l.date} />
    </Link>
  ));
  return <>{locationEntries}</>;
};

export default LocationEntries;
