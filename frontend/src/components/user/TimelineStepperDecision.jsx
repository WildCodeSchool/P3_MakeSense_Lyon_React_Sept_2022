/* eslint-disable react/no-array-index-key */
import React from "react";

import circle from "../../assets/icons/circle.svg";

function TimelineStepperDecision() {
  const timelineData = [
    {
      title: "Title number 1",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "March 03 2017",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];

  return (
    <div className="flex flex-col relative my-10">
      <ul>
        {timelineData.slice(0, 5).map((data, index) => (
          <li key={index}>
            <div className="relative pb-8">
              {index !== timelineData.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <img
                    src={circle}
                    alt=""
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">{data.title}</p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <div>{data.date}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineStepperDecision;
