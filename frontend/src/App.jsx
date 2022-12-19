/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// eslint-disable-next-line import/order
import { React, useState } from "react";
import CreateDecision from "@pages/user/CreateDecision";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeUser from "./pages/user/HomeUser";
import Sidebar from "@components/user/Sidebar";
import Authentification from "./pages/Authentification";
import UserProfile from "./pages/user/UserProfile";
import "./App.css";
import LegalNotice from "@pages/user/LegalNotice";
import MyProfile from "@pages/user/MyProfile";
import Help from "@pages/user/Help";
import Decisions from "@pages/user/Decisions";
import NotificationModal from "@components/user/NotificationModal";
import Inscription from "@pages/user/Inscription";
import ForgottenPassword from "@pages/user/ForgottenPassword";

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      {location.pathname === "/" ||
      location.pathname === "/inscription" ||
      location.pathname === "/motdepasseoublie" ||
      location.pathname === "/legal-notice" ||
      location.pathname === "/help" ? null : (
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar
            showModal={showModal}
            setShowModal={setShowModal}
            open={open}
            setOpen={setOpen}
          />
        </aside>
      )}
      {showModal ? (
        <NotificationModal
          showModal={showModal}
          open={open}
          setShowModal={setShowModal}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/motdepasseoublie" element={<ForgottenPassword />} />
        <Route
          path="/home"
          element={<HomeUser open={open} setOpen={setOpen} />}
        />
        <Route path="/create-decision" element={<CreateDecision />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/user-profile" element={<UserProfile open={open} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/decision" element={<Decisions open={open} />} />
      </Routes>
    </div>
  );
}

export default App;
