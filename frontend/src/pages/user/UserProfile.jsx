import React from "react";
import "../../css/user/Profile.css";
import Randomuser from "../../assets/randomuser.jpg";
import Logo from "../../assets/logo-makesense.png";
import DecisionCard from "../../components/user/DecisionCard";

export default function UserProfile({ open }) {
  return (
    <div className="userProfilePage w-screen">
      <header className="userProfile-Header bg-light-grey">
        <div className="flex flex-row items-center justify-beetwen bg-light-grey">
          <div className="flex flex-col">
            <p className="pl-10 pt-3 text-xl">Bonjour Madeline</p>
            <p className="pl-10 text-x font-extralight">
              Nous sommes le : 13 septembre 2023
            </p>
          </div>
          <h1 className="text-2xl text-red-pink pl-40">Profil de Lester</h1>
          <div className="logo-home">
            <img src={Logo} alt="logo make-sense" />
          </div>
        </div>
      </header>
      <main>
        <div className="userProfile-Description mt-14 text-xl flex flex-wrap ml-24 gap-12">
          <div className="">
            <img
              className="min-w-max"
              src={Randomuser}
              alt="Avatar"
              width={300}
            />
          </div>
          <div className="flex flex-col gap-y-12 justify-center">
            <p>
              <span className="text-gray-400"> Prénom :</span> Lester
            </p>
            <p>
              <span className="text-gray-400"> Nom :</span> Field
            </p>
            <p>
              <span className="text-gray-400"> Localisation :</span> Lakeview
            </p>
          </div>
          <div className="flex flex-col gap-y-12 mt-16">
            <p>
              <span className="text-gray-400"> Téléphone :</span> 00 00 00 00 00
            </p>
            <p>
              <span className="text-gray-400"> Email :</span>
              Lester.Field@example.com
            </p>
          </div>
        </div>
        <h2 className="ml-10 mt-10 text-2xl text-gray-400">Mes Décisions</h2>
        <div
          className={
            open
              ? "grid grid-cols-5 grid-rows-2 gap-10 ml-10 mr-10 mt-10"
              : "grid grid-cols-6 grid-rows-2 gap-10 ml-10 mr-10 mt-10"
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
        </div>
      </main>
    </div>
  );
}
