/* eslint-disable react/no-array-index-key */
import React from "react";
import "../../css/user/homeUser.css";
import circle from "../../assets/icons/circle.svg";

function TimelineStepperDecision({ setClickedAnswer4 }) {
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

  const handleToggle4 = () => {
    setClickedAnswer4((prev) => !prev);
  };

  return (
    <div className="w-60 h-fit border border-red-pink p-4 rounded-xl flex justify-center flex-col">
      <div className="flex items-center justify-center">
        <ul className="flex flex-col w-50">
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
      <p className="mt-5">Personnes expertes</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <p>Personnes concernées</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <button
        type="button"
        onClick={handleToggle4}
        className="underline text-dark-blue"
      >
        Voir les avis
      </button>
      <button
        type="button"
        onClick={handleToggle4}
        className="pr-3 pl-3 mt-4 h-10 bg-red-pink rounded-3xl text-white"
      >
        Donner mon avis
      </button>
    </div>
  );
}

export default TimelineStepperDecision;
