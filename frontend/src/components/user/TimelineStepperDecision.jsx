import userimg from "../../assets/icons/user.png";
import "../../css/user/homeUser.css";

function TimelineStepperDecision({
  setClickedAnswer4,
  urlAvatarStatus,
  valuesDetailsDecision,
}) {
  const handleToggle4 = () => {
    setClickedAnswer4((prev) => !prev);
  };

  return (
    <div className="w-60 h-fit border border-red-pink p-4 rounded-xl flex justify-center flex-col">
      <p className="mt-5">Personnes expertes</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        {valuesDetailsDecision.experts?.map((expert) => (
          <img
            key={expert.id}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={
              urlAvatarStatus?.status === 200
                ? `http://localhost:5000/avatar/${expert?.avatar}`
                : userimg
            }
            alt="avatar"
          />
        ))}
      </div>
      <p>Personnes concernées</p>
      <div className="flex -space-x-2 overflow-hidden my-5">
        {valuesDetailsDecision.concerns?.map((concern) => (
          <img
            key={concern.id}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={
              urlAvatarStatus?.status === 200
                ? `http://localhost:5000/avatar/${concern?.avatar}`
                : userimg
            }
            alt="avatar"
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleToggle4}
        className="underline text-dark-blue hidden md:block"
      >
        Voir les avis
      </button>
      <button
        type="button"
        onClick={handleToggle4}
        className="pr-3 pl-3 mt-4 h-10 bg-red-pink rounded-3xl text-white hidden md:block"
      >
        Donner mon avis
      </button>
    </div>
  );
}

export default TimelineStepperDecision;
