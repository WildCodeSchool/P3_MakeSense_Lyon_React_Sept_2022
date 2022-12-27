/* eslint-disable react/self-closing-comp */
import React from "react";
import Logo from "../../assets/logo-makesense.png";
import Add from "../../assets/icons/x.svg";
import "../../css/user/myprofile.css";
import { useAuthContext } from "../../contexts/AuthContext";

export default function MyProfile() {
  const { user } = useAuthContext();

  return (
    <div className="w-screen">
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">Bonjour {user.firstname}</p>
          ) : (
            <p className="pl-10 pt-3 text-xl">Bonjour</p>
          )}
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <h1 className="text-2xl text-red-pink">Mon profil</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="w-5/6 m-auto flex">
        <div className="circle_add mt-[80px]">
          <img className="add" src={Add} alt="icon +" />
        </div>
        <p className="mt-[125px] ml-5">
          Ajoute une photo de profil <br></br> avec ton plus beau sourire !
        </p>
      </div>
      <form className="flex flex-col m-auto pt-8 items-center">
        <div className="grid w-2/3 overflow-hidden grid-cols-2 grid-rows-4 gap-3 pt-5">
          <div className="box col-start-1 col-end-2">
            <label className="flex flex-col text font-light">
              Prénom :
              <input
                className="mt-3 w-[200px] border-2 rounded-lg h-10"
                type="text"
                name="name"
                placeholder="John"
              />
            </label>
          </div>
          <div className="box col-start-2 col-end-3">
            <label className="flex flex-col text font-light">
              Nom:
              <input
                className="mt-3 w-[200px] border-2 rounded-lg h-10"
                type="text"
                name="name"
                placeholder="Doe"
              />
            </label>
          </div>
          <div className="box col-start-1 col-end-2">
            <label className="flex flex-col text font-light">
              Localisation:
              <input
                className="mt-3 w-[200px] border-2 rounded-lg h-10"
                type="text"
                name="name"
                placeholder="Ubud"
              />
            </label>
          </div>
          <div className="box col-start-2 col-end-3">
            <label className="flex flex-col text font-light">
              Email:
              <input
                className="mt-3 w-[200px] border-2 rounded-lg h-10"
                type="text"
                name="name"
                placeholder="john.doe@gmail.com"
              />
            </label>
          </div>
          <div className="box col-start-1 col-end-2">
            <label className="flex flex-col text font-light">
              Téléphone:
              <input
                className="mt-3 w-[200px] border-2 rounded-lg h-10"
                type="text"
                name="name"
                placeholder="0633976835"
              />
            </label>
          </div>

          <div className="box pt-[32px] col-start-2 col-end-3">
            <div className="flex pl-[56px]">
              <button
                type="button"
                id="buttonEnvoyerDecision"
                className="flex bg-red-pink hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
