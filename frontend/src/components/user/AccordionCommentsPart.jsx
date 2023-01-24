import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { useCurrentUserContext } from "../../context/UserContext";
import Comments from "./Comments";

function AccordionCommentsPart({
  toggleUpdateDecision,
  urlAvatarStatus,
  valuesDetailsDecision,
}) {
  const [valueComment, setValueComment] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [chosenStatusNeutral, setChosenStatusNeutral] = useState(false);
  const [chosenStatusFor, setChosenStatusFor] = useState(false);
  const [chosenStatusAgainst, setChosenStatusAgainst] = useState(false);
  const { user, token } = useCurrentUserContext();
  const idParam = useParams();
  const backEnd = import.meta.env.VITE_BACKEND_URL;

  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
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

  // This addComment function is used to add comments to the database in the comment table when a user send a new comment on a decision.
  // It also sends the new comment to th front so it is automatically displayed
  function addComment() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      content: valueComment,
      vote: valueStatus,
      user_id: user.id,
      date_creation: dateConvertedToSqlFormat(Date.now()),
      decision_id: valuesDetailsDecision.id,
    });

    fetch(`${backEnd}/decision/${idParam.id}/comments`, {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((comment) => {
        console.warn(comment);
        toggleUpdateDecision();
        setValueComment(" ");
      })
      .catch((error) => console.warn("error", error));
  }

  const handleStatusNeutral = () => {
    setValueStatus("Neutre");
    setChosenStatusNeutral(!chosenStatusNeutral);
    setChosenStatusFor(false);
    setChosenStatusAgainst(false);
  };

  const handleStatusFor = () => {
    setValueStatus("Pour");
    setChosenStatusFor(!chosenStatusFor);
    setChosenStatusNeutral(false);
    setChosenStatusAgainst(false);
  };

  const handleStatusAgainst = () => {
    setValueStatus("Contre");
    setChosenStatusAgainst(!chosenStatusAgainst);
    setChosenStatusFor(false);
    setChosenStatusNeutral(false);
  };

  return (
    <div>
      <div className="flex flex-row mx-6 items-center">
        <h2 className="mt-4 mb-3">Commentaire :</h2>
        <button
          type="button"
          onClick={handleStatusNeutral}
          className={`h-5 ml-2  md:ml-10 flex items-center justify-center mt-5 md:h-10 pl-2 pr-2 rounded-3xl w-20 mb-4 ${
            chosenStatusAgainst === false &&
            chosenStatusFor === false &&
            chosenStatusNeutral === true
              ? "bg-light-blue text-white "
              : "border-2 border-light-blue text-light-blue"
          }`}
        >
          Neutre
        </button>
        <button
          type="button"
          onClick={handleStatusFor}
          className={`h-5 ml-2 md:ml-10 flex items-center justify-center mt-5 md:h-10 pl-2 pr-2 rounded-3xl w-20 mb-4 ${
            chosenStatusNeutral === false &&
            chosenStatusAgainst === false &&
            chosenStatusFor === true
              ? "bg-light-green text-white "
              : "border-2 border-light-green text-light-green"
          }`}
        >
          Pour
        </button>
        <button
          type="button"
          onClick={handleStatusAgainst}
          className={`h-5 ml-2 md:ml-10 flex items-center justify-center mt-5 md:h-10 pl-2 pr-2 rounded-3xl w-20 mb-4 ${
            chosenStatusNeutral === false &&
            chosenStatusFor === false &&
            chosenStatusAgainst === true
              ? "bg-red-pink text-white "
              : "border-2 border-red-pink text-red-pink"
          }`}
        >
          Contre
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={valueComment}
        onChange={(value) => setValueComment(value)}
        modules={modules}
      />

      {/* when this button is clicked it enables the addComment function */}
      <div className="flex flex-row justify-between mr-4">
        <div> </div>
        <button
          type="button"
          onClick={addComment}
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full my-6"
        >
          Envoyer
        </button>
      </div>
      {/* display comments */}
      <div className="my-6">
        <ul>
          {valuesDetailsDecision.comments?.map((comment) => (
            <Comments
              key={comment.id}
              valuesDetailsDecision={valuesDetailsDecision}
              urlAvatarStatus={urlAvatarStatus}
              comment={comment}
              valueComment={valueComment}
              setValueComment={setValueComment}
              toggleUpdateDecision={toggleUpdateDecision}
              handleStatusAgainst={handleStatusAgainst}
              handleStatusFor={handleStatusFor}
              handleStatusNeutral={handleStatusNeutral}
              chosenStatusNeutral={chosenStatusNeutral}
              chosenStatusFor={chosenStatusFor}
              chosenStatusAgainst={chosenStatusAgainst}
              valueStatus={valueStatus}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AccordionCommentsPart;
