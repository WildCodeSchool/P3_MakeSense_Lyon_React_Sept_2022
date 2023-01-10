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
import DecisionDetails from "@pages/user/DecisionDetails";
import NotificationModal from "@components/user/NotificationModal";
import Inscription from "@pages/user/Inscription";
import ForgottenPassword from "@pages/user/ForgottenPassword";
import { useCurrentUserContext } from "./context/UserContext";
import EditDecision from "@pages/user/EditDecision";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const { token } = useCurrentUserContext();

  return (
    <div className="flex">
      {location.pathname === "/" ||
      location.pathname === "/inscription" ||
      location.pathname === "/motdepasseoublie" ||
      location.pathname === "/legal-notice" ||
      token === null ||
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
      {token ? (
        <Routes>
          <Route
            path="/home"
            element={<HomeUser open={open} setOpen={setOpen} />}
          />
          <Route path="/" element={<Authentification />} />
          <Route path="/create-decision" element={<CreateDecision />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route
            path="/user-profile/:id"
            element={<UserProfile open={open} />}
          />
          <Route path="/help" element={<Help />} />
          <Route path="/decisions" element={<Decisions open={open} />} />
          <Route path="/decision/:id" element={<DecisionDetails />} />
          <Route
            path="/edit-decision/:id"
            element={<EditDecision valuesDetailsDecisions />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Authentification />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/motdepasseoublie" element={<ForgottenPassword />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
