/* eslint-disable react/self-closing-comp */
import React from "react";
import Logo from "../../assets/logo-makesense.png";
import Add from "../../assets/icons/x.svg";
import "../../css/user/myprofile.css";

export default function MyProfile() {
  return (
    <div className="w-screen">
      <div className="flex flex-row items-center justify-beetwen bg-light-grey">
        <div className="flex flex-col">
          <p className="pl-10 pt-3 text-xl">Bonjour Madeline</p>
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : 13 septembre 2023
          </p>
        </div>
        <h1 className="text-2xl text-red-pink pl-40">Mon profil</h1>
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

      <div className="grid overflow-hidden grid-cols-2 grid-rows-4 gap-3">
        <form className="w-3/5 flex flex-col m-auto pt-8">
          <div className="box col-start-1 col-end-2">
            <p>Prénom :</p>
          </div>
        </form>
      </div>
    </div>
  );
}
