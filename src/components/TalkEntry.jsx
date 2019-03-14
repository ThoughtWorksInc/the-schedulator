import React from "react";

const TalkEntry = ({ talk }) => {
  return (
    <>
      <div>{talk.time}</div>
      <div>
        {talk.title} by {talk.speaker}
      </div>
      <div>{talk.abstract}</div>
      <div>{talk.speaker_bio}</div>
    </>
  );
};

export default TalkEntry;
