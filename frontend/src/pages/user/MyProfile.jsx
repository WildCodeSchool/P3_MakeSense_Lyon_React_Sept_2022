/* eslint-disable react/self-closing-comp */
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-makesense.png";
import "../../css/user/myprofile.css";
import { useCurrentUserContext } from "../../context/UserContext";

export default function MyProfile() {
  const { user, setUser, token } = useCurrentUserContext();
  const navigate = useNavigate();

  const avatarRef = useRef(null);
  const [messagegUploadAvatarIsOk, setMessagegUploadAvatarIsOk] = useState("");
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [city, setCity] = useState(user.city);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [urlAvatarStatus, setAvatarStatus] = useState("");

  // fetch to submit my avatr
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
          setMessagegUploadAvatarIsOk("Upload réussi !");
        })
        .catch((error) => {
          console.error(error);
          setMessagegUploadAvatarIsOk("Upload échoué !");
        });
    } else {
      setMessagegUploadAvatarIsOk(
        "Vous auriez pas oublié un truc ? Le fichier à uploader, par exemple ?"
      );
    }
  };

  // fetch to edit my profile informations
  function sendUserInformations() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname,
      lastname,
      email,
      city,
      phone,
      user_id: user.id,
    });

    fetch(`http://localhost:5000/user/${user.id}`, {
      method: "PUT",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((results) => {
        console.warn("results", results);
        setUser({
          ...user,
          firstname: results.firstname,
          lastname: results.lastname,
          email: results.email,
          city: results.city,
          phone: results.phone,
        });
        navigate("/home");
      })
      .catch((error) => console.warn("error", error));
  }

  // fetch for the status of fetch of the avatar
  useEffect(() => {
    fetch(`http://localhost:5000/avatar/${user.avatar}`)
      .then((response) => setAvatarStatus(response))
      .catch((error) => console.warn(error));
  }, [user]);

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
        <div className="flex flex-wrap justify-center items-center justify-items-center content-center">
          <div className="circle_add mt-[80px]">
            {urlAvatarStatus.status === 200 ? (
              <img
                className="shadow rounded-full w-40 h-36 align-middle border-none hover:opacity-25 transition ease-in-out delay-50 "
                src={`http://localhost:5000/avatar/${user.avatar}`}
                alt={`avatar${user.firstname}-${user.id}`}
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mt-[125px] ml-5">
            Ajoute une photo de profil avec ton plus beau sourire !
          </p>
          <p className="ml-5 mb-5">{messagegUploadAvatarIsOk}</p>
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
                onChange={(e) => setFirstname(e.target.value)}
                placeholder={user.firstname}
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
                onChange={(e) => setLastname(e.target.value)}
                placeholder={user.lastname}
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
                onChange={(e) => setCity(e.target.value)}
                placeholder={user.city}
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder={user.email}
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
                onChange={(e) => setPhone(e.target.value)}
                placeholder={user.phone}
              />
            </label>
          </div>
          <div className="box pt-[32px] col-start-2 col-end-3">
            <div className="flex pl-[56px]">
              <button
                type="button"
                onClick={sendUserInformations}
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
