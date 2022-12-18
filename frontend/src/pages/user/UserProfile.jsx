import React from "react";
import "../../css/user/Profile.css";
import Randomuser from "../../assets/randomuser.jpg";
import Logo from "../../assets/logo-makesense.png";

export default function UserProfile() {
  return (
    <div className="profilePage w-screen">
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
        {/* <ul className="flex items-center h-20">
          <h1 className="text-center mt-3 text-red-pink text-3xl">
            Mon Profil
          </h1>
          <li className="">
            <img className="w-52" src={Logo} alt="logo" />
          </li>
        </ul> */}
      </header>
      <main className="userProfile-Description mt-20 text-xl flex flex-wrap ml-24 justify-start items-center gap-12">
        <div className="">
          <img
            className="min-w-max"
            src={Randomuser}
            alt="Avatar"
            width={300}
          />
        </div>
        <div className="flex flex-col gap-y-12">
          <p>Prénom : Lester </p>
          <p>Nom : Field </p>
          <p>Localisation : Lakeview</p>
        </div>
        <div className="flex flex-col gap-y-12 pt-6">
          <p>Téléphone : 00 00 00 00 00 </p>
          <p>Email : Lester.Field@example.com </p>
        </div>
      </main>
    </div>
  );
}
