import React from "react";
import Logo from "../../assets/logo-makesense.png";
import Add from "../../assets/icons/x.svg";
import "../../css/user/myprofile.css";

export default function MyProfile() {
  return (
    <div className="w-screen">
      <div className="headerDecision">
        <h1>Mon profil</h1>
        <img src={Logo} alt="Logo makesense" />
      </div>
      <div className="w-5/6 m-auto flex">
        <div className="circle_add mt-20">
          <img className="add" src={Add} alt="icon +" />
        </div>
      </div>
    </div>
  );
}
