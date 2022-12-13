/* eslint-disable import/order */
/* import HomeUser from "./pages/user/HomeUser"; */
import "./App.css";
/* import { useState } from "react"; */
import HeaderCountryChoice from "@components/user/HeaderCountryChoice";

function App() {
  /* const [open, setOpen] = useState(true); */
  return (
    <div className="flex w-screen">
      {/* <HomeUser open={open} setOpen={setOpen} /> */}
      <HeaderCountryChoice />
    </div>
  );
}

export default App;
