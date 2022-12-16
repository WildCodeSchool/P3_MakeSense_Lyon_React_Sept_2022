import React from "react";
import "../../css/user/decisionCard.css";
import { NavLink } from "react-router-dom";
// import user from "../../assets/icons/user.png";

export default function DecisionCard() {
  return (
    <div className="border-2 w-40 h-40 rounded-xl drop-shadow-[0 35px 35px rgba(0,0,0,0.25)] m-4">
      <NavLink to="/decision">
        <div className="statut m-2" />
        <p className="p-3 text-center">Déménager à Bali pour aller surfer.</p>
        <p className="text-xs font-thin text-center">Date : 14/09/2023</p>
        {/* <img src={user} alt="avatar" /> */}
      </NavLink>
    </div>
  );
}
