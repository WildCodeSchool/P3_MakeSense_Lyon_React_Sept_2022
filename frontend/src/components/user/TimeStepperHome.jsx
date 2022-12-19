/* eslint-disable react/no-array-index-key */
import React from "react";
import "../../css/user/homeUser.css";
import circle from "../../assets/icons/circle.svg";

export default function TimeStepperHome() {
  const timelineData = [
    {
      title: "Title number 1",
      date: "3 Mars",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "20 septembre",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "3 Mars",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "15 avril",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "3 Mars",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "3 Mars",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Title number 2",
      date: "30 octobre",
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];
  return (
    <div className="timeStepper flex items-center justify-center">
      <ul className="flex flex-col w-60">
        {timelineData.slice(0, 5).map((data, index) => (
          <li key={index} className="grid grid-cols-6">
            <div className="text-sm text-gray-500 text-right col-span-2">
              {data.date}
            </div>

            <div className="mx-2 flex flex-col items-center col-span-1">
              <div>
                <img
                  src={circle}
                  alt=""
                  className="h-2 w-2 
            text-white"
                  z-index="12"
                />
              </div>
              <div>
                <div className="w-0.5 h-14 bg-dark-blue" />
              </div>

              <div className="" />
            </div>

            <p className="text-sm text-dark-blue col-span-3">{data.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
