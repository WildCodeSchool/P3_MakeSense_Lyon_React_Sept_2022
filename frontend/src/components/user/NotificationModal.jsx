/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useCurrentUserContext } from "../../context/UserContext";

function NotificationModal({ setShowModal, open }) {
  const { user, token } = useCurrentUserContext();
  const [notifs, setNotifs] = useState();

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };
    fetch(`http://localhost:5000/notification/${user.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNotifs(result);
      })
      .catch((error) => console.warn("error", error));
  }, [token]);

  return (
    <div className="fixed top-0 left-0 ">
      <Modal
        className={`${
          open
            ? "ml-[235px] mt-[110px] rounded-xl"
            : "ml-[78px] mt-[110px] rounded-xl"
        } duration-300`}
        show
        position="left"
        size="2xl"
        onClose={() => setShowModal(false)}
      >
        <div className="shadow-lg">
          <Modal.Header className="pl-3 pr-3 pt-6 pb-6 bg-light-blue text-slate-50 align-middle rounded-lg">
            <div className="align-middle	 text-slate-50">Notifications:</div>
          </Modal.Header>
          <Modal.Body className="bg-light-grey">
            <div className="space-y-3 p-6 grid grid-cols-1 divide-y text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {notifs?.map((notif) => (
                <div key={notif.id}>
                  Vous avez été identifié sur la decision : {notif.title}
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-light-grey">
            <Button
              className="bg-light-blue"
              onClick={() => setShowModal(false)}
              color="gray"
            >
              <div className="text-slate-50">Fermer</div>
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default NotificationModal;
