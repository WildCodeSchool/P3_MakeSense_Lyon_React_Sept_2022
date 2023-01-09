/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import "../../css/user/homeUser.css";
import circle from "../../assets/icons/circle.svg";
import { useCurrentUserContext } from "../../context/UserContext";

export default function TimeStepperHome() {
  const { token } = useCurrentUserContext();
  const [decisions, setDecisions] = useState([]);
  const dateFormat = (date) => {
    return date.slice(2, 10);
  };
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      post: "GET",
      headers: myHeader,
    };

    fetch("http://localhost:5000/decision/last", requestOptions)
      .then((response) => response.json())
      .then((result) => setDecisions(result))
      .catch((error) => console.warn("error", error));
  }, [token]);

  console.warn(decisions);
  return (
    <div className="timeStepper flex items-center justify-center">
      <ul className="flex flex-col w-60">
        {decisions.slice(0, 5).map((data, index) => (
          <li key={index} className="grid grid-cols-6">
            <div className="text-sm text-gray-500 text-right col-span-2">
              {dateFormat(data.date_decision_creation)}
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
