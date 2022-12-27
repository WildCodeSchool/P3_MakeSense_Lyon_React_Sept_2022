import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccordionDecisionDetails from "../../components/user/AccordionDecisionDetails";
import userimg from "../../assets/icons/user.png";
import logo from "../../assets/logo-makesense.png";
import editIcon from "../../assets/icons/edit.svg";
import TimelineStepperDecision from "../../components/user/TimelineStepperDecision";
import "../../css/user/createDecision.css";
import { useAuthContext } from "../../contexts/AuthContext";

export default function DecisionDetails() {
  const idParam = useParams();
  const { user, token } = useAuthContext();
  const [clickedAnswer4, setClickedAnswer4] = useState(false);
  const [valuesDetailsDecision, setValuesDetailsDecision] = useState([]);
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

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row items-center justify-beetwen bg-light-grey">
        <div className="flex flex-col">
          <p className="pl-10 pt-3 text-xl">Bonjour {user.firstname}</p>
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="logo-home">
          <img src={logo} alt="logo make-sense" />
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

          <imt src={editIcon} alt="edit" />
          <div>
            <p>Proposé par {valuesDetailsDecision.firstname} :</p>
            <img src={userimg} alt="The belle gosse" className="w-10" />
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
