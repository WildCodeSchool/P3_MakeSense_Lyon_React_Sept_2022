/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "flowbite-react";

function NotificationModal({ setShowModal, open }) {
  return (
    <div className="fixed top-0 left-0">
      <Modal
        className={`${
          open ? "ml-[235px] mt-[110px]" : "ml-[78px] mt-[110px]"
        } duration-300`}
        show
        position="left"
        size="md"
        onClose={() => setShowModal(false)}
      >
        <div className="shadow-lg">
          <Modal.Header className="bg-dark-blue text-slate-50">
            <div className="text-slate-50 ">Notifications:</div>
          </Modal.Header>
          <Modal.Body className="bg-light-grey">
            <div className="grid grid-cols-1 divide-y text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <div className="">Notification 1</div>
              <div className="">Notification 2</div>
              <div className="">Notification 3</div>
              <div className="">Notification 4</div>
              <div className="">Notification 5</div>
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
