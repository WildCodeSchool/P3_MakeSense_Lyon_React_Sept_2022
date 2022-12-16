import React from "react";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import user from "../../assets/icons/user.png";
import logo from "../../assets/logo-makesense.png";
import TimelineStepperDecision from "../../components/user/TimelineStepperDecision";
import "../../css/user/createDecision.css";

export default function DecisionDetails() {
  return (
    <div className="flex flex-col w-screen">
      <div className="headerDecision">
        <h1> Décision </h1>
        <img src={logo} alt="logo make-sense" />
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
            <AccordionDecisionDetails />
          </div>
        </div>
        <TimelineStepperDecision />
      </div>
    </div>
  );
}
