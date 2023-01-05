/* eslint-disable react/self-closing-comp */
import { React, useRef, useState } from "react";
import Logo from "../../assets/logo-makesense.png";
import "../../css/user/myprofile.css";
import { useCurrentUserContext } from "../../context/UserContext";

export default function MyProfile() {
  const { user, setUser, token } = useCurrentUserContext();

  const avatarRef = useRef(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("avatar", avatarRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };

      fetch("http://localhost:5000/avatar", requestOptions)
        .then((response) => response.json())
        .then((results) => {
          setUser({ ...user, avatar: results.avatar });
          setMsg("Upload réussi !");
        })
        .catch((error) => {
          console.error(error);
          setMsg("Upload échoué !");
        });
    } else {
      setMsg(
        "Vous auriez pas oublié un truc ? Le fichier à uploader, par exemple ?"
      );
    }
  };

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
      <div className="w-5/6 m-auto flex flex-row items-end">
        <div className="flex flex-wrap justify-center">
          <div className="circle_add mt-[80px] ">
            <img
              className="max-w-full h-auto rounded-full hover:opacity-25 transition ease-in-out delay-50 "
              src={`http://localhost:5000/avatar/${user.avatar}`}
              alt={`avatar${user.firstname}-${user.id}`}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mt-[125px] ml-5">
            Ajoute une photo de profil avec ton plus beau sourire !
          </p>
          <p className="ml-5 mb-5">{msg}</p>
          <form
            className="flex flex-col items-start ml-5"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="file" ref={avatarRef} />
            <button
              className=" bg-red-pink hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-2"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </div>
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
