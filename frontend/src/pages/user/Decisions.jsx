/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import TimeStepperHome from "../../components/user/TimeStepperHome";
import DecisionCard from "../../components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";

export default function Decisions({ open }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-hidden">
      <div className="w-auto h-16 ">
        <h1 className="text-center mt-3 text-red-pink text-3xl">Décisions</h1>
        <img
          className="w-52 absolute right-24 top-4"
          src={Logo}
          alt="logo make-sense"
        />
      </div>
      <button
        onClick={() => navigate("/create-decision")}
        type="button"
        className=" ml-10 w-44 mt-5 mb-5 h-10 bg-red-pink rounded-3xl text-white"
      >
        + Nouvelle décision
      </button>
      <div className="flex">
        <div className="flex">
          <button
            type="button"
            className=" ml-10 flex items-center mt-3 h-10 pl-2 pr-2 border-2 border-black rounded-3xl text-black"
          >
            <img src={ChevronDown} alt="fleche vers le bas" />
            Toutes les décisions
          </button>
        </div>

        <button
          type="button"
          className="ml-10 mt-3 h-10 pl-2 pr-2 border-2 border-light-blue text-light-blue rounded-3xl"
        >
          Proposées
        </button>
        <button
          type="button"
          className="ml-10 mt-3 h-10 pl-2 pr-2 border-2 border-red-pink text-red-pink rounded-3xl"
        >
          En cours
        </button>
        <button
          type="button"
          className="ml-10 mt-3 h-10 pl-2 pr-2 border-2 border-light-orange text-light-orange rounded-3xl"
        >
          Conflits
        </button>
        <button
          type="button"
          className="ml-10 mt-3 h-10 pl-2 pr-2 border-2 border-light-green text-light-green rounded-3xl"
        >
          Terminées
        </button>
        <button
          type="button"
          className="ml-10 mt-3 h-10 pl-2 pr-2 border-2 border-dark-blue text-dark-blue rounded-3xl"
        >
          Abandonnées
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-14">
        <div className="box col-start-1 col-end-4">
          <div
            className={
              open
                ? "grid grid-cols-4 grid-rows-2 ml-10 mr-10 "
                : "grid grid-cols-5 grid-rows-2 ml-10 mr-10 "
            }
          >
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
          </div>
        </div>
        <div className="box">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
