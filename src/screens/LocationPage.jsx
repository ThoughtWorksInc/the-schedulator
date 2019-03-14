import React from "react";
import TalkEntry from "../components/TalkEntry";

const LocationPage = ({ city, schedule }) => {
  return (
    <>
      <div> {city} </div>
      <div>
        <ol>
          {schedule.map(talk => (
            <li>
              <TalkEntry talk={talk} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default LocationPage;
