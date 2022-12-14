import React from "react";
import "../css/user/Authentification.css";
import Inscription from "../components/user/Inscription";
import Connexion from "../components/user/Connexion";
import ForgottenPassword from "../components/user/ForgottenPassword";
import HeaderCountryChoice from "../components/user/HeaderCountryChoice";

export default function Authentification() {
  return (
    <section className="auth-Page bg-white relative h-screen w-screen overflow-hidden">
      <HeaderCountryChoice />

      <Connexion />
      {/* <Inscription /> */}
      {/* <ForgottenPassword /> */}
    </section>
  );
}
