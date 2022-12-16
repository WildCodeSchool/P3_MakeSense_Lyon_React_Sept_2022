import React from "react";
import Randomuser from "../../assets/randomuser.jpg";
import "../../css/user/UserProfile.css";
import Logo from "../../assets/logo-makesense.png";

function UserProfile() {
  return (
    <div className="userProfile-Comp">
      <header className="userProfile-Header bg-light-grey">
        <div className=" h-16 relative">
          <h1 className="text-center text-red-pink text-3xl pt-4">
            Profil de Lester
          </h1>
          <img
            className="w-52 absolute right-24 top-4"
            src={Logo}
            alt="logo make-sense"
          />
        </div>
        {/* <ul className="flex items-center h-20">
          <h1 className="text-center mt-3 text-red-pink text-3xl">
            Mon Profil
          </h1>
          <li className="">
            <img className="w-52" src={Logo} alt="logo" />
          </li>
        </ul> */}
      </header>
      <main className="userProfile-Description mt-20 text-xl flex flex-wrap ml-24 justify-start items-center gap-12">
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
      </main>
    </div>
  );
}

export default UserProfile;
