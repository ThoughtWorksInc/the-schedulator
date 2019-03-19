import React from "react";
import { Link } from "@reach/router";
import LocationEntry from "./LocationEntry";
import API from "../Api";

const LocationEntries = ({ basePath }) => {
  const locations = API.getConferenceSchedule();
  const locationEntries = locations.map(l => (
    <Link
      to={`/${basePath}/${l.day}`}
      key={l.day}
      onClick={() => localStorage.setItem("selectedLocation", l.day)}
    >
      <LocationEntry day={l.day} date={l.date} />
    </Link>
  ));
  return <>{locationEntries}</>;
};

export default LocationEntries;
