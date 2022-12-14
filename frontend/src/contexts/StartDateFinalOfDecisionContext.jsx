/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const StartDateFinalOfdecisionContext = createContext();

export default StartDateFinalOfdecisionContext;

export function StartDateFinalOfDecisionProvider({ children }) {
  const [startDateFinalOfDecision, setStartDateFinalOfDecision] = useState(
    new Date()
  );

  return (
    <StartDateFinalOfdecisionContext.Provider
      value={{ startDateFinalOfDecision, setStartDateFinalOfDecision }}
    >
      {children}
    </StartDateFinalOfdecisionContext.Provider>
  );
}

export const useStartDateFinalOfDecisionContext = () =>
  useContext(StartDateFinalOfdecisionContext);
