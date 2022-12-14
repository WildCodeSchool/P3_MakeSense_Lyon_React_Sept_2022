/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const ValueRiskOfDecisionContext = createContext();

export default ValueRiskOfDecisionContext;

export function ValueRiskOfDecisionProvider({ children }) {
  const [valueRiskOfDecision, setValueRiskOfDecision] = useState("");

  return (
    <ValueRiskOfDecisionContext.Provider
      value={{ valueRiskOfDecision, setValueRiskOfDecision }}
    >
      {children}
    </ValueRiskOfDecisionContext.Provider>
  );
}

export const useValueRiskOfDecisionContext = () =>
  useContext(ValueRiskOfDecisionContext);
