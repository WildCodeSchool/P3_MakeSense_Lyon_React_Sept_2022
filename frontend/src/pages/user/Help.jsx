import React from "react";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";
import Logo from "../../assets/logo-makesense.png";
import Return from "../../assets/icons/corner-down-left.svg";

export default function Help() {
  return (
    <div>
      <HeaderCountryChoice />
      <div className="flex justify-center items-center h-32 m-8">
        <img className="h-12" src={Logo} alt="logo MakeSense" />
      </div>
      <div className="flex items-center">
        <img className="m-5" src={Return} alt="arrow return" />
        <p>Back to home</p>
      </div>
      <div className="h-auto w-screen bg-dark-blue ">
        <p className="text-white pt-8 pl-20 text-2xl">Besoin d'aide ?</p>
        <p className="text-flash-yellow pl-20 pt-8 pb-8 text-7xl">
          C'est partie pour l'aide !
        </p>
        <p className="text-white pl-20 pb-20 pr-20 w-4/5 font-thin text-3xl">
          Ici, vous aurez les informations concernant nos mentions légales, les
          principes de propriété intellectuelle et la politique de protection
          des Données personnelles de makesense, et autres réjouissances !
        </p>
      </div>
      <form className="w-3/5 flex flex-col m-auto pt-8">
        <label className="flex flex-col text font-light">
          Prénom, Nom:
          <input
            className="mt-3 border-2 rounded-lg h-10"
            type="text"
            name="name"
            placeholder="John Doe"
          />
        </label>
        <label className="flex flex-col mt-4 text font-light">
          Email :
          <input
            className="mt-3 border-2 rounded-lg h-10"
            type="email"
            name="name"
            placeholder="john.doe@gmail.com"
          />
        </label>
        <label className="flex flex-col mt-4 mb-10 text font-light">
          Message :
          <input
            className="mt-3 border-2 h-20 rounded-lg"
            type="text"
            name="message"
          />
        </label>
        <input
          className="mt-3 mb-4 border-2 border-red-pink w-20 rounded-lg"
          type="submit"
        />
      </form>
    </div>
  );
}
