/* eslint-disable react/prop-types */
import React from "react";
import Sidebar from "../../components/user/Sidebar";
import TimeStepperHome from "../../components/user/TimeStepperHome";
import DecisionCard from "../../components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";

export default function Decisions({ open, setOpen }) {
  return (
    <div className="flex h-screen overflow-hidden ">
      <div className="">
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className="w-5/6">
        <div className="flex flex-col">
          <div className="w-auto h-16 ">
            <h1 className="text-center mt-3 text-red-pink text-3xl">
              Décisions
            </h1>
            <img
              className="w-52 absolute right-24 top-4"
              src={Logo}
              alt="logo make-sense"
            />
          </div>
          <button
            type="button"
            className="w-44 ml-20 mt-10 mb-5 h-10 bg-red-pink rounded-3xl text-white"
          >
            + Nouvelle décision
          </button>
          <div className="flex">
            <div className="flex">
              <button
                type="button"
                className=" flex items-center ml-20 mt-5 h-10 pl-2 pr-2 border-2 border-black rounded-3xl text-black"
              >
                <img src={ChevronDown} alt="fleche vers le bas" />
                Toutes les décisions
              </button>
            </div>

            <button
              type="button"
              className="ml-10 mt-5 h-10 pl-2 pr-2 border-2 border-light-blue text-light-blue rounded-3xl"
            >
              Proposées
            </button>
            <button
              type="button"
              className="ml-10 mt-5 h-10 pl-2 pr-2 border-2 border-red-pink text-red-pink rounded-3xl"
            >
              En cours
            </button>
            <button
              type="button"
              className="ml-10 mt-5 h-10 pl-2 pr-2 border-2 border-light-orange text-light-orange rounded-3xl"
            >
              Conflits
            </button>
            <button
              type="button"
              className="ml-10 mt-5 h-10 pl-2 pr-2 border-2 border-light-green text-light-green rounded-3xl"
            >
              Terminées
            </button>
            <button
              type="button"
              className="ml-10 mt-5 h-10 pl-2 pr-2 border-2 border-dark-blue text-dark-blue rounded-3xl"
            >
              Abandonnées
            </button>
          </div>
          <div className=" ml-20 overflow-y-scroll pt-10">
            <div
              className={
                open ? "flex flex-wrap w-8/12" : "flex flex-wrap w-10/12"
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
            <div className="absolute top-64 right-20">
              <TimeStepperHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
