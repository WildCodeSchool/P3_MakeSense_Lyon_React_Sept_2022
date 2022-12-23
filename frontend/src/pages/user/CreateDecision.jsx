/* eslint-disable camelcase */
/* eslint-disable import/order */
import { React, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import logo from "../../assets/logo-makesense.png";
import target from "../../assets/icons/target.svg";
import "../../css/user/createDecision.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.bubble.css";

export default function CreateDecision() {
  const [title, setTitleDecision] = useState("");
  const [content, setValueDecision] = useState("");
  const [impact, setValueImpactOfDecision] = useState("");
  const [benefice, setValueBeneficeOfDecision] = useState("");
  const [risk, setValueRiskOfDecision] = useState("");
  const [date_decision_creation, setStartDateOfDecision] = useState(Date.now());
  const [date_decision_conflict, setStartDateConflictOfDecision] = useState(
    new Date()
  );
  const [date_decision_close, setStartDateFinalOfDecision] = useState(
    new Date()
  );
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

  function sendDecision() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title,
      content,
      impact,
      risk,
      date_decision_creation: dateConvertedToSqlFormat(date_decision_creation),
      date_decision_conflict: dateConvertedToSqlFormat(date_decision_conflict),
      date_decision_close: dateConvertedToSqlFormat(date_decision_close),
    });

    fetch("http://localhost:5000/decision", {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
    console.warn(raw);
  }

  return (
    <div className="w-screen">
      <header className="headerDecision pl-10 ">
        <h1>Créer une décision</h1>
        <img src={logo} alt="logo-MakeSense" />
      </header>
      <main className="mainCreateDecision">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="row-span-3 ...">
            <p className="mt-20 decision-resume">
              <img src={target} alt="targeticon" />
              Décision
            </p>
            <p className="decision-explaination">
              Lorem ipsum bla bla la Lorem ipsum bla bla la Lorem ipsum bla bla
              la Lorem ipsum bla bla la Lorem ipsum bla bla la
            </p>
          </div>
          <div className="col-span-2 ...">
            <div className="mt-14 mb-6">
              <label
                htmlFor="title-input"
                className="block mb-2 dark:text-white"
              >
                Titre de la décision{" "}
              </label>
              <input
                onChange={(e) => setTitleDecision(e.target.value)}
                type="text"
                id="title-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              value={benefice}
              onChange={setValueBeneficeOfDecision}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Risques potentiels :</h2>
            <ReactQuill
              theme="snow"
              value={risk}
              onChange={setValueRiskOfDecision}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Deadline pour :</h2>
            <div className="flex items-center max-xl:flex-col xl:justify-between max-xl:gap-y-8">
              <div className="containerDate">
                <DatePicker
                  selected={date_decision_creation}
                  onChange={(date) => setStartDateOfDecision(date)}
                  disabledKeyboardNavigation
                  placeholderText="Donner son avis"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={date_decision_conflict}
                  onChange={(date) => setStartDateConflictOfDecision(date)}
                  disabledKeyboardNavigation
                  placeholderText="Rentrer en conflit"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={date_decision_close}
                  onChange={(date) => setStartDateFinalOfDecision(date)}
                  disabledKeyboardNavigation
                  placeholderText="Décision final"
                />
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="pconcern-input"
                className="block mb-2 dark:text-white"
              >
                Personnes impactées{" "}
              </label>
              <input
                type="text"
                // onChange={(e) => setPersonImpactedDecision(e.target.value)}
                id="pconcern-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="pexpert-input"
                className="block mb-2 dark:text-white"
              >
                Personne expertes{" "}
              </label>
              <input
                type="text"
                // onChange={(e) => setPersonExperteDecision(e.target.value)}
                id="pexpert-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </main>
      <button
        type="button"
        onClick={sendDecision}
        id="buttonEnvoyerDecision"
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Envoyer
      </button>
    </div>
  );
}
