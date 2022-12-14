import HomeUser from "./pages/user/HomeUser";
import Authentification from "./pages/Authentification";
import Profile from "./pages/user/Profile";
import "./App.css";
// eslint-disable-next-line import/order
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-screen">
      {/* <HomeUser open={open} setOpen={setOpen} /> */}
      {/* <Authentification /> */}
      <Profile open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
