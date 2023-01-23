import React from "react";
import "../css/user/Authentification.css";
import Connexion from "./user/Connexion";
import HeaderCountryChoice from "../components/user/HeaderCountryChoice";
// import ForgottenPassword from "../components/user/ForgottenPassword";

export default function Authentification() {
  return (
    <section className="auth-Page bg-dark-blue md:bg-white relative h-screen w-screen xl:overflow-hidden">
      <HeaderCountryChoice />
      <Connexion />
    </section>
  );
}
