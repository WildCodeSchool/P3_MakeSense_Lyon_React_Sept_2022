import React, { useEffect, useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useCurrentUserContext } from "../../context/UserContext";
import "../../css/user/sidebar.css";

const backEnd = import.meta.env.VITE_BACKEND_URL;

function NotificationModal({ setShowModal, open, showModal }) {
  const { user, token } = useCurrentUserContext();
  const [notifs, setNotifs] = useState();

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };
    fetch(`${backEnd}/notification/${user.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNotifs(result);
      })
      .catch((error) => console.warn("error", error));
  }, [token]);

  return (
    <div className="fixed top-0 left-0">
      <Modal
        className={`${
          open && showModal
            ? "md:ml-[274px] md:mt-[110px] rounded-r-xl w-[400px] shake"
            : "md:ml-[78px] md:mt-[110px] rounded-r-xl  w-[400px] shake"
        }`}
        show
        position="left"
        size="2xl"
        onClose={() => setShowModal(false)}
      >
        <Modal.Header className="pl-3 pr-3 pt-6 pb-6 bg-light-blue text-slate-50 align-middle rounded-tr-lg">
          <div className="text-white">Notifications:</div>
        </Modal.Header>
        <Modal.Body className="bg-gray-200">
          <div className="space-y-3 p-6 grid grid-cols-1 divide-y text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {notifs?.map((notif) => (
              <div key={notif.id}>
                Identifié sur la decision : {notif.title}
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-gray-200">
          <Button
            className="bg-light-blue rounded-xl"
            onClick={() => setShowModal(false)}
            color="gray"
          >
            <div className="text-slate-50">Fermer</div>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotificationModal;
