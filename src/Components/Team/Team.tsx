import React from "react";
import { Unit } from "../../Core/Classes/Unit";
import Card from "../Card";
import { getUniqueID } from "../Utils/utils";
import "./team.css";

export interface ITeam {
  id:number
  turnUnit: Unit;
  unitsTeam: Unit[];
  handleAction: (turnUnit: Unit, unit: Unit) => void;
  handleDefence: () => void;
  numberTeam: number;
  actionableUnits: Unit[];
  attack:boolean;
  roundTurnedUnits: Unit[]
  mouseOverUnit: Unit | undefined;
}

export const Team: React.FunctionComponent<ITeam> = ({
  id,
  turnUnit,
  unitsTeam,
  handleAction,
  handleDefence,
  numberTeam,
  actionableUnits,
  attack,
  roundTurnedUnits,
  mouseOverUnit
}) => {
  return (
    <div className="Team" id={`${id}`}>
      <div className="cards">
        {unitsTeam.map((unit, index) => (
          <Card
            key={getUniqueID()}
            unit={unit}
            turnUnit={turnUnit}
            actionableUnits={actionableUnits}
            numberTeam = {numberTeam}
            handleDefence = {handleDefence}
            handleAction={handleAction}
            attack = {attack}
            roundTurnedUnits = {roundTurnedUnits}
            mouseOverUnit = {mouseOverUnit}
          />
        ))}
      </div>
    </div>
  );
};
