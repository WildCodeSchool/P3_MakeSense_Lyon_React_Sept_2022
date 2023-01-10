/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import "../../css/user/decisionCard.css";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import iconTrash from "../../assets/icons/trash-orange.svg";
import { useCurrentUserContext } from "../../context/UserContext";
import AlertDeleteDecision from "./AlertDeleteDecision";

// import user from "../../assets/icons/user.png";

export default function DecisionCard({
  valueDetailsDecision,
  updateArrayDecisionsAfterDelete,
}) {
  const { user, token } = useCurrentUserContext();
  const convertDateFromApi = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2].split("T")[0];

    return `${day}/${month}/${year}`;
  };
  const [openModalAlertDelete, setOpenModalAlertDelete] = useState(false);
  const [deleteIsConfirm, setdeleteIsConfirm] = useState(false);

  // for alert notification error delete decision after submit
  const notify = () =>
    toast.error(
      "Une erreure est survenue, veuillez recommencer ou contacter l'administrateur du site"
    );

  // function to convert status of decision from API to class name
  const statusForClassname = () => {
    if (valueDetailsDecision.status_decision) {
      return valueDetailsDecision.status_decision
        .replace(" ", "")
        .toLowerCase();
    }
    return "encours";
  };

  const handleDeleteDecision = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    toast
      .promise(
        fetch(`http://localhost:5000/decision/${valueDetailsDecision.id}`, {
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
      .then((result) => {
        console.warn(result);
        updateArrayDecisionsAfterDelete(valueDetailsDecision.id);
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
    <div className="border-2 rounded-xl cardsize p-2">
      <Toaster position="top-center" reverseOrder={false} />
      <AlertDeleteDecision
        openModalAlertDelete={openModalAlertDelete}
        setOpenModalAlertDelete={setOpenModalAlertDelete}
        setdeleteIsConfirm={setdeleteIsConfirm}
      />
      {valueDetailsDecision.user_id === user.id ? (
        <div className="flex justify-between">
          <div className={statusForClassname()} />
          <button type="button" onClick={() => setOpenModalAlertDelete(true)}>
            <div className="wrapForHide flex justify-center flex-row items-center group-hover:opacity-50">
              <span className="spanhidden text-xs text-slate-400">
                Supprimer
              </span>
              <img className="" src={iconTrash} alt="trash" />
            </div>
          </button>
        </div>
      ) : (
        <div className={statusForClassname()} />
      )}
      {valueDetailsDecision ? (
        <NavLink to={`/decision/${valueDetailsDecision.id}`}>
          <p className="p-2 text-center">{valueDetailsDecision.title}</p>
          <p className="text-xs font-thin text-center">
            {convertDateFromApi(valueDetailsDecision.date_decision_creation)}
          </p>
        </NavLink>
      ) : null}
    </div>
  );
}
