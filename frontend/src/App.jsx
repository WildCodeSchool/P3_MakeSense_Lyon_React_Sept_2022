/* eslint-disable import/order */
import HomeUser from "./pages/user/HomeUser";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-screen">
      <HomeUser open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
