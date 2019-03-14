import React from "react";

const BreakEntry = ({ entry }) => {
  return (
    <>
      <div>{entry.time}</div>
      <div>{entry.title}</div>
      <hr />
    </>
  );
};

export default BreakEntry;
