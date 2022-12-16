/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import chevronup from "../../assets/icons/chevron-up.svg";
import chevrondown from "../../assets/icons/chevron-down.svg";
import "../../css/user/Accordion.css";

export default function AccordionItem({ faq }) {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { subject, details } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <div className="border-b-2 border-red-pink">
        <button
          type="button"
          className="button flex flex-row "
          onClick={handleToggle}
        >
          <span className="control">
            {clicked ? (
              <img src={chevronup} alt="" />
            ) : (
              <img src={chevrondown} alt="" />
            )}
          </span>
          {subject}
        </button>
      </div>

      {/* The following ternary allows to show the details when the item is active */}
      <div
        ref={contentEl}
        className="answer_wrapper "
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer my-6">{details}</div>
      </div>
    </li>
  );
}
