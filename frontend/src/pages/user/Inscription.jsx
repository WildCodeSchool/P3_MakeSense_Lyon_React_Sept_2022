import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/user/Inscription.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";

function Inscription() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function sendUser(e) {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    });

    fetch("http://localhost:5005/user", {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
    console.warn(raw);
  }

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
      </NavLink>

      <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
        <div className=" bg-dark-blue rounded-lg max-w-xl shadow-1 ">
          {/* <div className="connexion-YellowRectangle" /> */}
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
              INSCRIPTION
            </h1>
            <p className="text-2xl text-center">Créez votre compte </p>
            <form className=" index space-y-8" onSubmit={sendUser}>
              <div className="flex justify-center flex-row ">
                <div className=" pr-10">
                  <label
                    htmlFor="firstname"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Prénom :
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="text-white block mt-4 mb-2 text-lg font-medium"
                  >
                    Nom :
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block  p-2.5"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center flex-row">
                <div className="pr-10">
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
                    value={email}
                    placeholder="zelkfnioz@fpzoj.com"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center pl-5">
                <div className="text-center ">
                  <button
                    value="post"
                    type="submit"
                    className=" text-white hover:bg-red-pink font-medium rounded-lg text-2xl mt-1 mb-1 px-3 py-2 text-center border hover:scale-105 duration-300"
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
      <section className="xl-max:hidden">
        <div className="auth-LeftPicture absolute top-[240px] left-0">
          <img src={peoplepicture} alt="PicturePrésentation" width={420} />
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
