import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import { CurrentUserContextProvider } from "./context/UserContext";
import { CurrentLangContextProvider } from "./context/LangContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CurrentUserContextProvider>
      <CurrentLangContextProvider>
        <App />
      </CurrentLangContextProvider>
    </CurrentUserContextProvider>
  </BrowserRouter>
);
