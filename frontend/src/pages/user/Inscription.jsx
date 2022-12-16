import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/user/Inscription.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";

function Inscription() {
  return (
    <div className="inscriptionPage bg-white relative h-screen w-screen overflow-hidden">
      <HeaderCountryChoice />
      <NavLink to="/">
        <img
          className="p-6"
          src="/src/assets/logo-makesense.png"
          alt="logo"
          width={350}
        />
        {/* <div className="connexion-YellowRectangle" /> */}
      </NavLink>

      {/* <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
        <div className="w-full bg-dark-blue rounded-lg max-w-xl shadow-1 relative ">
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              INSCRIPTION
            </h1>
            <p className="text-2xl text-center">Créez votre compte </p>
            <form className=" index space-y-8" action="#">
              <div className="flex justify-center flex-row gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Prénom et Nom :
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Adresse e-mail :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center flex-row gap-5">
                <div>
                  <label
                    htmlFor="password"
                    className="text-white block text-lg font-medium mb-2"
                  >
                    Mot de passe :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="pseudo@exemple.com"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-white block text-lg font-medium mb-2"
                  >
                    Confirmation Mot de passe :
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-center ">
                  <button
                    type="submit"
                    className=" text-white hover:bg-red-pink font-medium rounded-lg text-2xl mt-3 mb-3 mr-8 px-5 py-4 text-center border hover:scale-105 duration-300"
                  >
                    S'ENREGISTRER{" "}
                  </button>
                </div>
                <NavLink to="/">
                  <p className="text-center text-white font-medium text-primary-600 hover:underline hover:text-flash-yellow text-sm">
                    Déja membre ?
                  </p>
                </NavLink>
              </div>
              <p className="text-center">
                Votre enregistrement a bien été prise en compte, vous allez
                recevoir un mail de confirmation afin de valider votre
                inscription !
              </p>
            </form>
          </div>
        </div>
      </div> */}
      <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
        <div className="w-full bg-dark-blue rounded-lg max-w-xl shadow-1 relative ">
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              INSCRIPTION
            </h1>
            <p className="text-2xl text-center">Créez votre compte </p>
            <form className=" index space-y-8" action="#">
              <div className="flex justify-center flex-row gap-5">
                <div>
                  <label
                    htmlFor="text"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Prénom :
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Nom :
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex justify-center flex-row gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-white block text-lg font-medium mb-2"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="adresse@examplecom"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-white block text-lg font-medium mb-2"
                  >
                    Mot de passe :
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-center ">
                  <button
                    type="submit"
                    className=" text-white hover:bg-red-pink font-medium rounded-lg text-2xl mt-3 mb-3 mr-8 px-5 py-4 text-center border hover:scale-105 duration-300"
                  >
                    S'ENREGISTRER{" "}
                  </button>
                </div>
                <NavLink to="/">
                  <p className="text-center text-white font-medium text-primary-600 hover:underline hover:text-flash-yellow text-sm">
                    Déja membre ?
                  </p>
                </NavLink>
              </div>
              <p className="text-center">
                Votre enregistrement a bien été prise en compte, vous allez
                recevoir un mail de confirmation afin de valider votre
                inscription !
              </p>
            </form>
          </div>
        </div>
      </div>
      <section className="xxl-max:hidden">
        <div className="auth-LeftPicture absolute top-[240px] left-0">
          <img src={peoplepicture} alt="PicturePrésentation" width={520} />
        </div>
        <div className="auth-rightBottomBloc relative">
          <div className="auth-textOvale absolute right-[200px] bottom-[-15px] z-10 text-red-pink text-xl ">
            <NavLink className="hover:underline" to="/help">
              <p href="help"> Besoin d'aides ?</p>
            </NavLink>
            <NavLink to="/legal-notice">
              <p className="mt-4 hover:underline">Mentions légales</p>
            </NavLink>
          </div>
          <div className="auth-Ovale">
            <div className="auth-OvaleRed bg-red-pink rounded-full rotate-[180deg] absolute w-[208px] h-[96px] right-[70px] bottom-[125px]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inscription;
