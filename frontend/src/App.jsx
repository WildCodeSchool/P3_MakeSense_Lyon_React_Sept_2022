/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */

import DecisionDetails from "./pages/user/DecisionDetails";
import Sidebar from "@components/user/Sidebar";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-row w-screen ">
      <aside className="h-screen sticky top-0 overflow-hidden">
        <Sidebar open={open} setOpen={setOpen} />
      </aside>
      <DecisionDetails />
    </div>
  );
}

export default App;
