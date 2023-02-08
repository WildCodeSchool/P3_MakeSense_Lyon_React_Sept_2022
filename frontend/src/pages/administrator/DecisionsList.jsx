import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import LogoWhite from "../../assets/make_sense_white.png";
import { useCurrentUserContext } from "../../context/UserContext";
import Logo from "../../assets/logo-makesense.png";
import "../../css/administrator/decisionList.css";
import Paginate from "../../components/user/Paginate";
import { useCurrentDarkContext } from "../../context/DarkContext";
import AlertDeleteDecision from "../../components/user/AlertDeleteDecision";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function DecisionsList() {
  const { user, token } = useCurrentUserContext();
  const [valuesDetailsDecisions, setValuesDetailsDecisions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDecisions, setTotalDecisions] = useState();
  const [openModalAlertDelete, setOpenModalAlertDelete] = useState(false);
  const [deleteIsConfirm, setdeleteIsConfirm] = useState(false);
  const [idDecisionToDelete, setIdDecisionToDelete] = useState();
  const { dark } = useCurrentDarkContext();
  const { t } = useTranslation();

  const convertDate = (date) => {
    const dateParse = Date.parse(`${date}`);
    const dateConvert = new Date(dateParse);
    return dateConvert.toLocaleDateString();
  };

  // decision per page fix for now
  const decisionPerPage = 20;

  // Get current page depending of paginate component
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get previous page depending of paginate component
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get next page depending of paginate component
  const nextPage = () => {
    if (currentPage !== Math.ceil(totalDecisions / decisionPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(
      `${backEnd}/decision/listadminbypage?decisionPerPage=${decisionPerPage}&currentPage=${currentPage}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValuesDetailsDecisions(result.rows);
        setTotalDecisions(result.nbDecision.nbDecision);
      })
      .catch((error) => console.warn("error", error));
  }, [token, currentPage, decisionPerPage]);

  // for alert notification error delete decision after submit
  const notify = () =>
    toast.error(
      "Une erreure est survenue, veuillez recommencer ou contacter l'administrateur du site"
    );

  // function to update the array of decisions after delete one decision
  const updateArrayDecisionsAfterDelete = (idDecisions) => {
    valuesDetailsDecisions.forEach((element, idD) => {
      if (element.decisionId === idDecisions) {
        valuesDetailsDecisions.splice(idD, 1);
      }
    });
    setValuesDetailsDecisions([...valuesDetailsDecisions]);
  };

  const handleDeleteDecision = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    toast
      .promise(
        fetch(`${backEnd}/decision/${idDecisionToDelete}`, {
          method: "delete",
          redirect: "follow",
          headers: myHeaders,
        }),
        {
          loading: "Suppression en cours",
          success: "La supression a bien été transmise",
          error:
            "Une erreur sur le serveur est survenue lors de la suppression",
        }
      )
      .then((response) => {
        if (response.status !== 204) {
          console.warn("error", response.status);
          notify();
        }
      })
      .then(() => {
        updateArrayDecisionsAfterDelete(idDecisionToDelete);
      })
      .catch((error) => console.warn("error", error));
  };

  useEffect(() => {
    if (deleteIsConfirm) {
      setOpenModalAlertDelete(false);
      handleDeleteDecision();
    } else {
      setdeleteIsConfirm(false);
    }
  }, [deleteIsConfirm]);

  return (
    <div
      className={`w-screen z-0${
        dark ? "text-black" : "text-white bg-dark-header"
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <AlertDeleteDecision
        openModalAlertDelete={openModalAlertDelete}
        setOpenModalAlertDelete={setOpenModalAlertDelete}
        setdeleteIsConfirm={setdeleteIsConfirm}
      />
      <div
        className={`flex flex-row items-center justify-between bg-light-grey ${
          dark
            ? "text-black"
            : "text-white bg-dark-header border-b-2 border-dark-bg"
        }`}
      >
        {" "}
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">{t("Liste des décisions")} </p>
          ) : (
            <p className="pl-10 pt-3 text-xl">{t("Bonjour home")}</p>
          )}
          <p className="pl-10 text-x font-extralight">
            {t("Nous sommes le")} : {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="logo-home">
          {dark ? (
            <img src={Logo} alt="logo make-sense" />
          ) : (
            <img src={LogoWhite} alt="logo make-sense" />
          )}
        </div>
      </div>
      <table className="mt-12 mx-auto">
        <thead>
          <tr
            className={`mt-12 text-center ${
              dark ? "bg-white" : "bg-dark-header text-white"
            }`}
          >
            <th className="w-auto p-2">{t("Supprimer")}</th>
            <th className="w-auto p-2">{t("Auteur")}</th>
            <th className="w-auto p-2">{t("Concerné")}</th>
            <th className="w-auto p-2">{t("Expert")}</th>
            <th className="w-auto p-2">{t("Titre de la décision")}</th>
            <th className="w-auto p-2">{t("Date de création")}</th>
            <th className="w-auto p-2">{t("Date de finalisation")}</th>
            <th className="w-auto p-2">{t("Status")}</th>
          </tr>
        </thead>
        <tbody>
          {valuesDetailsDecisions.map((decision) => (
            <tr
              className={
                decision.decisionId % 2 === 1
                  ? `${
                      dark
                        ? "bg-gray-200 border-gray-400"
                        : "bg-dark-bg border-gray-400 text-white"
                    }`
                  : `${
                      dark
                        ? "bg-white border-gray-400"
                        : "bg-dark-header border-gray-400 text-white"
                    }`
              }
            >
              <td className="w-auto border-b-2 border-gray-400 text-center ">
                <button
                  type="button"
                  className="pt-1"
                  onClick={() => {
                    setIdDecisionToDelete(decision.decisionId);
                    setOpenModalAlertDelete(true);
                  }}
                >
                  <BsTrash />
                </button>
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {decision.firstname} {decision.lastname}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {decision.personConcerne.map((pconcerne) => (
                  <>
                    {pconcerne.firstname} {pconcerne.lastname}
                    <br />
                  </>
                ))}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {decision.personExpert.map((pexpert) => (
                  <>
                    {pexpert.firstname} {pexpert.lastname}
                    <br />
                  </>
                ))}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {decision.title}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {convertDate(decision.date_decision_creation)}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {convertDate(decision.date_decision_conflict)}
              </td>
              <td className="w-auto p-2 border-b-2 border-gray-400">
                {decision.status_decision}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:ml-6 mb-16 mt-7">
        <Paginate
          decisionPerPage={decisionPerPage}
          totalDecisions={totalDecisions}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
}
