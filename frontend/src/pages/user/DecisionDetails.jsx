import React, { useState } from "react";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import user from "../../assets/icons/user.png";
import logo from "../../assets/logo-makesense.png";
import TimelineStepperDecision from "../../components/user/TimelineStepperDecision";
import "../../css/user/createDecision.css";

export default function DecisionDetails() {
  const [clickedAnswer4, setClickedAnswer4] = useState(false);

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row items-center justify-beetwen bg-light-grey">
        <div className="flex flex-col">
          <p className="pl-10 pt-3 text-xl">Bonjour Madeline</p>
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : 13 septembre 2023
          </p>
        </div>
        <div className="logo-home">
          <img src={logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10">
        <div className="flex flex-col mr-10">
          <h2 className="text-2xl">
            Déménager à Bali pour aller surfer toute ma vie
          </h2>
          <div>
            <p>Proposé par :</p>
            <img src={user} alt="The belle gosse" className="w-10" />
          </div>
          <div className="flex justify-center">
            <AccordionDecisionDetails
              clickedAnswer4={clickedAnswer4}
              setClickedAnswer4={setClickedAnswer4}
            />
          </div>
        </div>
        <TimelineStepperDecision
          clickedAnswer4={clickedAnswer4}
          setClickedAnswer4={setClickedAnswer4}
        />
      </div>
    </div>
  );
}
