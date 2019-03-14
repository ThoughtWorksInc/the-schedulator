import React from "react";

const Legend = ({ track }) => {
  const color = pickColor(track);
  return <div style={{ backgroundColor: color }}>{track}</div>;
};

const TalkEntry = ({ entry }) => {
  return (
    <>
      <div>{entry.time}</div>
      <div>{entry.title}</div>
      <div>by {entry.speaker.name}</div>
      <Legend track={entry.track} />
      <hr />
    </>
  );
};

const BreakEntry = ({ entry }) => {
  return (
    <>
      <div>{entry.time}</div>
      <div>{entry.title}</div>
      <hr />
    </>
  );
};

const ScheduleEntry = ({ entry }) => {
  let toRender;
  if (entry.type === "break") {
    toRender = <BreakEntry entry={entry} />;
  } else {
    toRender = <TalkEntry entry={entry} />;
  }
  return toRender;
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

export default ScheduleEntry;
