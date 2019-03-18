import React from "react";
import { Link } from "@reach/router";
import LocationEntry from "./LocationEntry";
import API from "../Api";

const LocationEntries = ({ basePath }) => {
  const locations = API.getLocations();
  const locationEntries = locations.map(l => (
    <Link to={`/${basePath}/${l.city}`} key={l.city}>
      <LocationEntry city={l.city} date={l.date} />
    </Link>
  ));
  return <>{locationEntries}</>;
};

export default LocationEntries;
