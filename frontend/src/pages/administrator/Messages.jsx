import React, { useEffect, useState } from "react";
import { useCurrentUserContext } from "../../context/UserContext";
import Logo from "../../assets/logo-makesense.png";
import AlertDeleteDecision from "../../components/user/AlertDeleteDecision";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function Messages() {
  const [messages, setMessages] = useState([]);
  const { user, token } = useCurrentUserContext();
  const [openModalAlertDelete, setOpenModalAlertDelete] = useState(false);
  const [deleteIsConfirm, setDeleteIsConfirm] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`${backEnd}/admin/message`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.warn(result);
        setMessages(result);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const deleteMessage = () => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeader,
    };

    fetch(`${backEnd}/admin/message/${id}`, requestOptions)
      .then(() => {
        setMessages(messages.filter((message) => message.id !== id));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (deleteIsConfirm) {
      setOpenModalAlertDelete(false);
      deleteMessage();
      setDeleteIsConfirm(false);
    } else {
      setDeleteIsConfirm(false);
    }
  }, [deleteIsConfirm]);

  console.warn(id);
  return (
    <div className="w-screen ">
      <AlertDeleteDecision
        openModalAlertDelete={openModalAlertDelete}
        setOpenModalAlertDelete={setOpenModalAlertDelete}
        setdeleteIsConfirm={setDeleteIsConfirm}
      />
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">MESSAGES </p>
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

      <div className="md:w-[95%] m-auto h-auto ">
        <div className="grid grid-cols-6 items-center  bg-gray-400 h-8 mt-10 justify-center rounded-md">
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
          <p className="col-start-2 text-center">Nom, prémon</p>
          <p className="col-start-3 col-end-5 text-center">Email</p>
          <p className="col-start-5 col-end-7 text-center">Content</p>
        </div>
        {messages.map((message) => (
          <div
            className="grid grid-cols-6 items-center bg-gray-200 h-8 justify-center hover:bg-white border-b-2 border-gray-400	rounded-md"
            key={message.id}
          >
            <button
              type="button"
              onClick={() => {
                setOpenModalAlertDelete(true);
                setId(message.id);
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
            <p className="col-start-2 text-center">{message.username}</p>
            <p className="col-start-3 col-end-5 text-center">{message.email}</p>
            <p className="col-start-5 col-end-7 text-center">
              {message.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
