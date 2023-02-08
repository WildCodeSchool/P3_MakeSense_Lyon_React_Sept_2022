import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../assets/icons/corner-down-left.svg";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center m-auto">
      <div className="border-2 w-1/2 h-80 m-auto border-dark-blue rounded-lg bg-dark-blue flex items-center justify-center">
        <div className=" text-flash-yellow text-6xl flex justify-center flex-col items-center ">
          <p>Error 404</p>
          <p className="text-2xl pt-4">Not found</p>
          <div className="flex relative text-white text-sm pt-4">
            <button
              type="button"
              className="flex relative text-white text-sm pt-4 pr-2"
              onClick={() => navigate(-1)}
            >
              <img src={Back} alt="return" className="pr-2" />
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
