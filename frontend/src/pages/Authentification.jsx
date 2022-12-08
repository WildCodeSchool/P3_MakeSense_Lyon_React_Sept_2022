import React from "react";
// eslint-disable-next-line import/no-unresolved
import Connexion from "@components/user/Connexion";
import "../css/user/Authentification.css";
import peoplepicture from "../assets/peoplepicture.png";

export default function Authentification() {
  return (
    <section className="auth-Page relative">
      <Connexion />
      <div className="auth-LeftPicture absolute top-60 -left-0">
        <img src={peoplepicture} alt="PicturePrésentation" width={520} />
      </div>
    </section>
  );
}
