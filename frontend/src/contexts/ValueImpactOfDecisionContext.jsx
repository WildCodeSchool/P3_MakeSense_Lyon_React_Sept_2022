/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const ValueImpactOfDecisionContext = createContext();

export default ValueImpactOfDecisionContext;

export function ValueImpactOfDecisionProvider({ children }) {
  const [valueImpactOfDecision, setValueImpactOfDecision] = useState("");

  return (
    <ValueImpactOfDecisionContext.Provider
      value={{ valueImpactOfDecision, setValueImpactOfDecision }}
    >
      {children}
    </ValueImpactOfDecisionContext.Provider>
  );
}

export const useValueImpactOfDecisionContext = () =>
  useContext(ValueImpactOfDecisionContext);
