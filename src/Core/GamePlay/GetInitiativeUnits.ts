import { Unit } from "../Classes/Unit";
import { TurnedUnits } from "./TurnedUnits";

export const GetInitiativeUnits = (
  allUnits: Unit[][],
  turnedUnits: TurnedUnits
) => {
  let maxInitiative = 0;

  for (let row = 0; row < allUnits.length; row++) {
    for (let column = 0; column < allUnits[row].length; column++) {
      if (
        allUnits[row][column].healthPoint > 0 &&
        allUnits[row][column].initiative > maxInitiative &&
        !turnedUnits.turnedUnits.includes(allUnits[row][column])
      ) {
          maxInitiative = allUnits[row][column].initiative;
      }
    }
  }

  let maxInitiativeUnits: Unit[] = [];

  for (let row = 0; row < allUnits.length; row++) {
    for (let column = 0; column < allUnits[row].length; column++) {
      if (allUnits[row][column].healthPoint > 0 &&
        allUnits[row][column].initiative === maxInitiative &&
        !turnedUnits.turnedUnits.includes(allUnits[row][column])
      ) {
          maxInitiativeUnits.push(allUnits[row][column]);
      }
    }
  }

  return maxInitiativeUnits.length ? maxInitiativeUnits[Math.floor(Math.random() * maxInitiativeUnits.length)] : null
};
