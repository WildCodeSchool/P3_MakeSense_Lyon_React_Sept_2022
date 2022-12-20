/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { useState } from "react";
import ReactQuill from "react-quill";
import chevronup from "../../assets/icons/chevron-up.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import "../../css/user/Accordion.css";

export default function AccordionDecisionDetails() {
  // array to replace with dynamic data

  const [valueComment, setValueComment] = useState("");
  const [clickedAnswer1, setClickedAnswer1] = useState(false);
  const [clickedAnswer2, setClickedAnswer2] = useState(false);
  const [clickedAnswer3, setClickedAnswer3] = useState(false);
  const [clickedAnswer4, setClickedAnswer4] = useState(false);

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              totam natus assumenda placeat ex vel, omnis et corrupti eius! Ut
              asperiores adipisci, vero, officia ullam reiciendis ex expedita
              accusantium autem, fuga aspernatur optio pariatur. Aliquam est
              alias aspernatur accusantium placeat, eius tempore quam voluptatum
              mollitia, labore voluptate. Distinctio, autem beatae. Earum nemo,
              impedit aliquid, deleniti magnam, harum delectus molestias
              perspiciatis laudantium laborum optio mollitia esse pariatur natus
              eligendi aperiam maiores. Inventore itaque non quod, eaque ullam
              voluptatibus illum fugiat quisquam eligendi odio maiores facilis.
              Autem corporis incidunt eveniet sint, consequuntur dolore
              veritatis explicabo reprehenderit. Rerum tempora provident placeat
              excepturi deleniti.
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
              <h2>Risque potentiel</h2>
            </button>
          </div>

          {/* The following ternary allows to show the details when the item is active */}
          <div
            className="answer_wrapper "
            style={clickedAnswer2 ? { height: "auto" } : { height: "0px" }}
          >
            <div className="answer my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              totam natus assumenda placeat ex vel, omnis et corrupti eius! Ut
              asperiores adipisci, vero, officia ullam reiciendis ex expedita
              accusantium autem, fuga aspernatur optio pariatur. Aliquam est
              alias aspernatur accusantium placeat, eius tempore quam voluptatum
              mollitia, labore voluptate. Distinctio, autem beatae. Earum nemo,
              impedit aliquid, deleniti magnam, harum delectus molestias
              perspiciatis laudantium laborum optio mollitia esse pariatur natus
              eligendi aperiam maiores. Inventore itaque non quod, eaque ullam
              voluptatibus illum fugiat quisquam eligendi odio maiores facilis.
              Autem corporis incidunt eveniet sint, consequuntur dolore
              veritatis explicabo reprehenderit. Rerum tempora provident placeat
              excepturi deleniti.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              totam natus assumenda placeat ex vel, omnis et corrupti eius! Ut
              asperiores adipisci, vero, officia ullam reiciendis ex expedita
              accusantium autem, fuga aspernatur optio pariatur. Aliquam est
              alias aspernatur accusantium placeat, eius tempore quam voluptatum
              mollitia, labore voluptate. Distinctio, autem beatae. Earum nemo,
              impedit aliquid, deleniti magnam, harum delectus molestias
              perspiciatis laudantium laborum optio mollitia esse pariatur natus
              eligendi aperiam maiores. Inventore itaque non quod, eaque ullam
              voluptatibus illum fugiat quisquam eligendi odio maiores facilis.
              Autem corporis incidunt eveniet sint, consequuntur dolore
              veritatis explicabo reprehenderit. Rerum tempora provident placeat
              excepturi deleniti.
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
            <h2 className="mt-8 mb-3">Commentaire :</h2>
            <ReactQuill
              theme="snow"
              value={valueComment}
              onChange={setValueComment}
              modules={modules}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
