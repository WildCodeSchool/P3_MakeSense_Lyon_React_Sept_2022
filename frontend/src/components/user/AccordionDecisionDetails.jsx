/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { useState } from "react";
import ReactQuill from "react-quill";
import AccordionItem from "./AccordionItem";

export default function AccordionDecisionDetails() {
  // array to replace with dynamic data
  const faqs = [
    {
      subject: "Détails de la décision",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo elit, gravida eget fermentum nec, fermentum sit amet tortor. Vestibulum id nulla convallis, placerat odio sit amet, rutrum turpis. Ut tincidunt magna ut lacinia accumsan. Suspendisse facilisis molestie accumsan. Curabitur ligula felis, dapibus sed tincidunt ac, facilisis eu dui. Donec at arcu congue, tincidunt nisi ac, varius nunc. Donec vitae placerat lorem, id tincidunt quam. Sed sem felis, sodales non tempus eget, rutrum eu mi. Aliquam consectetur justo et ultricies lacinia. Cras dictum et ligula eget facilisis. Mauris finibus lectus nisi, interdum vulputate risus dictum sed. Fusce id dolor metus. Nam auctor tempus lacus ac interdum. Cras pharetra sem eu lorem iaculis, vitae imperdiet metus consectetur. Nunc varius sed nibh at aliquet.        Cras ac metus dignissim, eleifend massa ut, pretium dui. In auctor tristique nisi, ut venenatis elit molestie in. Proin at nunc dictum sapien tincidunt vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac mi ac lectus maximus scelerisque a eu urna. Morbi feugiat ultricies massa, nec ultrices ligula commodo ut. Morbi sollicitudin id sem pulvinar facilisis. Vestibulum varius iaculis quam, id imperdiet eros sagittis dapibus.        Fusce scelerisque, purus tristique laoreet accumsan, tortor tellus rutrum tellus, ullamcorper euismod massa orci a lorem. Etiam enim libero, iaculis eu facilisis sit amet, molestie at lectus. Curabitur urna est, rutrum id interdum id, posuere ut nisi. Curabitur pretium feugiat finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Nullam euismod consequat blandit. Integer efficitur ligula sit amet risus commodo, non maximus elit semper. Fusce efficitur ut libero ut varius. Donec faucibus metus a nisl malesuada, et feugiat leo sagittis. Sed non ultricies arcu, quis sodales lacus. In non tempor sapien, ut lacinia erat. Mauris vitae laoreet ante.",
    },
    {
      subject: "Risque potentiel  ⚠️",
      details:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      subject: "Bénéfices 👍",
      details:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      subject: "Commentaires 💬",
      details:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  const [valueComment, setValueComment] = useState("");

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
      <ul className="accordion max-w-screen-md mt-10">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </ul>
      <h2 className="mt-8 mb-3">Description de la décision :</h2>
      <ReactQuill
        theme="snow"
        value={valueComment}
        onChange={setValueComment}
        modules={modules}
      />
    </div>
  );
}
