/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import CreateDecision from "@pages/user/CreateDecision";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeUser from "./pages/user/HomeUser";
import Sidebar from "@components/user/Sidebar";
import Authentification from "./pages/Authentification";
import "./App.css";
import { useState } from "react";
import LegalNotice from "@pages/user/LegalNotice";
import Profile from "@pages/user/Profile";
import Help from "@pages/user/Help";
import Decisions from "@pages/user/Decisions";
import NotificationModal from "@components/user/NotificationModal";

function App() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      {location.pathname === "/" ||
      location.pathname === "/legal-notice" ||
      location.pathname === "/help" ? null : (
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar open={open} setOpen={setOpen} />
        </aside>
      )}

      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route
          path="/home"
          element={<HomeUser open={open} setOpen={setOpen} />}
        />
        <Route path="/create-decision" element={<CreateDecision />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notification" element={<NotificationModal />} />
        <Route path="/decision" element={<Decisions open={open} />} />
      </Routes>
    </div>
  );
}

export default App;
