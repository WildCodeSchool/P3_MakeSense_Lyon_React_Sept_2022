import React from "react";
import "../../css/user/decisionCard.css";
import { NavLink } from "react-router-dom";
// import user from "../../assets/icons/user.png";

export default function DecisionCard() {
  return (
    <div className="border-2 rounded-xl cardsize p-2">
      <NavLink to="/decision">
        <div className="statut" />
        <p className="p-2 text-center">Déménager à Bali pour aller surfer.</p>
        <p className="text-xs font-thin text-center">Date : 14/09/2023</p>
      </NavLink>
    </div>
  );
}
