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
import { useCurrentUserContext } from "../../context/UserContext";

export default function CreateDecision() {
  const [startDateConflictOfDecision, setStartDateConflictOfDecision] =
    useState(new Date());
  const [startDateFinalOfDecision, setStartDateFinalOfDecision] = useState();
  const [startDateOfDecision, setStartDateOfDecision] = useState(new Date());
  const [valueBeneficeOfDecision, setValueBeneficeOfDecision] = useState("");
  const [valueImpactOfDecision, setValueImpactOfDecision] = useState("");
  const [valueDecision, setValueDecision] = useState();
  const [valueRiskOfDecision, setValueRiskOfDecision] = useState();
  const [title, setTitle] = useState();
  const { user } = useCurrentUserContext();
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

  const sendDecision = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title,
      valueDecision,
      startDateFinalOfDecision,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5005/decision", requestOptions)
      .then((response) => response.json())
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  };

  return (
    <div className="w-screen">
      <div className="flex flex-row items-center justify-beetwen bg-light-grey">
        <div className="flex flex-col">
          <p className="pl-10 pt-3 text-xl">Bonjour {user.firstname}</p>
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : 13 septembre 2023
          </p>
        </div>
        <h1 className="text-2xl text-red-pink pl-40">Créer ta décision</h1>
        <div className="logo-home">
          <img src={logo} alt="logo make-sense" />
        </div>
      </div>
      <form className="mainCreateDecision" onSubmit={sendDecision}>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <h2 className="mt-8 mb-3">Description de la décision :</h2>
            <ReactQuill
              theme="snow"
              value={valueDecision}
              onChange={(e) => setValueDecision(e.target.value)}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Impact sur l'organisation :</h2>
            <ReactQuill
              theme="snow"
              value={valueImpactOfDecision}
              onChange={(e) => setValueImpactOfDecision(e.target.value)}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Bénéfice de la décision :</h2>
            <ReactQuill
              theme="snow"
              value={valueBeneficeOfDecision}
              onChange={(e) => setValueBeneficeOfDecision(e.target.value)}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Risques potentiels :</h2>
            <ReactQuill
              theme="snow"
              value={valueRiskOfDecision}
              onChange={(e) => setValueRiskOfDecision(e.target.value)}
              modules={modules}
            />
            <h2 className="mt-8 mb-3">Deadline pour :</h2>
            <div className="flex items-center max-xl:flex-col xl:justify-between max-xl:gap-y-8">
              <div className="containerDate">
                <DatePicker
                  selected={startDateOfDecision}
                  value={startDateOfDecision}
                  onChange={(e) => setStartDateOfDecision(e.target.value)}
                  disabledKeyboardNavigation
                  placeholderText="Donner son avis"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={startDateConflictOfDecision}
                  onChange={(date) => setStartDateConflictOfDecision(date)}
                  disabledKeyboardNavigation
                  placeholderText="Rentrer en conflit"
                />
              </div>
              <div className="containerDate">
                <DatePicker
                  selected={startDateFinalOfDecision}
                  value={startDateFinalOfDecision}
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

        <button
          type="submit"
          id="buttonEnvoyerDecision"
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
