/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo-makesense.png";
import { useCurrentUserContext } from "../../context/UserContext";
import "../../css/administrator/usersList.css";
import AlertDeleteDecision from "../../components/user/AlertDeleteDecision";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function UsersList() {
  const { user, token } = useCurrentUserContext();
  const [users, setUsers] = useState([]);
  const [openModalAlertDelete, setOpenModalAlertDelete] = useState(false);
  const [deleteIsConfirm, setDeleteIsConfirm] = useState(false);
  const [id, setId] = useState();
  const { t } = useTranslation();

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

  const deleteUser = () => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeader,
    };
    fetch(`${backEnd}/admin/user/${id}`, requestOptions)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (deleteIsConfirm) {
      setOpenModalAlertDelete(false);
      deleteUser();
      setDeleteIsConfirm(false);
    } else {
      setDeleteIsConfirm(false);
    }
  }, [deleteIsConfirm]);
  return (
    <div className="w-screen">
      <AlertDeleteDecision
        openModalAlertDelete={openModalAlertDelete}
        setOpenModalAlertDelete={setOpenModalAlertDelete}
        setdeleteIsConfirm={setDeleteIsConfirm}
      />
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">LISTE UTILISATEURS </p>
          ) : (
            <p className="pl-10 pt-3 text-xl">{t("Bonjour home")}</p>
          )}
          <p className="pl-10 text-x font-extralight">
            {t("Nous sommes le")} : {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>

      <div className="md:w-[95%] m-auto h-auto ">
        <div className="grid grid-cols-6 items-center bg-gray-400 h-12 mt-10 justify-center rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="ml-10 col-start-1 col-end-2"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
          <p className="col-start-2 ">Avatar</p>
          <p className="col-start-3 text-center">Nom, prémon</p>
          <p className="col-start-4 col-end-6 text-center">Email</p>
          <p className="col-start-6 col-end-7 text-center">Phone</p>
        </div>
        {users.map((user) => (
          <div
            type="button"
            key={user.id}
            className={
              user.id % 2 === 0
                ? "grid pt-2 pb-2 grid-cols-6 items-center bg-gray-200 h-auto min-h-min	justify-center hover:bg-white border-b-2 border-gray-400	w-full "
                : "grid pt-2 pb-2 grid-cols-6 items-center bg-gray-300 h-auto min-h-min	justify-center hover:bg-white border-b-2 border-gray-400	w-full "
            }
          >
            <button
              type="button"
              onClick={() => {
                setOpenModalAlertDelete(true);
                setId(user.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="ml-10"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
            <img
              src={`http://localhost:5000/avatar/${user?.avatar}`}
              alt="avatar"
              className="col-start-2 col-end-3 w-8 h-8 rounded-full"
            />
            <p className="col-start-3 text-center">
              {user.firstname} {user.firstname}
            </p>
            <p className="col-start-4 col-end-6 text-center">{user.email}</p>
            <button type="button" className="col-start-6 col-end-7 text-center">
              <p>{user.phone}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
