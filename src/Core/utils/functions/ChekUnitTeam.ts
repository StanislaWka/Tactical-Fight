import { Unit } from "../../Classes/Unit";

export const checkUnitTeam = (allUnits: Unit[][], turnUnit: Unit): boolean => {
  let unitInFirstTeam: boolean = false;
  for (let row = 0; row < allUnits.length / 2; row++) {
    for (let column = 0; row < allUnits[row].length; column++) {
      if (allUnits[row][column] === turnUnit) {
        unitInFirstTeam = true;
      }
    }
  }
  return unitInFirstTeam;
};

// true - first team; false - second team.
