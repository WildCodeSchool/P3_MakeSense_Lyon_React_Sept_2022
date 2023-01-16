/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "flowbite-react";

function NotificationModal({ setShowModal, open }) {
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
              <div className="">
                Nouvel avis sur votre decision "partir à Bali"
              </div>
              <div className="">
                Nouvel avis sur votre decision "partir à Bali"
              </div>
              <div className="">
                Nouvel avis sur votre decision "partir à Bali"
              </div>
              <div className="">
                Nouvel avis sur votre decision "partir à Bali"
              </div>
              <div className="">
                Nouvel avis sur votre decision "partir à Bali"
              </div>
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
