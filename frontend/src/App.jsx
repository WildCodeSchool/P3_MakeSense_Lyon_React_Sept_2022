/* eslint-disable import/no-unresolved */
// import DecisionCard from "@components/user/DecisionCard";
/* eslint-disable import/order */
import CreateDecision from "@pages/user/CreateDecision";
// import HomeUser from "./pages/user/HomeUser";
import Sidebar from "@components/user/Sidebar";
// import Authentification from "./pages/Authentification";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0">
        <Sidebar open={open} setOpen={setOpen} />
      </aside>
      {/* <HomeUser open={open} setOpen={setOpen} /> */}
      {/* <Authentification /> */}
      <CreateDecision />
    </div>
  );
}

export default App;
