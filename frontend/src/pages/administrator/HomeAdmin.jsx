/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import UsersCard from "../../components/administrator/UsersCard";
import Logo from "../../assets/logo-makesense.png";
import { useCurrentUserContext } from "../../context/UserContext";

export default function HomeAdmin({ open }) {
  const { user, token } = useCurrentUserContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };
    fetch("http://localhost:5000/user", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div className="w-screen">
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">
              ADMINISTRATEUR {user.firstname}
            </p>
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
      <div className="flex flex-row">
        <div className="w-[300px] h-[350px] border-2 rounded-xl m-10 flex flex-col shadow-lg">
          <h3 className="text-center text-2xl mt-5">Statistiques :</h3>
          <ul>
            <li className="font-extralight pt-5 m-5">Utilisateurs : </li>
            <li className="font-extralight m-5">Décisions : </li>
            <li className="font-extralight m-5">Accepté : </li>
            <li className="font-extralight m-5">Conflit : </li>
            <li className="font-extralight m-5">Rejeté : </li>
          </ul>
        </div>
        <div
          className={
            open
              ? "w-[750px] h-auto  border-2 rounded-xl m-10"
              : "w-[900px] h-auto  border-2 rounded-xl m-10"
          }
        >
          <h3 className="text-center text-2xl mt-5">Utilisateurs :</h3>
          {users.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
