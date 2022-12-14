import React from "react";
import "../../css/user/Connexion.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";

function Connexion() {
  return (
    <div className="connexionPage">
      <a href="accueil">
        <img
          className="p-6"
          src="/src/assets/logo-makesense.png"
          alt="logo"
          width={350}
        />
      </a>
      <div className="connexionBloc flex flex-col justify-center items-center text-white ">
        <div className="w-full bg-primary-main rounded-lg max-w-md xl:p-0 shadow-1 mt-24 relative ">
          <div className="connexion-YellowRectangle" />
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-primary-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              CONNEXION
            </h1>
            <p className="text-2xl text-center">Accédez à votre compte </p>
            <form className=" index space-y-8" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="text-white block mt-8 mb-2 text-lg font-medium"
                >
                  E-mail :
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
              <div>
                <label
                  htmlFor="password"
                  className=" block mb-2 text-lg font-medium"
                >
                  Mot de passe :
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="text-black border sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border text"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white">
                      Mémoriser
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-center ">
                <button
                  type="submit"
                  className=" text-white hover:bg-primary-red font-medium rounded-lg text-2xl px-5 py-5 text-center border hover:scale-105 duration-300"
                >
                  SE CONNECTER
                </button>
              </div>
              <p className="text-center text-sm">
                <div className="mb-1">
                  <a
                    href="http"
                    className="text-white font-medium hover:underline hover:text-primary-yellow"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
                <a
                  href="http"
                  className=" text-white font-medium text-primary-600 hover:underline hover:text-primary-yellow"
                >
                  S'inscrire
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <section className="xxl-max:hidden">
        <div className="auth-LeftPicture absolute top-60 -left-0">
          <img src={peoplepicture} alt="PicturePrésentation" width={520} />
        </div>
        <div className="auth-OvaleRed bg-primary-red rounded-full rotate-[150deg] absolute w-52 h-24 right-12 bottom-64" />
        <div className="auth-Ovale" />
        <div className="auth-textOvale absolute right-44 bottom-32 text-primary-red text-xl ">
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

export default Connexion;
