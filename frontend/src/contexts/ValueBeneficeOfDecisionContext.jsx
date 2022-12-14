/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const ValueBeneficeOfDecisionContext = createContext();

export default ValueBeneficeOfDecisionContext;

export function ValueBeneficeOfDecisionProvider({ children }) {
  const [valueBeneficeOfDecision, setValueBeneficeOfDecision] = useState("");

  return (
    <ValueBeneficeOfDecisionContext.Provider
      value={{ valueBeneficeOfDecision, setValueBeneficeOfDecision }}
    >
      {children}
    </ValueBeneficeOfDecisionContext.Provider>
  );
}

export const useValueBeneficeOfDecisionContext = () =>
  useContext(ValueBeneficeOfDecisionContext);
