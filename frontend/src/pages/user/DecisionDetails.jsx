import React from "react";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import user from "../../assets/icons/user.png";
import logo from "../../assets/logo-makesense.png";
import TimeStepperDecision from "../../components/user/TimeStepperDecision";

export default function DecisionDetails() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row">
        <h1> Décision </h1>
        <img
          className="w-52 absolute right-24 top-5"
          src={logo}
          alt="logo make-sense"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col mr-10">
          <h2>Déménager à Bali pour aller surfer toute ma vie</h2>
          <div>
            <p>Proposé par :</p>
            <img src={user} alt="The belle gosse" className="w-10" />
          </div>
          <div className="flex justify-center">
            <AccordionDecisionDetails />
          </div>
        </div>
        <TimeStepperDecision />
      </div>
    </div>
  );
}
