/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import { React, useEffect, useState } from "react";
import DecisionCard from "@components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import "../../css/user/homeUser.css";
import TimeStepperHome from "@components/user/TimeStepperHome";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../context/UserContext";

export default function Home({ open }) {
  const navigate = useNavigate();
  const { user } = useCurrentUserContext();
  const [valuesDetailsDecisions, setValuesDetailsDecisions] = useState([]);
  const { token } = useCurrentUserContext();

  // function to update the array of decisions after delete one decision
  const updateArrayDecisionsAfterDelete = (id) => {
    const indexOfValueDecision = valuesDetailsDecisions.findIndex(
      (obj) => obj.id === id
    );
    valuesDetailsDecisions.splice(indexOfValueDecision, 1);
    setValuesDetailsDecisions([...valuesDetailsDecisions]);
  };

  // fetch all datas with LEFT JOIN on user_id of decisions from API
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
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="grid overflow-hidden grid-cols-4 grid-rows-7 gap-3 mt-3">
        <div className="box col-start-1 col-end-4">
          <div className="flex align-center">
            <h2 className=" ml-5 text-3xl text-red-pink font-extrabold p-4">
              Mes décisions :{" "}
            </h2>
            <button
              type="button"
              onClick={() => navigate("/create-decision")}
              className="pr-3 pl-3 m-4 h-10 bg-red-pink rounded-3xl text-white"
            >
              + Nouvelle décision
            </button>
          </div>
        </div>

        <div className="box col-start-1 col-end-4 ml-10">
          <div
            className={
              open
                ? "grid grid-cols-5 grid-rows-2 gap-4"
                : "grid grid-cols-6 grid-rows-2 gap-4"
            }
          >
            {valuesDetailsDecisions.map((valueDetailsDecision) => {
              if (valueDetailsDecision.user_id === user.id) {
                return (
                  <DecisionCard
                    key={valueDetailsDecision.id}
                    valueDetailsDecision={valueDetailsDecision}
                    updateArrayDecisionsAfterDelete={
                      updateArrayDecisionsAfterDelete
                    }
                  />
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="box col-start-1 col-end-4">
          <h2 className="text-3xl text-red-pink font-extrabold p-3 ml-5">
            Décisions en cours :{" "}
          </h2>
        </div>
        <div className="box col-start-1 col-end-4 ml-10 ">
          <div className="grid grid-cols-5 gap-4">
            {valuesDetailsDecisions.slice(0, 8).map((valueDetailsDecision) => {
              if (
                valueDetailsDecision.status_decision === "En cours" ||
                valueDetailsDecision.status_decision === "En conflit"
              ) {
                return (
                  <DecisionCard
                    key={valueDetailsDecision.id}
                    valueDetailsDecision={valueDetailsDecision}
                    updateArrayDecisionsAfterDelete={
                      updateArrayDecisionsAfterDelete
                    }
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="box row-start-2 row-end-4 col-start-4 ">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
