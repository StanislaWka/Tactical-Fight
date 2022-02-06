import { Unit } from "../Classes/Unit";
import { TurnedUnits } from "./TurnedUnits";

export const GetInitiativeUnits = (
  allUnits: Unit[][],
  turnedUnits: TurnedUnits
) => {
  let maxInitiative = 0;

  allUnits.forEach((row) => {
    row.forEach((unit) => {
      if (
        unit.healthPoint > 0 &&
        unit.initiative > maxInitiative &&
        !turnedUnits.turnedUnits.includes(unit)
      ) {
        maxInitiative = unit.initiative;
      }
    });
  });

  let maxInitiativeUnits: Unit[] = [];

  allUnits.forEach((row) => {
    row.forEach((unit) => {
      if (
        unit.healthPoint > 0 &&
        unit.initiative === maxInitiative &&
        !turnedUnits.turnedUnits.includes(unit)
      ) {
        maxInitiativeUnits.push(unit);
      }
    });
  });

  return maxInitiativeUnits.length
    ? maxInitiativeUnits[Math.floor(Math.random() * maxInitiativeUnits.length)]
    : null;
};
