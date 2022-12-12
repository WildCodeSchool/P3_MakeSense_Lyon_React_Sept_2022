/* eslint-disable import/order */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import logo from "../../assets/logo-makesense.png";
import exit from "../../assets/icons/x.svg";
import target from "../../assets/icons/target.svg";
import "../../css/user/createDecision.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateDecision() {
  const [valueDecision, setValueDecision] = useState("");
  const [valueImpact, setValueImpact] = useState("");
  const [valueBenefice, setValueBenefice] = useState("");
  const [valueRisk, setValueRisk] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateConflict, setStartDateConflict] = useState(new Date());
  const [startDateFinal, setStartDateFinal] = useState(new Date());

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

  return (
    <div>
      <header className="headerDecision">
        <h1>Avatar</h1>
        <h1>Créer une décision</h1>
        <img src={logo} alt="logo-MakeSense" />
      </header>
      <main>
        <button className="exitCreationDecision" type="button">
          <img src={exit} alt="exit" />
        </button>
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
                type="text"
                id="title-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <h2 className="mt-8 mb-3">Description de la décision :</h2>
            <ReactQuill
              theme="snow"
              value={valueDecision}
              onChange={setValueDecision}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Impact sur l'organisation :</h2>
            <ReactQuill
              theme="snow"
              value={valueImpact}
              onChange={setValueImpact}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Bénéfice de la décision :</h2>
            <ReactQuill
              theme="snow"
              value={valueBenefice}
              onChange={setValueBenefice}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Risques potentiels :</h2>
            <ReactQuill
              theme="snow"
              value={valueRisk}
              onChange={setValueRisk}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Deadline pour :</h2>
            <div className="flex items-center max-xl:flex-col xl:justify-between max-xl:gap-y-8">
              <div className="containerDate">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  disabledKeyboardNavigation
                  placeholderText="Donner son avis"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={startDateConflict}
                  onChange={(date) => setStartDateConflict(date)}
                  disabledKeyboardNavigation
                  placeholderText="Rentrer en conflit"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={startDateFinal}
                  onChange={(date) => setStartDateFinal(date)}
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
                id="pexpert-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </main>
      <button
        type="button"
        id="buttonEnvoyerDecision"
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Envoyer
      </button>
    </div>
  );
}
