import React from "react";
// eslint-disable-next-line import/no-unresolved
import Connexion from "@components/user/Connexion";
import "../css/user/Authentification.css";
import peoplepicture from "../assets/peoplepicture.png";

export default function Authentification() {
  return (
    <section className="auth-Page bg-slate-300 relative h-screen w-screen">
      <Connexion />
      <div className="auth-LeftPicture absolute top-60 -left-0">
        <img src={peoplepicture} alt="PicturePrésentation" width={520} />
      </div>
      <div className="auth-OvaleRed bg-primary-red rounded-full rotate-[150deg] absolute w-52 h-24 right-12 bottom-64"></div>
      <div className="auth-Ovale"></div>
      <div className="auth-textOvale absolute right-44 bottom-32 text-primary-red text-xl ">
        <p className="hover:underline">
          <a href="help"> Besoin d'aides ?</a>
        </p>
        <p className="mt-4 hover:underline">
          <a href="mentions"> Mentions légales</a>
        </p>
      </div>
    </section>
  );
}
