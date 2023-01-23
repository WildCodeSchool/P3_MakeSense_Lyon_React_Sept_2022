import { React, useEffect, useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import Paginate from "../../components/user/Paginate";
import TimeStepperHome from "../../components/user/TimeStepperHome";
import DecisionCard from "../../components/user/DecisionCard";
import Logo from "../../assets/logo-makesense.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";

import { useCurrentUserContext } from "../../context/UserContext";

const backEnd = import.meta.env.VITE_BACKEND_URL;

export default function Decisions({ open }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const navigate = useNavigate();
  const { user, token } = useCurrentUserContext();
  const [valuesDetailsDecisions, setValuesDetailsDecisions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDecisions, setTotalDecisions] = useState();

  // decision per page fix for now
  const decisionPerPage = 8;

  // to show or not the chevron-down icon with filter
  const [isOpenAllDecisions, setIsOpenAllDecisions] = useState(true);
  const [isOpenInProgress, setIsOpenInProgress] = useState(false);
  const [isOpenConflicts, setIsOpenConflicts] = useState(false);
  const [isOpenFinished, setIsOpenFinished] = useState(false);
  const [isOpenUnfinished, setIsOpenUnfinished] = useState(false);
  const [filterByStatus, setFilterByStatus] = useState("all");

  // Get current page depending of paginate component
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    paginate(currentPage);
  }, [filterByStatus]);

  // Get previous page depending of paginate component
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get next page depending of paginate component
  const nextPage = () => {
    if (currentPage !== Math.ceil(totalDecisions / decisionPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function to set the filter by status
  useEffect(() => {
    if (isOpenAllDecisions) {
      setFilterByStatus("all");
    } else if (isOpenInProgress) {
      setFilterByStatus("En cours");
    } else if (isOpenConflicts) {
      setFilterByStatus("En conflit");
    } else if (isOpenFinished) {
      setFilterByStatus("Terminee");
    } else if (isOpenUnfinished) {
      setFilterByStatus("Non aboutie");
    }
  }, [
    isOpenAllDecisions,
    isOpenInProgress,
    isOpenConflicts,
    isOpenFinished,
    isOpenUnfinished,
  ]);

  // function to update the array of decisions after delete one decision
  const updateArrayDecisionsAfterDelete = (id) => {
    const indexOfValueDecision = valuesDetailsDecisions.findIndex(
      (obj) => obj.id === id
    );
    valuesDetailsDecisions.splice(indexOfValueDecision, 1);
    setValuesDetailsDecisions([...valuesDetailsDecisions]);
  };

  // fetch all datas with LEFT JOIN on user_id of decisions from API
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(
      `${backEnd}/decision/page?status=${filterByStatus}&decisionPerPage=${decisionPerPage}&currentPage=${currentPage}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValuesDetailsDecisions(result.rows);
        setTotalDecisions(result.nbDecision.nbDecision);
      })
      .catch((error) => console.warn("error", error));
  }, [token, currentPage, filterByStatus, decisionPerPage]);

  const handleChevrondownAllDecisions = () => {
    setIsOpenAllDecisions(!isOpenAllDecisions);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
    setCurrentPage(1);
  };

  const handleChevrondownInProgress = () => {
    setIsOpenInProgress(!isOpenInProgress);
    setIsOpenAllDecisions(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
    setCurrentPage(1);
  };

  const handleChevrondownConflicts = () => {
    setIsOpenConflicts(!isOpenConflicts);
    setIsOpenInProgress(false);
    setIsOpenAllDecisions(false);
    setIsOpenFinished(false);
    setIsOpenUnfinished(false);
    setCurrentPage(1);
  };

  const handleChevrondownFinished = () => {
    setIsOpenFinished(!isOpenFinished);
    setIsOpenAllDecisions(false);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenUnfinished(false);
    setCurrentPage(1);
  };

  const handleChevrondownUnfinished = () => {
    setIsOpenUnfinished(!isOpenUnfinished);
    setIsOpenAllDecisions(false);
    setIsOpenInProgress(false);
    setIsOpenConflicts(false);
    setIsOpenFinished(false);
    setCurrentPage(1);
  };

  return (
    <div className="w-screen md:h-screen overflow-hidden">
      <div className="flex flex-row items-center justify-between bg-light-grey">
        <div className="flex flex-col">
          {user ? (
            <p className="pl-10 pt-3 text-xl">Bonjour {user.firstname}</p>
          ) : (
            <p className="pl-10 pt-3 text-xl">Bonjour</p>
          )}
          <p className="pl-10 text-x font-extralight">
            Nous sommes le : {new Date().toLocaleDateString()}
          </p>
        </div>
        <h1 className="text-2xl text-red-pink">Décisions</h1>
        <div className="logo-home">
          <img src={Logo} alt="logo make-sense" />
        </div>
      </div>
      <div className="md:flex hidden">
        <div className="md:flex">
          <button
            type="button"
            onClick={handleChevrondownAllDecisions}
            className=" ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-black rounded-3xl text-black"
          >
            {isOpenAllDecisions ? (
              <img src={ChevronDown} alt="fleche vers le bas" />
            ) : null}
            Toutes les décisions
          </button>
        </div>
        <button
          type="button"
          onClick={handleChevrondownInProgress}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-blue text-light-blue rounded-3xl"
        >
          {isOpenInProgress ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          En cours
        </button>
        <button
          type="button"
          onClick={handleChevrondownConflicts}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-orange text-light-orange rounded-3xl"
        >
          {isOpenConflicts ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Conflits
        </button>
        <button
          type="button"
          onClick={handleChevrondownFinished}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-light-green text-light-green rounded-3xl"
        >
          {isOpenFinished ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Terminées
        </button>
        <button
          type="button"
          onClick={handleChevrondownUnfinished}
          className="ml-10 flex items-center mt-5 h-10 pl-2 pr-2 border-2 border-red-pink text-red-pink rounded-3xl"
        >
          {isOpenUnfinished ? (
            <img src={ChevronDown} alt="fleche vers le bas" />
          ) : null}
          Non abouties
        </button>
        <button
          onClick={() => navigate("/create-decision")}
          type="button"
          className={
            open
              ? "ml-[80px] pl-2 pr-2 mt-5 mb-5 h-10 bg-red-pink rounded-3xl text-white"
              : "ml-[200px] pl-2 pr-2 mt-5 mb-5 h-10 bg-red-pink rounded-3xl text-white"
          }
        >
          + Nouvelle décision
        </button>
      </div>
      <Menu as="div" className="relative inline-block text-left mt-3 md:hidden">
        <div className="">
          <button
            type="button"
            onClick={() => navigate("/create-decision")}
            className="inline-flex w-[100px] ml-10 mr-9 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            {" "}
            + décision
          </button>
          <Menu.Button className="inline-flex w-[100px] justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Filtrer
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleChevrondownAllDecisions}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Toutes les décisions
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleChevrondownInProgress}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    En cours
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleChevrondownConflicts}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Conflits
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleChevrondownFinished}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Terminées
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleChevrondownUnfinished}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Non abouties
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="flex flex-col items-center md:grid md:grid-cols-4 md:grid-rows-2 mt-3 gap-14">
        <div className="md:box col-start-1 col-end-4">
          <div
            className={
              open
                ? "md:grid grid-cols-5 grid-rows-2 gap-10 ml-10 mr-10 "
                : "md:grid grid-cols-6 grid-rows-2 gap-10 ml-10 mr-10 "
            }
          >
            {valuesDetailsDecisions.map((valueDetailsDecision) => {
              return (
                <DecisionCard
                  key={valueDetailsDecision.id}
                  valueDetailsDecision={valueDetailsDecision}
                  updateArrayDecisionsAfterDelete={
                    updateArrayDecisionsAfterDelete
                  }
                />
              );
            })}
          </div>
          <div className={open ? "mt-10 md:ml-6 ml-10" : "mt-10 md:ml-6 ml-0"}>
            <Paginate
              decisionPerPage={decisionPerPage}
              totalDecisions={totalDecisions}
              currentPage={currentPage}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
              open={open}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <TimeStepperHome />
        </div>
      </div>
    </div>
  );
}
