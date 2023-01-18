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
        <div className="auth-textOvale z-10 text-red-pink text-xl xl:hidden">
          <NavLink className="hover:underline" to="/help">
            <p href="help"> Besoin d'aides ?</p>
          </NavLink>
          <NavLink to="/legal-notice">
            <p className="mt-[16px] hover:underline">Mentions légales</p>
          </NavLink>
        </div>
      </div>
      {/* <section className="xxl-max:hidden"> */}
      <section className="">
        <div className="auth-LeftPicture absolute top-[240px] left-0">
          <img
            src={peoplepicture}
            alt="PicturePrésentation"
            width={520}
            className="1101-max:hidden 1590-max:w-2/6 w-3/7"
          />
        </div>
        <div className="auth-rightBottomBloc relative">
          <div className="auth-textOvale absolute right-[200px] bottom-[-15px] z-10 text-red-pink text-xl xl-max:hidden">
            <NavLink className="hover:underline" to="/help">
              <p href="help"> Besoin d'aides ?</p>
            </NavLink>
            <NavLink to="/legal-notice">
              <p className="mt-4 hover:underline">Mentions légales</p>
            </NavLink>
          </div>
          <div className="xxl-max:hidden">
            <div className="auth-Ovale">
              <div className="auth-OvaleRed bg-red-pink rounded-full rotate-[180deg] absolute w-[208px] h-[96px] right-[70px] bottom-[125px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgottenPassword;
