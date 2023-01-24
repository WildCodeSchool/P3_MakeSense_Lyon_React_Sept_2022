import React from "react";

export default function HeaderCountryChoice() {
  return (
    <div className=" pl-10 sm:pl-20 pr-10 sm:pr-20 h-14 sm:h-12 md:h-8 md:w-screen flex items-center bg-light-grey justify-between">
      <div className="flex items-center">
        <div className="h-3 w-6 bg-dark-blue rounded-md " />
        <div className="ml-8">Changer de pays</div>
      </div>

      <div className="flex justify-end">
        <p className="mr-4 font-extrabold">FR </p>
        <p className="mr-4">EN </p>
        <p>ES </p>
      </div>
    </div>
  );
}
