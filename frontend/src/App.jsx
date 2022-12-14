/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import CreateDecision from "@pages/user/CreateDecision";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [open, setOpen] = useState(true);
  const sidebarStyle = (
    <aside className="h-screen sticky top-0">
      <Sidebar open={open} setOpen={setOpen} />
    </aside>
  );

  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route
          path="/home"
          element={
            <>
              {sidebarStyle}
              <HomeUser open={open} setOpen={setOpen} />
            </>
          }
        />
        <Route
          path="/create-decision"
          element={
            <>
              {sidebarStyle} <CreateDecision />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              {sidebarStyle}
              <h1>404 Not Found</h1>
            </>
          }
        />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route
          path="/my-profile"
          element={
            <>
              {sidebarStyle}
              <Profile />
            </>
          }
        />
        <Route path="/help" element={<Help />} />
        <Route
          path="/decision"
          element={
            <>
              {sidebarStyle}
              <Decisions />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
