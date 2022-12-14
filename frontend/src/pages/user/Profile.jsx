import React from "react";
import Sidebar from "../../components/user/Sidebar";
import UserProfile from "../../components/user/UserProfile";
import "../../css/user/Profile.css";

export default function Profile({ open, setOpen }) {
  return (
    <div className="profilePage flex h-screen w-screen overflow-x-hidden">
      <Sidebar open={open} setOpen={setOpen} />
      <UserProfile />
    </div>
  );
}
