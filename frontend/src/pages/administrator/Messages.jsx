import React, { useEffect, useState } from "react";
import { useCurrentUserContext } from "../../context/UserContext";
import Logo from "../../assets/logo-makesense.png";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function Messages() {
  const [messages, setMessages] = useState([]);
  const { user, token } = useCurrentUserContext();
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

  return (
    <div className="w-screen ">
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

      <div className="md:w-auto h-auto">
        <div className="grid grid-cols-8 items-center bg-gray-400 h-8 mt-10 justify-center">
          <input type="checkbox" />
          <p className="col-start-2 text-center">Nom, premon</p>
          <p className="col-start-4 text-center">Email</p>
          <p className="col-start-6 col-end-9 text-center">Content</p>
        </div>
        {messages.map((message) => (
          <div className="grid grid-cols-8 items-center bg-gray-200 h-8 justify-center">
            <input type="checkbox" />
            <p className="col-start-2 text-center">{message.username}</p>
            <p className="col-start-4 text-center">{message.email}</p>
            <p className="col-start-6 col-end-9 text-center">
              {message.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
