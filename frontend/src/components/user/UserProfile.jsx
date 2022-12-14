import React from "react";
import Randomuser from "../../assets/randomuser.jpg";
import "../../css/user/UserProfile.css";
import Logo from "../../assets/logo-makesense.png";

function UserProfile() {
  return (
    <div className="profilePage-myProfil">
      <div className="profilPage-header  bg-light-grey">
        <ul className="flex justify-between items-center h-20">
          <p className="ml-1/2">Mon Profil</p>
          <li className="">
            <img src={Logo} alt="logo" width={300} />
          </li>
        </ul>
      </div>
      <section className="profilPage-description mt-48 text-xl flex flex-wrap ml-24 justify-start items-center gap-12">
        <div className="">
          <img
            className="min-w-max"
            src={Randomuser}
            alt="Avatar"
            width={300}
          />
        </div>
        <div className="flex flex-col gap-y-12">
          <p>Prénom : Lester </p>
          <p>Nom : Field </p>
          <p>Localisation : Lakeview</p>
        </div>
        <div className="flex flex-col gap-y-12 pt-6">
          <p>Téléphone : 00 00 00 00 00 </p>
          <p>Email : Lester.Field@example.com </p>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
