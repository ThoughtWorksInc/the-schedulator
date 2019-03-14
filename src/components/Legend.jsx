import React from "react";
import { Label } from "semantic-ui-react";

const Legend = ({ track }) => {
  const color = pickColor(track);
  return (
    <Label horizontal color={color}>
      {track}
    </Label>
  );
};

const pickColor = track => {
  switch (track) {
    case "track 1":
      return "teal";
    case "track 2":
      return "orange";
    default:
      return "none";
  }
};

export default Legend;
