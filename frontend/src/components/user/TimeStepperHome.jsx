import React, { useEffect, useState } from "react";
import "../../css/user/homeUser.css";
import { useTranslation } from "react-i18next";
import circle from "../../assets/icons/circle.svg";
import { useCurrentUserContext } from "../../context/UserContext";
import { useCurrentDarkContext } from "../../context/DarkContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function TimeStepperHome() {
  const { t } = useTranslation();
  const { token } = useCurrentUserContext();
  const { dark } = useCurrentDarkContext();
  const [decisions, setDecisions] = useState([]);
  const dateFormat = (date) => {
    return date.slice(2, 10);
  };

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      post: "GET",
      headers: myHeader,
    };

    fetch(`${backEnd}/decision/last`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDecisions(result))
      .catch((error) => console.warn("error", error));
  }, [token]);

  return (
    <div className="flex flex-col pb-5 pt-5 rounded-xl w-[250px]">
      <h6 className={`text-center mb-5 ${dark ? "text-black" : "text-white"}`}>
        {t("Prochaines décisions")}
      </h6>
      <ul className="flex flex-col ">
        {decisions?.map((data, index) => (
          <li key={index} className="grid grid-cols-7">
            <div className="text-sm text-gray-500 text-right col-span-3">
              {dateFormat(data.date_decision_conflict)}
            </div>

            <div className="mx-2 flex flex-col items-center col-span-1">
              <div>
                <img
                  src={circle}
                  alt=""
                  className="h-2 w-2 
            text-white"
                  z-index="12"
                />
              </div>
              <div>
                <div className="w-0.5 h-14 bg-red-pink" />
              </div>

              <div className="" />
            </div>

            <p
              className={`text-sm  col-span-3 ${
                dark ? "text-dark-blue" : "text-gray-500"
              }`}
            >
              {data.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
