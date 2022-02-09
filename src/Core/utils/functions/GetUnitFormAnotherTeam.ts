import { Unit } from "../../Classes/Unit";
import { checkUnitTeam } from "./ChekUnitTeam";

export const getUnitFromAnotherTeam = (allUnits: Unit[][], turnUnit: Unit) :Unit[] => {
  let unitFromAnotherTeam: Unit[] = [];
  if (checkUnitTeam(allUnits, turnUnit)) {
    for (
      let row =allUnits.length / 2;
      row < allUnits.length;
      row++
    ) {
      for (let column = 0; column < allUnits[row].length; column++) {
        unitFromAnotherTeam.push(allUnits[row][column]);
      }
    }
  } else {
    for (let row = 0; row < Math.floor(allUnits.length / 2); row++) {
      for (let column = 0; column< allUnits[row].length; column++) {
        unitFromAnotherTeam.push(allUnits[row][column]);
      }
    }
  }
  return unitFromAnotherTeam;
};
