/* eslint-disable import/no-unresolved */
// import DecisionCard from "@components/user/DecisionCard";
/* eslint-disable import/order */
// import CreateDecision from "@pages/user/CreateDecision";
import { ValueDecisionProvider } from "./contexts/ValueDecisionContext";
import { ValueImpactOfDecisionProvider } from "./contexts/ValueImpactOfDecisionContext";
import { ValueRiskOfDecisionProvider } from "./contexts/ValueRIskOfDecisionContext";
import { ValueBeneficeOfDecisionProvider } from "./contexts/ValueBeneficeOfDecisionContext";
import { StartDateConflictOfDecisionProvider } from "./contexts/StartDateConflictOfDecisionContext";
import { StartDateFinalOfDecisionProvider } from "./contexts/StartDateFinalOfDecisionContext";
import { StartDateOfDecisionProvider } from "./contexts/StartDateOfDecisionContext";
import HomeUser from "./pages/user/HomeUser";
// import Authentification from "./pages/Authentification";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <StartDateOfDecisionProvider>
      <StartDateFinalOfDecisionProvider>
        <StartDateConflictOfDecisionProvider>
          <ValueBeneficeOfDecisionProvider>
            <ValueRiskOfDecisionProvider>
              <ValueImpactOfDecisionProvider>
                <ValueDecisionProvider>
                  <div className="flex w-screen">
                    <HomeUser open={open} setOpen={setOpen} />
                    {/* <Authentification /> */}
                    {/* <p>Let's GO !</p>
                      <DecisionCard /> */}
                    {/* <CreateDecision /> */}
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
