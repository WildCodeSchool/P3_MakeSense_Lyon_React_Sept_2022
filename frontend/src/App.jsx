import { React, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import CreateDecision from "./pages/user/CreateDecision";
import HomeUser from "./pages/user/HomeUser";
import Authentification from "./pages/Authentification";
import UserProfile from "./pages/user/UserProfile";
import "./App.css";
import "./i18n";
import LegalNotice from "./pages/user/LegalNotice";
import Sidebar from "./components/user/Sidebar";
import MyProfile from "./pages/user/MyProfile";
import Help from "./pages/user/Help";
import Decisions from "./pages/user/Decisions";
import DecisionDetails from "./pages/user/DecisionDetails";
import NotificationModal from "./components/user/NotificationModal";
import Inscription from "./pages/user/Inscription";
import ForgottenPassword from "./pages/user/ForgottenPassword";
import { useCurrentUserContext } from "./context/UserContext";
import EditDecision from "./pages/user/EditDecision";
import Password from "./pages/user/Password";
import SidebarMobile from "./components/user/SidebarMobile";
import HomeAdmin from "./pages/administrator/HomeAdmin";
import UsersList from "./pages/administrator/UsersList";
import DecisionsList from "./pages/administrator/DecisionsList";
import Messages from "./pages/administrator/Messages";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(true);
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(true);
  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
      navigate("/home");
    } else {
      navigate("/homeadmin");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full ">
      {location.pathname === "/" ||
      location.pathname === "/inscription" ||
      location.pathname === "/motdepasseoublie" ||
      location.pathname === "/legal-notice" ||
      token === null ||
      location.pathname === "/help" ? null : (
        <div className="relative">
          <aside className="h-screen sticky top-0 overflow-hidden hidden lg:block">
            <Sidebar
              showModal={showModal}
              setShowModal={setShowModal}
              open={open}
              setOpen={setOpen}
              checked={checked}
              setChecked={setChecked}
              handleChecked={handleChecked}
            />
          </aside>
          <div className="w-screen lg:hidden fixed bottom-0 left-0 right-0 z-50">
            <SidebarMobile
              showModal={showModal}
              setShowModal={setShowModal}
              open={open}
              setOpen={setOpen}
              checked={checked}
              setChecked={setChecked}
              handleChecked={handleChecked}
              openMobile={openMobile}
              setOpenMobile={setOpenMobile}
            />
          </div>
        </div>
      )}
      {showModal ? (
        <NotificationModal
          showModal={showModal}
          open={open}
          setShowModal={setShowModal}
        />
      ) : null}
      {token ? (
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route
            path="/home"
            element={<HomeUser open={open} setOpen={setOpen} />}
          />
          <Route path="/" element={<Authentification />} />
          <Route path="/create-decision" element={<CreateDecision />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route
            path="/user-profile/:id"
            element={<UserProfile open={open} />}
          />
          <Route path="/decisions" element={<Decisions open={open} />} />
          <Route path="/decision/:id" element={<DecisionDetails />} />
          <Route
            path="/decision/:id/comments/:id"
            element={<DecisionDetails />}
          />
          <Route
            path="/edit-decision/:id"
            element={<EditDecision valuesDetailsDecisions />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          {/*  route admin */}
          <Route
            path="/homeadmin"
            element={
              <HomeAdmin
                open={open}
                setOpen={setOpen}
                checked={checked}
                setChecked={setChecked}
                handleChecked={handleChecked}
              />
            }
          />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/decisionslist" element={<DecisionsList />} />
          <Route path="mailbox" element={<Messages />} />
          {/* <Route path="bin" element={<Bin />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/reviewpassword/:passwordToken"
            element={<Password email={email} setEmail={setEmail} />}
          />
          <Route path="/" element={<Authentification />} />
          <Route path="/help" element={<Help />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route
            path="/motdepasseoublie"
            element={<ForgottenPassword email={email} setEmail={setEmail} />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
