/* eslint-disable react/destructuring-assignment */
import React from "react";
import "../../css/user/decisionCard.css";
import { NavLink } from "react-router-dom";
// import user from "../../assets/icons/user.png";

export default function DecisionCard(valueDetailsDecision) {
  const convertDateFromApi = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2].split("T")[0];

    return `${day}/${month}/${year}`;
  };

  // function to convert status of decision from API to class name
  const statusForClassname = () => {
    if (valueDetailsDecision.valueDetailsDecision.status_decision) {
      return valueDetailsDecision.valueDetailsDecision.status_decision
        .replace(" ", "")
        .toLowerCase();
    }
    return "encours";
  };

  return (
    <div className="border-2 rounded-xl cardsize p-2">
      {valueDetailsDecision.valueDetailsDecision ? (
        <NavLink
          to={`/decision/${valueDetailsDecision.valueDetailsDecision.id}`}
        >
          <div className={statusForClassname()} />
          <p className="p-2 text-center">
            {valueDetailsDecision.valueDetailsDecision.title}
          </p>
          <p className="text-xs font-thin text-center">
            {convertDateFromApi(
              valueDetailsDecision.valueDetailsDecision.date_decision_creation
            )}
          </p>
        </NavLink>
      ) : null}
    </div>
  );
}
