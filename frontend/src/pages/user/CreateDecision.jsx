/* eslint-disable camelcase */
/* eslint-disable import/order */
import { React, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import target from "../../assets/icons/target.svg";
import "../../css/user/createDecision.css";
import Close from "../../assets/icons/x.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.bubble.css";
import { useCurrentUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-makesense.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import toast, { Toaster } from "react-hot-toast";

export default function CreateDecision() {
  const { user, token } = useCurrentUserContext();
  const [title, setTitleDecision] = useState("");
  const [content, setValueDecision] = useState("");
  const [impact, setValueImpactOfDecision] = useState("");
  const [benefits, setValueBenefitsOfDecision] = useState("");
  const [risk, setValueRiskOfDecision] = useState("");
  const [date_decision_conflict, setStartDateConflictOfDecision] = useState(
    new Date()
  );
  const [personImpactedDecision, setPersonImpactedDecision] = useState([]);
  const [personExperteDecision, setPersonExperteDecision] = useState([]);
  const [choosePersonExpert, setChoosePersonExpert] = useState([]);
  const [choosePersonConcern, setChoosePersonConcern] = useState([]);
  const navigate = useNavigate();

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

  const modulesmobile = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["link", "image"],
    ],
  };

  // for alert notification error edit decision after submit
  const notify = () =>
    toast.error(
      "Une erreure est survenue, veuillez vérifier que vous avez bien rempli tous les champs"
    );

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

  // This is for Send Decision
  function sendDecision() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title,
      content,
      impact,
      risk,
      benefits,
      date_decision_creation: dateConvertedToSqlFormat(Date.now()),
      date_decision_conflict: dateConvertedToSqlFormat(date_decision_conflict),
      status_decision: "En cours",
      user_id: user.id,
      person_expert: choosePersonExpert,
      person_concern: choosePersonConcern,
      notif: choosePersonConcern,
    });
    toast
      .promise(
        fetch("http://localhost:5000/decision", {
          method: "POST",
          redirect: "follow",
          body: raw,
          headers: myHeaders,
        }),
        {
          loading: "Envoi en cours",
          success: "Décision envoyée",
          error:
            "Une erreur sur le serveur est survenue lors de l'envoi de la décision",
        }
      )
      .then((response) => {
        response.json();
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          notify();
        }
      })
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  }

  // This is for GET user by name for input autocomplete
  const handleChange = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:5000/user/byname`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPersonExperteDecision(result);
        setPersonImpactedDecision(result);
      })
      .catch((error) => console.warn("error", error));
  };

  const handleDeleteExpert = (index) => {
    const newList = choosePersonExpert.filter((_, i) => i !== index);
    setChoosePersonExpert(newList);
  };

  const handleDeleteConcern = (index) => {
    const newList = choosePersonConcern.filter((_, i) => i !== index);
    setChoosePersonConcern(newList);
  };

  return (
    <div className="w-screen">
      <Toaster position="top-center" reverseOrder={false} />
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
        <h1 className="text-2xl text-red-pink">Créer une décision</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <main className="mainCreateDecision">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="hidden md:block row-span-3 ...">
            <p className="mt-20 decision-resume">
              <img src={target} alt="targeticon" />
              Décision
            </p>
            <p className="decision-explaination">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              totam natus assumenda placeat ex vel, omnis et corrupti eius! Ut
              asperiores adipisci, vero
            </p>
          </div>
          <div className="col-span-2 ...">
            <div className="mt-14 mb-6">
              <label htmlFor="title-input" className="block mb-2">
                Titre de la décision{" "}
              </label>
              <input
                onChange={(e) => setTitleDecision(e.target.value)}
                type="text"
                value={title}
                id="title-input"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="hidden md:block">
              <h2 className="mt-8 mb-3">Description de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setValueDecision}
                modules={modules}
              />
            </div>

            <div className="hidden md:block">
              <h2 className="mt-8 mb-3">Impact sur l'organisation :</h2>
              <ReactQuill
                theme="snow"
                value={impact}
                onChange={setValueImpactOfDecision}
                modules={modules}
              />
            </div>

            <div className="hidden md:block">
              <h2 className="mt-8 mb-3">Bénéfice de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={benefits}
                onChange={setValueBenefitsOfDecision}
                modules={modules}
              />
            </div>

            <div className="hidden md:hidden">
              <h2 className="mt-8 mb-3">Risques potentiels de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={risk}
                onChange={setValueRiskOfDecision}
                modules={modules}
              />
            </div>

            <div className="md:hidden">
              <h2 className="mt-8 mb-3">Description de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setValueDecision}
                modules={modulesmobile}
              />
            </div>

            <div className="md:hidden">
              <h2 className="mt-8 mb-3">Impact sur l'organisation :</h2>
              <ReactQuill
                theme="snow"
                value={impact}
                onChange={setValueImpactOfDecision}
                modules={modulesmobile}
              />
            </div>

            <div className="md:hidden">
              <h2 className="mt-8 mb-3">Bénéfice de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={benefits}
                onChange={setValueBenefitsOfDecision}
                modules={modulesmobile}
              />
            </div>

            <div className="md:hidden">
              <h2 className="mt-8 mb-3">Risques potentiels de la décision :</h2>
              <ReactQuill
                theme="snow"
                value={risk}
                onChange={setValueRiskOfDecision}
                modules={modulesmobile}
              />
            </div>

            <h2 className="mt-8 mb-3">Date finale de la décision :</h2>
            <div className="flex items-center max-xl:flex-col xl:justify-between max-xl:gap-y-8">
              <div className="containerDate">
                <DatePicker
                  selected={date_decision_conflict}
                  onChange={(date) => setStartDateConflictOfDecision(date)}
                  disabledKeyboardNavigation
                  placeholderText="Donner son avis"
                />
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="pconcern-input" className="block mb-2">
                Personnes impactées{" "}
              </label>
              <ReactSearchAutocomplete
                items={personImpactedDecision}
                onFocus={handleChange}
                onSelect={(newChoosePersonConcern) =>
                  setChoosePersonConcern((person) => [
                    ...person,
                    newChoosePersonConcern,
                  ])
                }
                styling={{ zIndex: 3 }}
                maxResults={15}
              />
              {/* this is for display expert person */}
              <ul className="m-3">
                {choosePersonConcern?.map((person, index) => (
                  <li key={person.id} className="flex flex-row">
                    {person.name}
                    <button
                      type="button"
                      onClick={() => handleDeleteConcern(index)}
                    >
                      <img src={Close} alt="supprimer" className="w-4 ml-2" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <label htmlFor="pexpert-input" className="block mb-2">
                Personne expertes{" "}
              </label>
              <ReactSearchAutocomplete
                items={personExperteDecision}
                onFocus={handleChange}
                onSelect={(newChoosePersonExpert) =>
                  setChoosePersonExpert((person) => [
                    ...person,
                    newChoosePersonExpert,
                  ])
                }
                maxResults={15}
              />
              <ul className="m-3">
                {choosePersonExpert?.map((person, index) => (
                  <li key={person.id} className="flex flex-row">
                    {person.name}
                    <button
                      type="button"
                      onClick={() => handleDeleteExpert(index)}
                    >
                      <img src={Close} alt="supprimer" className="w-4 ml-2" />
                    </button>
                  </li>
                ))}
              </ul>
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
