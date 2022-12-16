/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import CreateDecision from "@pages/user/CreateDecision";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeUser from "./pages/user/HomeUser";
import Sidebar from "@components/user/Sidebar";
import Authentification from "./pages/Authentification";
import Profile from "./pages/user/Profile";
import "./App.css";
// eslint-disable-next-line import/order
import { useState } from "react";
import LegalNotice from "@pages/user/LegalNotice";
import Help from "@pages/user/Help";
import Decisions from "@pages/user/Decisions";
import Inscription from "@pages/user/Inscription";
import ForgottenPassword from "@pages/user/ForgottenPassword";

function App() {
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
          <Sidebar open={open} setOpen={setOpen} />
        </aside>
      )}

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
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/decision" element={<Decisions open={open} />} />
      </Routes>
    </div>
  );
}

export default App;
