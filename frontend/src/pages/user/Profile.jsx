import React from "react";
import Sidebar from "../../components/user/Sidebar";
import MyProfile from "../../components/user/MyProfile";

export default function Profile({ open, setOpen }) {
  return (
    <div className="profilePage">
      <Sidebar open={open} setOpen={setOpen} />
      <MyProfile />
    </div>
  );
}
