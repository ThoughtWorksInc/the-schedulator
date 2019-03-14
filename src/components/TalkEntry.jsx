import React from "react";

const TalkEntry = ({ entry }) => {
  return (
    <>
      <div>{entry.title}</div>
      <div>by {entry.speaker.name}</div>
    </>
  );
};

export default TalkEntry;
