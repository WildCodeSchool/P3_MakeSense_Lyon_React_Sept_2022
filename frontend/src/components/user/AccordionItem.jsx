/* eslint-disable react/prop-types */
import React from "react";
import chevronup from "../../assets/icons/chevronup.svg";
import chevrondown from "../../assets/icons/chevrondown.svg";

export default function AccordionItem({ faq, onToggle, active }) {
  const { question, answer } = faq;
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button
        type="button"
        className="button flex flex-row "
        onClick={onToggle}
      >
        <span className="control">
          {active ? (
            <img src={chevronup} alt="" />
          ) : (
            <img src={chevrondown} alt="" />
          )}
        </span>
        {question}
      </button>
      <div className={`answer_wrapper ${active ? "open" : ""}`}>
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
}
