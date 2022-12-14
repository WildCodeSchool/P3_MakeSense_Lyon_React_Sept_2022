/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function AccordionDecisionDetails() {
  // array to replace with dynamic data
  const faqs = [
    {
      subject: "Lorem ipsum dolor sit amet?",
      details:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      subject: "Dignissimos sequi architecto?",
      details:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      subject: "Voluptas praesentium facere?",
      details:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];
  // State to enable the toggle for the accordion
  const [active, setActive] = useState("0");

  // Function to change the state on click in the accordion item
  const handleToggle = (index) => {
    /* The following condition allows us to close the open item of the accordion when clicking again on it */
    if (active === index) {
      return setActive("0");
    }
    /* The following code enables to open the accordion item the user click on */
    setActive(index);
  };

  return (
    <div>
      <ul className="accordion max-w-screen-md ">
        {faqs.map((faq, index) => (
          <AccordionItem
            onToggle={() => handleToggle(index)}
            active={active === index}
            key={index}
            faq={faq}
          />
        ))}
      </ul>
    </div>
  );
}
