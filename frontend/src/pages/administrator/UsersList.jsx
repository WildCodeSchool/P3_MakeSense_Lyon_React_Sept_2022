/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import Logo from "../../assets/logo-makesense.png";
import { useCurrentUserContext } from "../../context/UserContext";
import "../../css/administrator/usersList.css";
import Avatar1 from "../../assets/icons/user.png";

export default function UsersList() {
  const { user, token } = useCurrentUserContext();
  const [users, setUsers] = useState([]);
  // const [destroy, setDestroy] = useState([]);

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };
    fetch("http://localhost:5000/user", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.warn(result);
        setUsers(result);
      })
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div className="usersListPage w-screen">
      <div className="usersListHeader flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">LISTE UTILISATEURS </p>
          ) : (
            <p className="pl-10 pt-3 text-xl">Bonjour</p>
          )}
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="usersListButtons ml-12 mt-6">
          <button
            type="button"
            className="pr-3 pl-3 m-4 h-10 bg-red-pink rounded-3xl text-white"
          >
            Supprimer
          </button>
          <button
            type="button"
            className="pr-5 pl-5 m-4 h-10 bg-light-blue rounded-3xl text-white"
          >
            Modifier
          </button>
        </div>
        <div className="flex mt-4 mr-12">
          <IoAddCircle className="ioAddCircle" />
          <p className="mt-3 ml-3 text-xl text-red-pink font-bold">
            Ajouter un nouvel <p className="text-center">utilisateur</p>
          </p>
        </div>
      </div>
      <div className="usersListBoard grid grid-cols-8 text-center border-2 border-gray-200 border-solid">
        <div className="usersListBoardCol">
          <input type="checkbox" />
        </div>
        <div className="usersListBoardCol">Prénom</div>
        <div className="usersListBoardCol">Nom</div>
        <div className="usersListBoardCol">Email</div>
        <div className="usersListBoardCol">Localisation</div>
        <div className="usersListBoardCol">Téléphone</div>
        <div className="usersListBoardCol">Photo</div>
        <div className="usersListBoardCol">Status</div>
      </div>
      {users.map((user) => (
        <div className="grid grid grid-cols-8 text-center mt-2">
          <div>
            <input type="checkbox" />
          </div>
          <div>{user.firstname}</div>
          <div>{user.lastname}</div>
          <div>{user.email}</div>

          <div>{user.city}</div>

          <div>{user.phone}</div>

          <div>
            <img
              className="box w-[45px] rounded-full ml-14"
              src={
                user.avatar
                  ? `http://localhost:5000/avatar/${user.avatar}`
                  : { Avatar1 }
              }
              alt="avatar"
            />
          </div>

          <div>{user.is_admin === 1 ? "Administrateur" : "Utilisateur"}</div>
        </div>
      ))}
    </div>
  );
}
