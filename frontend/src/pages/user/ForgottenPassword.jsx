import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/user/ForgottenPassword.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";

function ForgottenPassword() {
  return (
    <div className="inscriptionPage bg-white relative h-screen w-screen overflow-x-hidden">
      <HeaderCountryChoice />
      <NavLink to="/">
        <img
          className="p-6"
          src="/src/assets/logo-makesense.png"
          alt="logo"
          width={350}
        />
      </NavLink>
      <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
        <div className="bg-dark-blue  rounded-lg max-w-xl xl:p-0 shadow-1 mt-[144px] relative ">
          {/* <div className="connexion-YellowRectangle" /> */}
          <div className="p-6 space-y-6 sm:p-12">
            <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              MOT DE PASSE OUBLIE ?
            </h1>
            <form className=" index space-y-8" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="text-white block mt-8 mb-4 text-lg font-medium"
                >
                  Votre adresse e-mail :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="pseudo@exemple.com"
                  required=""
                />
              </div>
              <div className="text-center ">
                <button
                  type="submit"
                  className=" text-white hover:bg-red-pink font-medium rounded-lg text-1xl px-5 py-3 text-center border hover:scale-105 duration-300"
                >
                  Envoyer la demande
                </button>
              </div>
              <p className="text-center">
                Un e-mail vous a été envoyé ! Suivez les instructions dans cet
                e-mail pour modifier votre mot de passe.
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

export default ForgottenPassword;
