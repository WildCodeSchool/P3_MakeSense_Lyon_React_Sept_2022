import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { useCurrentUserContext } from "../../context/UserContext";
import userimg from "../../assets/icons/user.png";
import edit from "../../assets/icons/edit.svg";

function Comments({
  valuesDetailsDecision,
  urlAvatarStatus,
  comment,
  valueComment,
  setValueComment,
  toggleUpdateDecision,
  handleStatusAgainst,
  handleStatusFor,
  handleStatusNeutral,
  chosenStatusNeutral,
  chosenStatusFor,
  chosenStatusAgainst,
  valueStatus,
}) {
  const [modifyComment, setModifyComment] = useState(false);
  const { user, token } = useCurrentUserContext();
  const decisionIdParam = useParams();

  // Define the date format for comments :
  const dateComment = (date) => {
    return date.slice(2, 10);
  };
  const hourComment = (date) => {
    return date.slice(11, 16);
  };

  const handleCommentEdit = () => {
    setModifyComment(!modifyComment);
    setValueComment(comment.content);
  };
  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["link", "image"],
    ],
  };

  const updateComment = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      content: valueComment,
      vote: valueStatus,
      id: comment.id,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `http://localhost:5000/decision/${decisionIdParam.id}/comments/${comment.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.warn(result);
        toggleUpdateDecision();
        setModifyComment(!modifyComment);
      })
      .catch((error) => console.warn("error", error));
  };

  return (
    <li>
      <div className="flex flex-row">
        <button
          className="mx-4"
          type="button"
          onClick={() =>
            Navigate(`/user-profile/${valuesDetailsDecision.user_id}`)
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
            {comment.user_id === user.id ? (
              <button type="button" onClick={handleCommentEdit}>
                <Link
                  to={`/decision/${decisionIdParam.id}/comments/${comment.id}`}
                  className="flex flex-row items-center"
                >
                  <img src={edit} alt="" className="h-4 mx-2" /> modifier
                </Link>
              </button>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      {modifyComment ? (
        <div>
          <div className="flex flex-row mx-6">
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
            theme="bubble"
            value={valueComment}
            onChange={setValueComment}
            modules={modules}
            className="border-2"
          />
          <button
            type="button"
            onClick={updateComment}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full my-6"
          >
            <Link to={`/decision/${valuesDetailsDecision.id}`}>Valider</Link>
          </button>
        </div>
      ) : (
        <div>
          <ReactQuill
            theme="bubble"
            value={comment.content}
            readOnly
            className="text-xxl"
          />
        </div>
      )}

      <hr className="mt-4 mb-8" />
    </li>
  );
}

export default Comments;
