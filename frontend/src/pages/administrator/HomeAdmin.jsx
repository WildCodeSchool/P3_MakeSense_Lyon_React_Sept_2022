/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import UsersCard from "../../components/administrator/UsersCard";
import Logo from "../../assets/logo-makesense.png";
import { useCurrentUserContext } from "../../context/UserContext";

export default function HomeAdmin({ open }) {
  const { user, token } = useCurrentUserContext();
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState([]);
  const backEnd = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };
    fetch(`${backEnd}/user`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((err) => console.error(err));

    fetch(`${backEnd}/admin/countstats`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setStats(result);
      })
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div className="w-screen ">
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
        <div className="logo-home mr-3 md:mr-3">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[300px] h-[350px] border-2 rounded-xl m-10 md:flex md:flex-col shadow-lg grid grid-cols-4 grid-rows-4">
          <h3 className="text-center text-2xl md:mt-3  col-start-1 col-end-5">
            Statistiques :
          </h3>
          <li className="font-extralight list-none text-center md:pt-3 md:m-3 row-start-2 row-end-3 col-start-1 col-end-3">
            Utilisateurs : {stats.users}
          </li>
          <li className="font-extralight list-none text-center md:m-3 row-start-3 row-end-4 col-start-1 col-end-3">
            Décisions : {stats.decision}
          </li>
          <li className="font-extralight list-none text-center md:m-3 row-start-4 row-end-5 col-start-1 col-end-3">
            Accepté : {stats.finished}
          </li>
          <li className="font-extralight list-none text-center md:m-3 row-start-2 row-end-3 col-start-3 col-end-5">
            En cours : {stats.inprogress}
          </li>
          <li className="font-extralight list-none text-center md:m-3 row-start-3 row-end-4 col-start-3 col-end-5">
            En conflit : {stats.conflict}
          </li>
          <li className="font-extralight list-none text-center md:m-3 row-start-4 row-end-5 col-start-3 col-end-5">
            Non abouti : {stats.unresolved}
          </li>
        </div>
        <div
          className={
            open
              ? "md:w-[750px] h-auto  border-2 rounded-xl md:m-10 m-2"
              : "md:w-[900px] h-auto  border-2 rounded-xl md:m-10 m-2"
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
