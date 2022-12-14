import React from "react";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import user from "../../assets/icons/user.png";

export default function DecisionDetails() {
  return (
    <div>
      <h1> Décision </h1>
      <h2>Déménager à Bali pour aller surfer toute ma vie</h2>
      <div>
        <p>Proposé par :</p>
        <img src={user} alt="The belle gosse" className="w-10" />
      </div>

      <AccordionDecisionDetails />
    </div>
  );
}
