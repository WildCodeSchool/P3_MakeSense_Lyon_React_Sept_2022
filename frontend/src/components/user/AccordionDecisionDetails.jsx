/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function AccordionDecisionDetails() {
  // create an array of objects with the id, trigger element (eg. button), and the content element
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Voluptas praesentium facere?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  const [active, setActive] = useState("0");
  const handleToggle = (index) => {
    if (active === index) {
      return setActive("0");
    }
    setActive(index);
  };

  return (
    <div>
      <ul className="accordion">
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
