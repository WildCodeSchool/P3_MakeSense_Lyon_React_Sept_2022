/* eslint-disable react/no-array-index-key */
import React from "react";
import TimelineItemDecision from "./TimelineItemDecision";

function TimelineStepperDecision() {
  const timelineData = [
    {
      title: "Title",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];
  return (
    <div className="flex flex-col relative my-10">
      {timelineData.map((data, index) => (
        <TimelineItemDecision data={data} key={index} />
      ))}
    </div>
  );
}

export default TimelineStepperDecision;
