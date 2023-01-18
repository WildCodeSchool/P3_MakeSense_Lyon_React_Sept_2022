import { useState } from "react";
import ReactQuill from "react-quill";
import chevronup from "../../assets/icons/chevron-up.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import "../../css/user/Accordion.css";
import { useCurrentUserContext } from "../../context/UserContext";
// import UserProfile from "@pages/user/UserProfile";

export default function AccordionDecisionDetails({
  clickedAnswer4,
  setClickedAnswer4,
  valuesDetailsDecision,
}) {
  // array to replace with dynamic data
  const [clickedAnswer1, setClickedAnswer1] = useState(false);
  const [clickedAnswer2, setClickedAnswer2] = useState(false);
  const [clickedAnswer3, setClickedAnswer3] = useState(false);
  const [valueComment, setValueComment] = useState("");
  // const [displayComment, setDisplayComment] = useState("");
  const { token } = useCurrentUserContext();

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
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const commentSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      comment: valueComment,
    });

    fetch(
      `http://localhost:5000/decision/${valuesDetailsDecision.id}/comments`,
      {
        method: "POST",
        redirect: "follow",
        body: raw,
        headers: myHeaders,
      }
    )
      .then((response) => {
        response.json();
      })
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  };

  // useEffect(() => {
  //   const myHeader = new Headers();
  //   myHeader.append("Authorization", `Bearer ${token}`);

  //   const requestOptions = {
  //     headers: myHeader,
  //   };
  //   fetch("http://localhost:5000/decision/:id", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.warn(result))
  //     .catch((error) => console.warn("error", error));
  // }, [token]);

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
                value={valuesDetailsDecision.comments}
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
            <h2 className="mt-8 mb-3 ">Commentaire :</h2>
            <ReactQuill
              theme="snow"
              value={valueComment}
              onChange={setValueComment}
              modules={modules}
            />
            {valuesDetailsDecision?.comments?.map((comment) => (
              <div
                key={comment.id}
                className="commentairesDecision mt-10 text-center border-2 border-black bg-gray-200"
              >
                {console.warn(comment)}
                <p className="font-bold">{comment.firstname} a dit :</p>
                <ReactQuill theme="bubble" value={comment.content} readOnly />
                <div className="text-blue-500">
                  my user_id is {comment.user_id} and my decision_id is{" "}
                  {comment.decision_id}
                </div>
                En date du :
                <span className="text-green-500"> {comment.date_creation}</span>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={commentSubmit}
                id="buttonSendComment"
                className="flex mt-5 bg-red-pink hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full "
              >
                Envoyer
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
