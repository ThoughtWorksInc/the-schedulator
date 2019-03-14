import React from "react";

const Legend = ({ track }) => {
  const color = pickColor(track);
  return <div style={{ backgroundColor: color }}>{track}</div>;
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

export default Legend;
