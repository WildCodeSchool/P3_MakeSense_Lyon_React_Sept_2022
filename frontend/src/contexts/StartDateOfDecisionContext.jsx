/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const StartDateOfdecisionContext = createContext();

export default StartDateOfdecisionContext;

export function StartDateOfDecisionProvider({ children }) {
  const [startDateOfDecision, setStartDateOfDecision] = useState(new Date());

  return (
    <StartDateOfdecisionContext.Provider
      value={{ startDateOfDecision, setStartDateOfDecision }}
    >
      {children}
    </StartDateOfdecisionContext.Provider>
  );
}

export const useStartDateOfDecisionContext = () =>
  useContext(StartDateOfdecisionContext);
