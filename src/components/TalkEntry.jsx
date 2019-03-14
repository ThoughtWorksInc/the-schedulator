import React from "react";
import Legend from "./Legend";

const TalkEntry = ({ entry }) => {
  return (
    <>
      <div>{entry.time}</div>
      <div>{entry.title}</div>
      <div>by {entry.speaker.name}</div>
      <Legend track={entry.track} />
    </>
  );
};

export default TalkEntry;
