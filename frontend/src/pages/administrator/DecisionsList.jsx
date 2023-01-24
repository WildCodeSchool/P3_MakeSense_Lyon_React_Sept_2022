import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useCurrentUserContext } from "../../context/UserContext";
import Logo from "../../assets/logo-makesense.png";
import "../../css/administrator/decisionList.css";

export default function DecisionsList() {
  const { user, token } = useCurrentUserContext();
  const [valuesDetailsDecisions, setValuesDetailsDecisions] = useState([]);

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch("http://localhost:5000/decision", requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesDetailsDecisions(result))
      .catch((error) => console.warn("error", error));
  }, [token]);

  return (
    <div className="usersListPage w-screen">
      <div className="usersListHeader flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">LISTE DES DECISIONS </p>
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
      <div className="usersListBoard grid grid-cols-8 mt-12 text-center bg-gray-200 border-2 border-gray-600 border-solid">
        <div className="decisionsListBoard1 pt-1 bg-white" />
        <div className="decisionsListBoard">Auteur</div>
        <div className="decisionsListBoard">Concerné</div>
        <div className="decisionsListBoard">Expert</div>
        <div className="decisionsListBoard">Titre Décision</div>
        <div className="decisionsListBoard">Date de création</div>
        <div className="decisionsListBoard">Date finalisation</div>
        <div className="decisionsListBoard">Status</div>
      </div>
      {valuesDetailsDecisions.map((decision) => (
        <div
          key={decision.id}
          className="grid grid grid-cols-8 text-center mt-2"
        >
          {console.warn(valuesDetailsDecisions)}
          <button type="button" className="decisionsListBoard1 pt-1 pl-12">
            <BsTrash />
          </button>
          <div>
            {decision.firstname} {decision.lastname}
          </div>
          <div>{decision.firstname}</div>
          <div>{decision.firstname}</div>
          <div>{decision.title}</div>
          <div>{decision.date_decision_creation}</div>
          <div>{decision.date_decision_close}</div>
          <div>{decision.status_decision}</div>
        </div>
      ))}
    </div>
  );
}
