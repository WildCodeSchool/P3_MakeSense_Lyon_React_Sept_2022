import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import userimg from "../../assets/icons/user.png";
import Logo from "../../assets/logo-makesense.png";
import TimelineStepperDecision from "../../components/user/TimelineStepperDecision";
import "../../css/user/createDecision.css";
import { useCurrentUserContext } from "../../context/UserContext";

export default function DecisionDetails() {
  const idParam = useParams();
  const { user, token } = useCurrentUserContext();
  const [clickedAnswer4, setClickedAnswer4] = useState(false);
  const [valuesDetailsDecision, setValuesDetailsDecision] = useState([]);
  const [urlAvatarStatus, setAvatarStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/decision/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesDetailsDecision(result))
      .catch((error) => console.warn("error", error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/avatar/${valuesDetailsDecision.avatar}`)
      .then((response) => setAvatarStatus(response))
      .catch((error) => console.warn(error));
  }, [valuesDetailsDecision]);

  return (
    <div className="flex flex-col w-screen">
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
        <h1 className="text-2xl text-red-pink">Détail de la décision</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10">
        <div className="flex flex-col mr-10">
          {valuesDetailsDecision.user_id === user.id ? (
            <div className="flex flex-row items-center">
              <h2 className="text-2xl mr-3">{valuesDetailsDecision.title}</h2>
              <button
                type="button"
                onClick={() => navigate(`/edit-decision/${idParam.id}`)}
                className="pr-3 pl-3 h-10 w-48 bg-dark-blue rounded-3xl text-white"
              >
                Modifier ma décision
              </button>
            </div>
          ) : null}
          <div>
            <p>Proposé par {valuesDetailsDecision.firstname} :</p>
            <button
              type="button"
              onClick={() =>
                navigate(`/user-profile/${valuesDetailsDecision.user_id}`)
              }
            >
              <img
                className="w-10 h-10 rounded-full hover:opacity-25 transition ease-in-out delay-50 "
                src={
                  urlAvatarStatus.status === 200
                    ? `http://localhost:5000/avatar/${valuesDetailsDecision.avatar}`
                    : userimg
                }
                alt={`avatar${user.firstname}-${user.id}`}
              />
            </button>
          </div>
          <div className="flex justify-center">
            <AccordionDecisionDetails
              clickedAnswer4={clickedAnswer4}
              setClickedAnswer4={setClickedAnswer4}
              valuesDetailsDecision={valuesDetailsDecision}
            />
          </div>
        </div>
        <TimelineStepperDecision
          clickedAnswer4={clickedAnswer4}
          setClickedAnswer4={setClickedAnswer4}
        />
      </div>
    </div>
  );
}
