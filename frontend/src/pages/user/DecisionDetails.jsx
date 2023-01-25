import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import userimg from "../../assets/icons/user.png";
import Logo from "../../assets/logo-makesense.png";
import TimelineStepperDecision from "../../components/user/TimelineStepperDecision";
import "../../css/user/createDecision.css";
import { useCurrentUserContext } from "../../context/UserContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function DecisionDetails() {
  const idParam = useParams();
  const { user, token } = useCurrentUserContext();
  const [clickedAnswer4, setClickedAnswer4] = useState(false);
  const [valuesDetailsDecision, setValuesDetailsDecision] = useState([]);
  const [urlAvatarStatus, setAvatarStatus] = useState("");
  const [updateDecision, setUpdateDecision] = useState(false);
  const navigate = useNavigate();

  const toggleUpdateDecision = () => setUpdateDecision(!updateDecision);

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`${backEnd}/decision/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesDetailsDecision(result))
      .catch((error) => console.warn("error", error));
  }, [updateDecision]);

  useEffect(() => {
    fetch(`${backEnd}/avatar/${valuesDetailsDecision.avatar}`)
      .then((response) => setAvatarStatus(response))
      .catch((error) => console.warn(error));
  }, [valuesDetailsDecision]);

  const statusForClassname = () => {
    if (valuesDetailsDecision.status_decision) {
      return valuesDetailsDecision.status_decision
        .replace(" ", "")
        .toLowerCase();
    }
    return "encours";
  };
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">Bonjour {user.firstname}</p>
          ) : (
            <p className="pl-10 pt-3 text-xl">Bonjour</p>
          )}
          <p className="pl-10 text-x font-extralight text-gray-500">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <h1 className="md:text-2xl text-red-pink hidden">
          Détail de la décision
        </h1>
        <div className="hidden md:block logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse  justify-around mt-10">
        <div className="hidden md:flex md:flex-col">
          <TimelineStepperDecision
            clickedAnswer4={clickedAnswer4}
            setClickedAnswer4={setClickedAnswer4}
            valuesDetailsDecision={valuesDetailsDecision}
            urlAvatarStatus={urlAvatarStatus}
          />
        </div>

        <div className="flex flex-col md:mr-10 ml-2 md:ml-10">
          <div className="flex flex-col">
            <div className="flex flex-row items-end">
              <h2 className="text-2xl">
                {" "}
                &nbsp; {valuesDetailsDecision.title}
              </h2>
              {/* Here the status color changes according to the decision status */}
            </div>
          </div>
          <div className="flex flex-row ml-3 items-center">
            <div className="flex flex-row items-center ">
              <div className={statusForClassname()} />
              <p
                className={`${
                  valuesDetailsDecision.status_decision === "En cours"
                    ? "text-light-blue "
                    : valuesDetailsDecision.status_decision === "En conflit"
                    ? "text-light-orange"
                    : valuesDetailsDecision.status_decision === "Non aboutie"
                    ? "text-red-pink "
                    : valuesDetailsDecision.status_decision === "Terminee"
                    ? "text-light-green"
                    : " "
                }`}
              >
                &nbsp; {valuesDetailsDecision.status_decision}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:mr-10 ml-2">
            {valuesDetailsDecision.user_id === user.id ? (
              <button
                type="button"
                onClick={() => navigate(`/edit-decision/${idParam.id}`)}
                className="pr-3 pl-3 h-10 w-48 bg-dark-blue rounded-3xl text-white"
              >
                Modifier ma décision
              </button>
            ) : null}
          </div>
          <div className="flex flex-row justify-end">
            <p className="mt-2 mr-3">
              Proposé par {valuesDetailsDecision.firstname} :
            </p>
            <button
              type="button"
              onClick={() =>
                navigate(`/user-profile/${valuesDetailsDecision.user_id}`)
              }
            >
              <img
                className="w-10 h-10 rounded-full hover:opacity-25 transition ease-in-out delay-50 mr-3"
                src={
                  urlAvatarStatus.status === 200
                    ? `http://localhost:5000/avatar/${valuesDetailsDecision.avatar}`
                    : userimg
                }
                alt={`avatar${user.firstname}-${user.id}`}
              />
            </button>
          </div>
          <div className="flex justify-center mb-16 overflow-hidden">
            <AccordionDecisionDetails
              clickedAnswer4={clickedAnswer4}
              setClickedAnswer4={setClickedAnswer4}
              valuesDetailsDecision={valuesDetailsDecision}
              setValuesDetailsDecision={setValuesDetailsDecision}
              urlAvatarStatus={urlAvatarStatus}
              toggleUpdateDecision={toggleUpdateDecision}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
