import React from "react";

const TalkDetails = ({ talk }) => {
  return (
    <>
      <img src={talk.speaker.img} />
      <div>{talk.title}</div>
      <div>by {talk.speaker.name}</div>
      <div>{talk.speaker.twitter}</div>
      <div>{talk.speaker.homepage}</div>
      <div>{talk.time}</div>
      <div>{talk.track}</div>
      <hr />
      <div>{talk.abstract}</div>
      <hr />
      <div>{talk.speaker.bio}</div>
    </>
  );
};

export default TalkDetails;
