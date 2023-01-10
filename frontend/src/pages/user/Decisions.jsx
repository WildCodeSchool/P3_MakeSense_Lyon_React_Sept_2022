/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeStepperHome from "../../components/user/TimeStepperHome";
import DecisionCard from "../../components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import { useCurrentUserContext } from "../../context/UserContext";

export default function Decisions({ open }) {
  const navigate = useNavigate();
  const { user, token } = useCurrentUserContext();
  const [valuesDetailsDecisions, setValuesDetailsDecisions] = useState([]);

  // to show or not the chevron-down icon with filter
  const [isOpenAllDecisions, setIsOpenAllDecisions] = useState(true);
  const [isOpenInProgress, setIsOpenInProgress] = useState(false);
  const [isOpenConflicts, setIsOpenConflicts] = useState(false);
  const [isOpenFinished, setIsOpenFinished] = useState(false);
  const [isOpenUnfinished, setIsOpenUnfinished] = useState(false);

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

  const handleChevrondownAllDecisions = () => {
    setIsOpenAllDecisions(!isOpenAllDecisions);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
  };

  const handleChevrondownInProgress = () => {
    setIsOpenInProgress(!isOpenInProgress);
    setIsOpenAllDecisions(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
  };

  const handleChevrondownConflicts = () => {
    setIsOpenConflicts(!isOpenConflicts);
    setIsOpenInProgress(false);
    setIsOpenAllDecisions(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
  };

  const handleChevrondownFinished = () => {
    setIsOpenFinished(!isOpenFinished);
    setIsOpenAllDecisions(false);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenUnfinished(false);
  };

  const handleChevrondownUnfinished = () => {
    setIsOpenUnfinished(!isOpenUnfinished);
    setIsOpenAllDecisions(false);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
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
        <h1 className="text-2xl text-red-pink">Décisions</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <button
            type="button"
            onClick={handleChevrondownAllDecisions}
            className=" ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-black rounded-3xl text-black"
          >
            {isOpenAllDecisions ? (
              <img src={ChevronDown} alt="fleche vers le bas" />
            ) : null}
            Toutes les décisions
          </button>
        </div>
        <button
          type="button"
          onClick={handleChevrondownInProgress}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-blue text-light-blue rounded-3xl"
        >
          {isOpenInProgress ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          En cours
        </button>
        <button
          type="button"
          onClick={handleChevrondownConflicts}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-orange text-light-orange rounded-3xl"
        >
          {isOpenConflicts ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Conflits
        </button>
        <button
          type="button"
          onClick={handleChevrondownFinished}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-green text-light-green rounded-3xl"
        >
          {isOpenFinished ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Terminées
        </button>
        <button
          type="button"
          onClick={handleChevrondownUnfinished}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-red-pink text-red-pink rounded-3xl"
        >
          {isOpenUnfinished ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Non abouties
        </button>
        <button
          onClick={() => navigate("/create-decision")}
          type="button"
          className={
            open
              ? " ml-[80px] pl-2 pr-2 mt-5 mb-5 h-10 bg-red-pink rounded-3xl text-white"
              : " ml-[200px] pl-2 pr-2 mt-5 mb-5 h-10 bg-red-pink rounded-3xl text-white"
          }
        >
          + Nouvelle décision
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 mt-3 gap-14">
        <div className="box col-start-1 col-end-4">
          <div
            className={
              open
                ? "grid grid-cols-5 grid-rows-2 gap-10 ml-10 mr-10 "
                : "grid grid-cols-6 grid-rows-2 gap-10 ml-10 mr-10 "
            }
          >
            {valuesDetailsDecisions.map((valueDetailsDecision) => {
              if (isOpenAllDecisions) {
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
              if (
                isOpenInProgress &&
                valueDetailsDecision.status_decision === "En cours"
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
              if (
                isOpenConflicts &&
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
              if (
                isOpenFinished &&
                valueDetailsDecision.status_decision === "Terminee"
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
              if (
                isOpenUnfinished &&
                valueDetailsDecision.status_decision === "Non aboutie"
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
        <div className="box">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
