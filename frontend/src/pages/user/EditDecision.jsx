/* eslint-disable camelcase */
/* eslint-disable import/order */
import { React, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../css/user/createDecision.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.bubble.css";
import { useCurrentUserContext } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-makesense.png";

export default function EditDecision() {
  const { user, token } = useCurrentUserContext();
  const [title, setTitleDecision] = useState("");
  const [content, setValueDecision] = useState("");
  const [impact, setValueImpactOfDecision] = useState("");
  const [benefits, setValueBenefitsOfDecision] = useState("");
  const [risk, setValueRiskOfDecision] = useState("");
  // const to keep the origin value of the decision
  const [valueDefaultDateOfConflict, setValueDefaultDateOfConflict] =
    useState(null);
  // const to keep the origin value of the decision
  const [valueDefaultStatusOfDecision, setValueDefaultStatusOfDecision] =
    useState("");
  const [date_decision_conflict, setStartDateConflictOfDecision] = useState(
    new Date()
  );

  const [status_decision, setStatusOfDecision] = useState(new Date());
  const navigate = useNavigate();
  const idParam = useParams();

  // const [personImpactedDecision, setPersonImpactedDecision] = useState("");
  // const [personExperteDecision, setPersonExperteDecision] = useState("");

  // modules for react-quill text editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const dateConvertedToSqlFormat = (date) => {
    const dateConverted = new Date(date);
    const year = dateConverted.getFullYear();
    const month = dateConverted.getMonth() + 1;
    const day = dateConverted.getDate();
    const hour = dateConverted.getHours();
    const minutes = dateConverted.getMinutes();
    const seconds = dateConverted.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  };

  const dateConvertedToDisplayDateFormat = (date) => {
    const dateConverted = new Date(date);
    const year = dateConverted.getFullYear();
    const month = dateConverted.getMonth() + 1;
    const day = dateConverted.getDate();
    return `${day}/${month}/${year}`;
  };

  // fetch data
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/decision/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTitleDecision(result.title);
        setValueDecision(result.content);
        setValueImpactOfDecision(result.impact);
        setValueBenefitsOfDecision(result.benefits);
        setValueRiskOfDecision(result.risk);
        setValueDefaultDateOfConflict(result.date_decision_conflict);
        setStartDateConflictOfDecision(new Date(result.date_decision_conflict));
        setValueDefaultStatusOfDecision(result.status_decision);
        setStatusOfDecision(result.decision);
      })

      .catch((error) => console.warn("error", error));
  }, []);

  function sendEditDecision() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title,
      content,
      impact,
      risk,
      benefits,
      status_decision,
      date_decision_conflict: dateConvertedToSqlFormat(date_decision_conflict),
      user_id: user.id,
    });

    fetch(`http://localhost:5000/decision/${idParam.id}`, {
      method: "PUT",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => {
        response.json();
        navigate("/home");
      })
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  }

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
        <h1 className="text-2xl text-red-pink">Modifier ma décision</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <main className="mainCreateDecision">
        <div className="col-span-2 ...">
          <div className="mt-14 mb-6">
            <label htmlFor="title-input" className="block mb-2">
              Titre de la décision :
            </label>
            <input
              onChange={(e) => setTitleDecision(e.target.value)}
              type="text"
              value={title}
              id="title-input"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <h2 className="mt-8 mb-3">Description de la décision :</h2>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setValueDecision}
            modules={modules}
          />
          <h2 className="mt-8 mb-3">Impact sur l'organisation :</h2>
          <ReactQuill
            theme="snow"
            value={impact}
            onChange={setValueImpactOfDecision}
            modules={modules}
          />
          <h2 className="mt-8 mb-3">Bénéfice de la décision :</h2>
          <ReactQuill
            theme="snow"
            value={benefits}
            onChange={setValueBenefitsOfDecision}
            modules={modules}
          />
          <h2 className="mt-8 mb-3">Risques potentiels :</h2>
          <ReactQuill
            theme="snow"
            value={risk}
            onChange={setValueRiskOfDecision}
            modules={modules}
          />
          <h2 className="mt-8 mb-3">
            {`Deadline pour rentrer en conflit (Actuel : ${dateConvertedToDisplayDateFormat(
              valueDefaultDateOfConflict
            )})
            :`}
          </h2>
          <div className="flex items-center max-xl:flex-col xl:justify-between max-xl:gap-y-8">
            <div className="containerDate">
              <DatePicker
                selected={date_decision_conflict}
                onChange={(date) => setStartDateConflictOfDecision(date)}
                disabledKeyboardNavigation
                placeholderText="Cliquer pour changer de date"
              />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="status-input" className="block mb-2">
              Statut de la décision (Actuel : {valueDefaultStatusOfDecision}) :
            </label>
            <select
              onChange={(e) => setStatusOfDecision(e.target.value)}
              id="status-input"
              className="border border-gray-300 text-sm rounded-lg block w-80 p-2.5  bg-white"
            >
              <option defaultValue="OptionStatus" disabled selected>
                Cliquer pour changer de statut
              </option>
              <option value="En cours">En cours</option>
              <option value="En conflit">En conflit</option>
              <option value="Terminee">Terminée</option>
              <option value="Non aboutie">Non aboutie</option>
            </select>
          </div>
          <div className="mt-8">
            <label htmlFor="pconcern-input" className="block mb-2">
              Personnes impactées{" "}
            </label>
            <input
              type="text"
              // onChange={(e) => setPersonImpactedDecision(e.target.value)}
              id="pconcern-input"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="pexpert-input" className="block mb-2 ">
              Personne expertes{" "}
            </label>
            <input
              type="text"
              // onChange={(e) => setPersonExperteDecision(e.target.value)}
              id="pexpert-input"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
        </div>
      </main>
      <button
        type="button"
        onClick={sendEditDecision}
        id="buttonEnvoyerDecision"
        className="bg-red-400 hover:bg-red-500 mt-8 mb-11 text-white font-bold py-2 px-4 rounded-full"
      >
        Envoyer
      </button>
    </div>
  );
}
