import React from "react";

const TalkEntry = ({ talk }) => {
  return (
    <>
      <div>{talk.time}</div>
      <div>{talk.title}</div>
      <div>by {talk.speaker.name}</div>
      <hr />
    </>
  );
};

export default TalkEntry;
