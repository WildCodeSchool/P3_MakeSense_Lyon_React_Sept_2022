import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/user/ForgottenPassword.css";
import peoplepicture from "../../assets/peoplepicture.png";
import "../../assets/logo-makesense.png";
import HeaderCountryChoice from "../../components/user/HeaderCountryChoice";

function ForgottenPassword({ email, setEmail }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const sendEmail = () => {
    fetch(`http://localhost:5000/forgottenpassword`, requestOptions)
      .then((result) => {
        console.warn(result);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className=" bg-dark-blue md:bg-white  relative h-screen w-screen overflow-x-hidden">
      <HeaderCountryChoice />
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
        <div className=" flex flex-col justify-center items-center text-white ">
          <div className="bg-dark-blue  rounded-lg max-w-xl xl:p-0 md:shadow-1 mt-[44px] md:mt-[100px] ">
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
                    onChange={(e) => setEmail(e.target.value)}
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="pseudo@exemple.com"
                    required=""
                  />
                </div>
                <div className="text-center ">
                  <button
                    onClick={sendEmail}
                    type="submit"
                    className=" text-white mt-5 hover:bg-red-pink font-medium rounded-lg text-1xl px-5 py-3 text-center border hover:scale-105 duration-300"
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
          <div className="flex justify-center md:justify-end mx-20">
            <div className="flex md:flex-col flex-row w-[300px] text-center md:rounded-full md:border-2 text-red-pink  justify-around md:justify-start md:mt-12">
              <NavLink className="hover:underline " to="/help">
                <p href="help" className="text-sm md:text-l hover:underline">
                  {" "}
                  Besoin d'aides ?
                </p>
              </NavLink>
              <p className="md:hidden">-</p>
              <NavLink to="/legal-notice" className="hover:underline ">
                <p className="md:mt-[5px] text-sm md:text-l">
                  Mentions légales
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ForgottenPassword;
