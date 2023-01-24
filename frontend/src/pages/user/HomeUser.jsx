import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DecisionCard from "../../components/user/DecisionCard";
import "../../css/user/homeUser.css";
import TimeStepperHome from "../../components/user/TimeStepperHome";
import Logo from "../../assets/logo-makesense.png";
import { useCurrentUserContext } from "../../context/UserContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function Home() {
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

    fetch(`${backEnd}/decision`, requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesDetailsDecisions(result))
      .catch((error) => console.warn("error", error));
  }, [token]);

  return (
    <div className="w-screen z-0">
      <div className="flex flex-row items-center justify-between bg-light-grey pr-16 pl-10">
        <div className="flex flex-col">
          {user ? (
            <p className="pt-3 text-xl">Bonjour {user.firstname}</p>
          ) : (
            <p className="pt-3 text-xl">Bonjour</p>
          )}
          <p className="md:flex text-x font-extralight text-gray-500">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="hidden md:block logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="md:grid overflow-hidden grid-cols-4 grid-rows-7 gap-3 mt-3">
        <div className="box col-start-1 col-end-4">
          <div className="flex align-center">
            <h2 className="text-l ml-5 md:text-3xl text-red-pink font-extrabold p-4">
              Mes décisions :{" "}
            </h2>
            <button
              type="button"
              onClick={() => navigate("/create-decision")}
              className=" h-6 pr-3 pl-3 mt-4 md:m-4 md:h-10 bg-red-pink rounded-3xl text-white hover:bg-white hover:text-red-pink hover:border-2 hover:border-red-pink transition duration-200 ease-in-out"
            >
              + Nouvelle décision
            </button>
          </div>
        </div>

        <div className="md:grid md:col-start-1 md:col-end-4 md:ml-10 md:justify-start flex justify-center items-center">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-4">
            {valuesDetailsDecisions.slice(0, 9).map((valueDetailsDecision) => {
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
            <button type="button" onClick={() => navigate("/decisions")}>
              <div className=" z-0 w-[250px] md:w-[200px] h-[180px] hover:scale-110 duration-200	md:mb-0 mb-3 bg-[#fcfcfc] text-light-blue  px-4 py-5 sm:px-6 shadow-lg rounded-xl flex items-center justify-center">
                ... Voir plus
              </div>
            </button>
          </div>
        </div>

        <div className="box col-start-1 col-end-4 z-0">
          <h2 className="md:text-3xl text-l text-red-pink font-extrabold p-3 ml-5 z-0">
            Décisions en cours :{" "}
          </h2>
        </div>
        <div className="box col-start-1 col-end-4 md:ml-10 md:justify-start flex justify-center items-center z-0">
          <div className="md:grid md:mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-0">
            {valuesDetailsDecisions.slice(0, 9).map((valueDetailsDecision) => {
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
            <button type="button" onClick={() => navigate("/decisions")}>
              <div className=" z-0 w-[250px] md:w-[200px] h-[180px] hover:scale-110 duration-200	md:mb-0 mb-3 bg-[#fcfcfc] text-light-blue  px-4 py-5 sm:px-6 shadow-lg rounded-xl flex items-center justify-center">
                ... Voir plus
              </div>
            </button>
          </div>
        </div>
        <div className="hidden md:block md:row-start-1 md:row-end-4 md:col-start-4 md:justify-center md:items-center">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
