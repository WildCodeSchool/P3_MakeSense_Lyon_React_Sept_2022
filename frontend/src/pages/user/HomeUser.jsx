/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import React from "react";
import DecisionCard from "@components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import TimeStepperHome from "@components/user/TimeStepperHome";
import { useNavigate } from "react-router-dom";

export default function Home({ open }) {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-2/3">
      <div className="flex flex-col">
        <p className="pl-14 pt-3 text-xl">Bonjour Madeline</p>
        <p className="pl-14 pt-2 text-x font-extralight">
          Nous sommes le : 13 septembre 2023
        </p>
        <img
          className="w-52 absolute right-24 top-5"
          src={Logo}
          alt="logo make-sense"
        ></img>

        <div className="mt-10 ml-10 h-2/3">
          <div className="flex align-center">
            <h2 className="text-3xl text-red-pink font-extrabold p-4">
              Mes décisions :{" "}
            </h2>
            <button
              type="button"
              onClick={() => navigate("/create-decision")}
              className="w-44 m-4 h-10 bg-red-pink rounded-3xl text-white"
            >
              + Nouvelle décision
            </button>
          </div>
          <div className={open ? "flex flex-wrap " : "flex flex-wrap "}>
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
        <div className="ml-10">
          <h2 className="text-3xl text-red-pink font-extrabold p-4">
            Décisions en cours :{" "}
          </h2>
          <div className="flex w-3/4">
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-20">
        <TimeStepperHome />
      </div>
    </div>
  );
}
