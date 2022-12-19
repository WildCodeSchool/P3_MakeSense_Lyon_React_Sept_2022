/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/user/Connexion.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";

function Connexion() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const sendConnexion = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    /* It's an object that will be sent in the body of request */
    const raw = JSON.stringify({
      email,
      password,
    });

    /* function push user and token in the localstorage */
    fetch("http://localhost:5005/login", {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/home");
        } else {
          alert("Veuillez entrer un identifiant ou password correct.");
        }
      })
      .catch((error) => console.warn("error", error));
    console.warn(raw);
  };

  useEffect(() => {
    sendConnexion();
  }, []);

  return (
    <div className="connexionPage">
      <NavLink to="/">
        <img
          className="p-6"
          src="/src/assets/logo-makesense.png"
          alt="logo"
          width={350}
        />
      </NavLink>
      <div className="connexionBloc flex flex-col justify-center items-center text-white ">
        <div className="w-full bg-dark-blue rounded-lg max-w-md xl:p-0 shadow-1 relative ">
          {/* <div className="connexion-YellowRectangle" /> */}
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              CONNEXION
            </h1>
            <p className="text-2xl text-center">Accédez à votre compte </p>
            <div className="index space-y-8" action="#">
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onClick={sendConnexion}
                  className=" text-white hover:bg-red-pink font-medium rounded-lg text-2xl px-5 py-5 text-center border hover:scale-105 duration-300"
                >
                  SE CONNECTER
                </button>

                <p className="text-center text-sm">
                  <NavLink to="motdepasseoublie">
                    <p className="text-white mb-1 font-medium hover:underline hover:text-flash-yellow">
                      Mot de passe oublié?
                    </p>
                  </NavLink>
                  <NavLink to="inscription">
                    <p className=" text-white font-medium text-primary-600 hover:underline hover:text-primary-yellow">
                      S'inscrire
                    </p>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="xxl-max:hidden"> */}
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
    </div>
  );
}

export default Connexion;
