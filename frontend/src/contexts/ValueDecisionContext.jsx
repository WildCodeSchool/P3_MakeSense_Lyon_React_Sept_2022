/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const ValueDecisionContext = createContext();

export default ValueDecisionContext;

export function ValueDecisionProvider({ children }) {
  const [valueDecision, setValueDecision] = useState("");

  return (
    <ValueDecisionContext.Provider value={{ valueDecision, setValueDecision }}>
      {children}
    </ValueDecisionContext.Provider>
  );
}

export const useValueDecisionContext = () => useContext(ValueDecisionContext);
