/* eslint-disable react/self-closing-comp */
import React from "react";

export default function HeaderCountryChoice() {
  return (
    <div className="h-14 sm:h-12 md:h-8 w-screen flex items-center bg-light-grey justify-between">
      <div className="flex items-center">
        <div className="h-3 w-6 bg-dark-blue rounded-md ml-10 sm:ml-20"></div>
        <div className="ml-8">Changer de pays</div>
      </div>

      <div className="flex justify-end">
        <p className="mr-4 font-extrabold">FR </p>
        <p className="mr-4">EN </p>
        <p className="mr-10 sm:mr-20">ES </p>
      </div>
    </div>
  );
}
