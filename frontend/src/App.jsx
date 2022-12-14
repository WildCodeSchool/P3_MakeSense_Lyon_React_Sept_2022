/* eslint-disable import/order */
import HomeUser from "./pages/user/HomeUser";
import Authentification from "./pages/Authentification";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-screen">
      <HomeUser open={open} setOpen={setOpen} />
      {/* <Authentification /> */}
    </div>
  );
}

export default App;
