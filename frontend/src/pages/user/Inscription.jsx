import React from "react";
import "../../css/user/Inscription.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";

function Inscription() {
  return (
    <div className="inscriptionPage">
      <a href="accueil">
        <img
          className=""
          src="/src/assets/logo-makesense.png"
          alt="logo"
          width={300}
        />
      </a>
      <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
        <div className="w-full bg-dark-blue rounded-lg max-w-xl shadow-1 mt-36 relative ">
          {/* <div className="connexion-YellowRectangle" /> */}
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
                    placeholder="pseudo@exemple.com"
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
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
                <p className="text-center text-sm">
                  <a
                    href="http"
                    className=" text-white font-medium text-primary-600 hover:underline hover:text-flash-yellow"
                  >
                    Déja membre ?
                  </a>
                </p>
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
        <div className="auth-LeftPicture absolute top-60 -left-0">
          <img src={peoplepicture} alt="PicturePrésentation" width={520} />
        </div>
        <div className="auth-OvaleRed bg-red-pink rounded-full rotate-[150deg] absolute w-52 h-24 right-12 bottom-64" />
        <div className="auth-Ovale" />
        <div className="auth-textOvale absolute right-44 bottom-32 text-red-pink text-xl ">
          <p className="hover:underline">
            <a href="help"> Besoin d'aides ?</a>
          </p>
          <p className="mt-4 hover:underline">
            <a href="mentions"> Mentions légales</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Inscription;
