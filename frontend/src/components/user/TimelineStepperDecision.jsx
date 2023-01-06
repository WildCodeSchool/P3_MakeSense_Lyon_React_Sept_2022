/* eslint-disable react/no-array-index-key */
import React from "react";
import "../../css/user/homeUser.css";

function TimelineStepperDecision({ setClickedAnswer4 }) {
  /* const { token } = useCurrentUserContext();
  const [expertPerson, setExpertPerson] = useState();
  const [concernPerson, setConcernPerson] = useState();
 */
  const handleToggle4 = () => {
    setClickedAnswer4((prev) => !prev);
  };
  /*
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/user`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setExpertPerson(result);
      })
      .catch((error) => console.warn("error", error));
  }, []);

  /*
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(
      `http://localhost:5000/user/${valuesDetailsDecision?.person_concern.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setConcernPerson(result);
      })
      .catch((error) => console.warn("error", error));
  }, []);
 */
  return (
    <div className="w-60 h-fit border border-red-pink p-4 rounded-xl flex justify-center flex-col">
      <p className="mt-5">Personnes expertes</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <p>Personnes concernées</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <button
        type="button"
        onClick={handleToggle4}
        className="underline text-dark-blue"
      >
        Voir les avis
      </button>
      <button
        type="button"
        onClick={handleToggle4}
        className="pr-3 pl-3 mt-4 h-10 bg-red-pink rounded-3xl text-white"
      >
        Donner mon avis
      </button>
    </div>
  );
}

export default TimelineStepperDecision;
