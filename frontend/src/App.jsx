/* eslint-disable import/no-unresolved */
// import DecisionCard from "@components/user/DecisionCard";
/* eslint-disable import/order */
// import HomeUser from "./pages/user/HomeUser";
import Sidebar from "@components/user/Sidebar";
// import Authentification from "./pages/Authentification";
import "./App.css";
import { useState } from "react";
import MyProfile from "@pages/user/MyProfile";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0 overflow-hidden">
        <Sidebar open={open} setOpen={setOpen} />
      </aside>
      {/* <HomeUser open={open} setOpen={setOpen} /> */}
      {/* <Authentification /> */}
      <MyProfile />
    </div>
  );
}

export default App;
