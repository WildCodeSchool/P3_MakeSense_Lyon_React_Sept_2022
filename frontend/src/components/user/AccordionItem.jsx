/* eslint-disable react/prop-types */
import React from "react";
import chevronup from "../../assets/icons/chevronup.svg";
import chevrondown from "../../assets/icons/chevrondown.svg";

export default function AccordionItem({ faq, onToggle, active }) {
  const { subject, details } = faq;
  return (
    <li className="accordion_item ">
      <div className="border-b-2 border-red-pink">
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
          {subject}
        </button>
      </div>

      {/* The following ternary allows to show the details when the item is active */}
      <div className={`answer_wrapper ${active ? "open" : ""}`}>
        <div className="answer">{details}</div>
      </div>
    </li>
  );
}
