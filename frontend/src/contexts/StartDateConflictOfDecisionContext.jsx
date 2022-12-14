/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, createContext, useContext, useState } from "react";

const StartDateConflictOfDecisionContext = createContext();

export default StartDateConflictOfDecisionContext;

export function StartDateConflictOfDecisionProvider({ children }) {
  const [startDateConflictOfDecision, setStartDateConflictOfDecision] =
    useState(new Date());

  return (
    <StartDateConflictOfDecisionContext.Provider
      value={{ startDateConflictOfDecision, setStartDateConflictOfDecision }}
    >
      {children}
    </StartDateConflictOfDecisionContext.Provider>
  );
}

export const useStartDateConflictOfDecisionContext = () =>
  useContext(StartDateConflictOfDecisionContext);
