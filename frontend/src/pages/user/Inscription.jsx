import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/user/Inscription.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function Inscription() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  /* This is a function for post a user in database for the form */

  const sendUser = (e) => {
    e.preventDefault();
    /* This is a header for the fetch */
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    /* It's an object that will be sent in the body of request */
    const bodyRaw = JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    });

    /* fetch to suscribe at makesense */
    fetch(`${backEnd}/user`, {
      method: "POST",
      headers: myHeaders,
      body: bodyRaw,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          alert("Votre inscription à été prise en compte");
          navigate("/");
        }
      })
      .catch((error) => {
        console.warn(error); /* 
        alert("Vous êtes déjà inscrit");
        navigate("/"); */
      });
  };

  return (
    <div className="inscriptionPage bg-dark-blue md:bg-white relative h-full md:w-screen sm:overflow-x-hidden ">
      <HeaderCountryChoice />
      <div className=" h-auto md-max:bg-dark-blue">
        <NavLink to="/">
          <img
            className="p-6 hidden md:block"
            src="/src/assets/logo-makesense.png"
            alt="logo"
            width={350}
          />
        </NavLink>
        <NavLink to="/" className="flex justify-center">
          <img
            className="p-6 md:hidden"
            src="/src/assets/make_sense_white.png"
            alt="logo"
            width={350}
          />
        </NavLink>

        <div className="flex flex-col justify-between md-max:h-3/4">
          <div className=" inscriptionBloc flex flex-col justify-center items-center text-white ">
            <div className="w-full bg-dark-blue rounded-lg max-w-xl md:shadow-1 p-6 sm-max:p-10 space-y-6 sm:p-8">
              <h1 className="text-flash-yellow text-center font-bold leading-tight tracking-tight text-3xl">
                INSCRIPTION
              </h1>
              <p className="text-xl text-center">Créez votre compte </p>
              <form
                className=" index sm:grid grid-cols-2 grid-rows-3 gap-5 sm-max:flex sm-max:flex-col"
                action="#"
                onSubmit={(e) => sendUser(e)}
              >
                {/* Prénom */}
                <div className="box">
                  <label
                    htmlFor="text"
                    className="text-white block text-md font-medium"
                  >
                    Prénom :
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                  />
                </div>
                {/* Nom */}
                <div className="box">
                  <label
                    htmlFor="text"
                    className="text-white block text-md font-medium"
                  >
                    Nom :
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder=""
                  />
                </div>
                {/* Email */}
                <div className="box">
                  <label
                    htmlFor="email"
                    className="text-white block text-md font-medium mb-2"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="adresse@examplecom"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>
                {/* Mot de passe */}
                <div className="box">
                  <label
                    htmlFor="password"
                    className="text-white block text-md font-medium mb-2"
                  >
                    Mot de passe :
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*********"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
                {/* S'enregistrer */}
                <div className="text-center box">
                  <button
                    type="submit"
                    className=" text-white hover:bg-red-pink font-medium rounded-lg text-xl mt-3 mb-3 px-5 py-4 text-center border hover:scale-105 duration-300"
                  >
                    S'ENREGISTRER{" "}
                  </button>
                </div>
                {/* Déja membre */}
                <div className="box flex justify-start ml-[16px] items-center sm-max:justify-center">
                  <NavLink to="/">
                    <p className="text-white text-md font-medium text-primary-600 hover:underline hover:text-flash-yellow">
                      Déja membre ?
                    </p>
                  </NavLink>
                </div>
              </form>
            </div>
            <br />
          </div>
          <section
            className="flex flex-col md-max:h-max
       md-max:flex-end"
          >
            <div className="auth-LeftPicture absolute top-[240px] left-0">
              <img
                src={peoplepicture}
                alt="PicturePrésentation"
                width={520}
                className="xl-max:hidden w-[350px]"
              />
            </div>
            <div className="flex justify-center mx-20">
              <div className="flex flex-row w-[300px] text-center  text-red-pink  justify-around ">
                <NavLink className="hover:underline " to="/help">
                  <p href="help" className="text-sm">
                    {" "}
                    Besoin d'aides ?
                  </p>
                </NavLink>
                <p>-</p>
                <NavLink to="/legal-notice" className="hover:underline ">
                  <p className=" text-sm">Mentions légales</p>
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
