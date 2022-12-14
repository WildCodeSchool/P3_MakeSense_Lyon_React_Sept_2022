/* eslint-disable import/no-unresolved */
// import DecisionCard from "@components/user/DecisionCard";
import CreateDecision from "@pages/user/CreateDecision";
import { ValueDecisionProvider } from "./contexts/ValueDecisionContext";
import { ValueImpactOfDecisionProvider } from "./contexts/ValueImpactOfDecisionContext";
import { ValueRiskOfDecisionProvider } from "./contexts/ValueRIskOfDecisionContext";
import { ValueBeneficeOfDecisionProvider } from "./contexts/ValueBeneficeOfDecisionContext";
import { StartDateConflictOfDecisionProvider } from "./contexts/StartDateConflictOfDecisionContext";
import { StartDateFinalOfDecisionProvider } from "./contexts/StartDateFinalOfDecisionContext";
import { StartDateOfDecisionProvider } from "./contexts/StartDateOfDecisionContext";

import "./App.css";

function App() {
  return (
    <StartDateOfDecisionProvider>
      <StartDateFinalOfDecisionProvider>
        <StartDateConflictOfDecisionProvider>
          <ValueBeneficeOfDecisionProvider>
            <ValueRiskOfDecisionProvider>
              <ValueImpactOfDecisionProvider>
                <ValueDecisionProvider>
                  <div>
                    {/* <p>Let's GO !</p>
      <DecisionCard /> */}
                    <CreateDecision />
                  </div>
                </ValueDecisionProvider>
              </ValueImpactOfDecisionProvider>
            </ValueRiskOfDecisionProvider>
          </ValueBeneficeOfDecisionProvider>
        </StartDateConflictOfDecisionProvider>
      </StartDateFinalOfDecisionProvider>
    </StartDateOfDecisionProvider>
  );
}

export default App;
