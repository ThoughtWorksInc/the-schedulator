import React from "react";
import BreakEntry from "./BreakEntry";
import TalkEntry from "./TalkEntry";

const ScheduleEntry = ({ entry }) => {
  let toRender;
  if (entry.type === "break") {
    toRender = <BreakEntry entry={entry} />;
  } else {
    toRender = <TalkEntry entry={entry} />;
  }
  return toRender;
};

export default ScheduleEntry;
