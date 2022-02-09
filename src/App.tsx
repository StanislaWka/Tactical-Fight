import React from "react";
import Field from "./Components/Field";
import { Unit } from "./Core/Classes/Unit";
import { createTeam } from "./Core/GamePlay/CreateTeam";
import { getTurnOrderUnitsTeam } from "./Core/GamePlay/GetTurnOrderUnitsTeam";
import { Round } from "./Core/GamePlay/Round";
import { TurnedUnits } from "./Core/GamePlay/TurnedUnits";

function App() {
  const round = new Round();
  const turnedUnits = new TurnedUnits([]);
  const { firstTeam, secondTeam } = createTeam();
  const firstTeamOrder = getTurnOrderUnitsTeam(firstTeam);
  const secondTeamOrder = getTurnOrderUnitsTeam(secondTeam);
  const combineOrder = combine(firstTeamOrder, secondTeamOrder);
  return (
    <Field
      round={round}
      roundTurnedUnits={turnedUnits}
      firstTeam={firstTeam}
      secondTeam={secondTeam}
      firstTeamOrder={firstTeamOrder}
      secondTeamOrder={secondTeamOrder}
      combineOrder={combineOrder}
    ></Field>
  );
}

const combine = (firstArr:Unit[], secondArr:Unit[]) => {
  let combineArr =[];
  for(let index = 0; index < firstArr.length; index++) {
    combineArr.push(firstArr[index]);
    combineArr.push(secondArr[index]);
  }
  return combineArr;
}

export default App;


