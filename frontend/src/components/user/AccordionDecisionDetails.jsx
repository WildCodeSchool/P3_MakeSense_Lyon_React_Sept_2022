/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import chevronup from "../../assets/icons/chevron-up.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import userimg from "../../assets/icons/user.png";
import "../../css/user/Accordion.css";
import { useCurrentUserContext } from "../../context/UserContext";

export default function AccordionDecisionDetails({
  clickedAnswer4,
  setClickedAnswer4,
  valuesDetailsDecision,
  setValuesDetailsDecision,
  urlAvatarStatus,
}) {
  const [clickedAnswer1, setClickedAnswer1] = useState(false);
  const [clickedAnswer2, setClickedAnswer2] = useState(false);
  const [clickedAnswer3, setClickedAnswer3] = useState(false);
  const [valueComment, setValueComment] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [chosenStatusNeutral, setChosenStatusNeutral] = useState(false);
  const [chosenStatusFor, setChosenStatusFor] = useState(false);
  const [chosenStatusAgainst, setChosenStatusAgainst] = useState(false);
  const { user, token } = useCurrentUserContext();
  const idParam = useParams();

  const handleToggle1 = () => {
    setClickedAnswer1((prev) => !prev);
  };
  const handleToggle2 = () => {
    setClickedAnswer2((prev) => !prev);
  };
  const handleToggle3 = () => {
    setClickedAnswer3((prev) => !prev);
  };
  const handleToggle4 = () => {
    setClickedAnswer4((prev) => !prev);
  };

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

  // Define the date format for comments :
  const dateComment = (date) => {
    return date.slice(2, 10);
  };
  const hourComment = (date) => {
    return date.slice(11, 16);
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

    fetch(`http://localhost:5000/decision/${idParam.id}/comments`, {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((comment) => {
        console.warn("test ", comment);
        setValuesDetailsDecision({
          ...valuesDetailsDecision,
          comments: [...valuesDetailsDecision.comments, comment],
        });
      })
      .catch((error) => console.warn("error", error));
  }

  const handleStatusNeutral = () => {
    setValueStatus("Neutre");
    setChosenStatusNeutral(!chosenStatusNeutral);
  };

  const handleStatusFor = () => {
    setValueStatus("Pour");
    setChosenStatusFor(!chosenStatusFor);
  };

  const handleStatusAgainst = () => {
    setValueStatus("Contre");
    setChosenStatusAgainst(!chosenStatusAgainst);
  };

  return (
    <div>
      <ul className="accordion max-w-screen-md mt-10 h-auto">
        <li className={`accordion_item ${clickedAnswer1 ? "active" : ""}`}>
          <div className="border-b-2 border-red-pink py-4">
            <button
              type="button"
              className="button flex flex-row "
              onClick={handleToggle1}
            >
              <span className="control">
                {clickedAnswer1 ? (
                  <img src={chevronup} alt="" />
                ) : (
                  <img src={chevrondown} alt="" />
                )}
              </span>
              <h2>Détails de la décision</h2>
            </button>
          </div>

          {/* The following ternary allows to show the details when the item is active */}
          <div
            className="answer_wrapper"
            style={clickedAnswer1 ? { height: "auto" } : { height: "0px" }}
          >
            <div className="answer my-6">
              <ReactQuill
                theme="bubble"
                value={valuesDetailsDecision.content}
                readOnly
              />
            </div>
          </div>
        </li>

        <li className={`accordion_item ${clickedAnswer2 ? "active" : ""}`}>
          <div className="border-b-2 border-red-pink py-4">
            <button
              type="button"
              className="button flex flex-row "
              onClick={handleToggle2}
            >
              <span className="control">
                {clickedAnswer2 ? (
                  <img src={chevronup} alt="" />
                ) : (
                  <img src={chevrondown} alt="" />
                )}
              </span>
              <h2>Risque potentiel & impact</h2>
            </button>
          </div>

          {/* The following ternary allows to show the details when the item is active */}
          <div
            className="answer_wrapper "
            style={clickedAnswer2 ? { height: "auto" } : { height: "0px" }}
          >
            <div className="answer my-6">
              <h3>Risque potentiel :</h3>
              <ReactQuill
                theme="bubble"
                value={valuesDetailsDecision.risk}
                readOnly
              />
              <hr className="border-red-pink my-6" />
              <h3>Impact :</h3>
              <ReactQuill
                theme="bubble"
                value={valuesDetailsDecision.impact}
                readOnly
              />
            </div>
          </div>
        </li>

        <li className={`accordion_item ${clickedAnswer3 ? "active" : ""}`}>
          <div className="border-b-2 border-red-pink py-4">
            <button
              type="button"
              className="button flex flex-row "
              onClick={handleToggle3}
            >
              <span className="control">
                {clickedAnswer3 ? (
                  <img src={chevronup} alt="" />
                ) : (
                  <img src={chevrondown} alt="" />
                )}
              </span>
              <h2>Bénéfices</h2>
            </button>
          </div>

          {/* The following ternary allows to show the details when the item is active */}
          <div
            className="answer_wrapper "
            style={clickedAnswer3 ? { height: "auto" } : { height: "0px" }}
          >
            <div className="answer my-6">
              <ReactQuill
                theme="bubble"
                value={valuesDetailsDecision.benefits}
                readOnly
              />
            </div>
          </div>
        </li>

        <li className={`accordion_item ${clickedAnswer4 ? "active" : ""}`}>
          <div className="border-b-2 border-red-pink py-4">
            <button
              type="button"
              className="button flex flex-row "
              onClick={handleToggle4}
            >
              <span className="control">
                {clickedAnswer4 ? (
                  <img src={chevronup} alt="" />
                ) : (
                  <img src={chevrondown} alt="" />
                )}
              </span>
              <h2>Commentaires</h2>
            </button>
          </div>

          {/* The following ternary allows to show the details when the item is active */}
          <div
            className="answer_wrapper "
            style={clickedAnswer4 ? { height: "auto" } : { height: "0px" }}
          >
            <div className="flex flex-row mx-6">
              <h2 className="mt-8 mb-3">Commentaire :</h2>
              <button
                type="button"
                onClick={handleStatusNeutral}
                className={`ml-10 flex items-center justify-center mt-5 h-10 pl-2 pr-2 rounded-3xl w-20 ${
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
                className={`ml-10 flex items-center justify-center mt-5 h-10 pl-2 pr-2 rounded-3xl w-20 ${
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
                className={`ml-10 flex items-center justify-center mt-5 h-10 pl-2 pr-2 rounded-3xl w-20 ${
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
              onChange={setValueComment}
              modules={modules}
            />
            {/* when this button is clicked it enables the addComment function */}
            <div className="flex flex-row justify-between">
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
                {valuesDetailsDecision.comments?.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <div className="flex flex-row">
                        <button
                          className="mx-4"
                          type="button"
                          onClick={() =>
                            Navigate(
                              `/user-profile/${valuesDetailsDecision.user_id}`
                            )
                          }
                        >
                          <img
                            className="w-10 h-10 rounded-full hover:opacity-25 transition ease-in-out delay-50 "
                            src={
                              urlAvatarStatus?.status === 200
                                ? `http://localhost:5000/avatar/${comment?.avatar}`
                                : userimg
                            }
                            alt={`avatar${comment.firstname}`}
                          />
                        </button>
                        <div className="flex flex-col">
                          <p className="mx-4 text-l font-bold ">
                            {comment.firstname} {comment.lastname}
                          </p>

                          <p className="text-sm text-slate-500 mx-4 flex flex-row">
                            {dateComment(comment.date_creation)} &nbsp;
                            {hourComment(comment.date_creation)}&nbsp;
                            <p
                              className={`mx-4 font-semibold ${
                                comment.vote === "Pour"
                                  ? "text-light-green"
                                  : comment.vote === "Contre"
                                  ? "text-red-pink"
                                  : "text-light-blue"
                              } `}
                            >
                              - {comment.vote}
                            </p>
                          </p>
                        </div>
                      </div>

                      <ReactQuill
                        theme="bubble"
                        value={comment.content}
                        readOnly
                        className="text-xxl"
                      />
                      <hr className="mt-4 mb-8" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
