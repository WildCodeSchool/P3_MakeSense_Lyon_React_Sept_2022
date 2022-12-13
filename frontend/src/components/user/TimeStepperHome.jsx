/* eslint-disable react/self-closing-comp */
import React from "react";
import "../../css/user/homeUser.css";

export default function TimeStepperHome() {
  return (
    <div className="timeStepper">
      <h2 className="text-center mt-8">Prochaines échéances</h2>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="mt-10 ml-4 ">15 - oct</p>
          <p className="mt-4 ml-4">15 - oct</p>
          <p className="mt-4 ml-4">15 - oct</p>
          <p className="mt-4 ml-4">15 - oct</p>
        </div>
        <div className="flex flex-col">
          <p className="mt-10 ml-4">Déménager</p>
          <p className="mt-4 ml-4">Surfer</p>
          <p className="mt-4 ml-4">Manger</p>
          <p className="mt-4 ml-4">Recommencer</p>
        </div>
      </div>
    </div>
  );
}
