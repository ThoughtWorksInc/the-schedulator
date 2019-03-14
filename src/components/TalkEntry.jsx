import React from "react";

const Legend = ({ track }) => {
  const color = pickColor(track);
  return <div style={{ "background-color": color }}>{track}</div>;
};

const TalkEntry = ({ talk }) => {
  return (
    <>
      <div>{talk.time}</div>
      <div>{talk.title}</div>
      <div>by {talk.speaker.name}</div>
      <Legend track={talk.track} />
      <hr />
    </>
  );
};

const pickColor = track => {
  switch (track) {
    case "track 1":
      return "turquoise";
    case "track 2":
      return "orange";
    default:
      return "none";
  }
};

export default TalkEntry;
