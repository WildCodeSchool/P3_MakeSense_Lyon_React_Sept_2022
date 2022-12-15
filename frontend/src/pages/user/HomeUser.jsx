/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import React from "react";
import DecisionCard from "@components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import "../../css/user/homeUser.css";
import TimeStepperHome from "@components/user/TimeStepperHome";
import { useNavigate } from "react-router-dom";

export default function Home({ open }) {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className="flex flex-col">
        <p className="pl-10 pt-3 text-xl">Bonjour Madeline</p>
        <p className="pl-10 pt-2 text-x font-extralight">
          Nous sommes le : 13 septembre 2023
        </p>

        <div className="logo-home">
          <img src={Logo} alt="logo make-sense"></img>
        </div>
      </div>
      <div className="grid overflow-hidden grid-cols-4 grid-rows-7 gap-3">
        <div className="box col-start-1 col-end-4">
          <div className="flex align-center">
            <h2 className="text-3xl text-red-pink font-extrabold p-4">
              Mes décisions :{" "}
            </h2>
            <button
              type="button"
              onClick={() => navigate("/create-decision")}
              className="pr-3 pl-3 m-4 h-10 bg-red-pink rounded-3xl text-white"
            >
              + Nouvelle décision
            </button>
          </div>
        </div>

        <div className="box col-start-1 col-end-4 ml-5">
          <div
            className={
              open
                ? "grid grid-cols-4 grid-rows-2 gap-4"
                : "grid grid-cols-5 grid-rows-2 gap-4"
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
          </div>
        </div>

        <div className="box col-start-1 col-end-4">
          <h2 className="text-3xl text-red-pink font-extrabold p-3">
            Décisions en cours :{" "}
          </h2>
        </div>
        <div className="box col-start-1 col-end-4 ml-5">
          <div className="grid grid-cols-4">
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
          </div>
        </div>
        <div className="box row-start-1 row-end-4 col-start-4 ">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
