import { Unit } from "../../Classes/Unit";

export const checkUnitTeam = (allUnits: Unit[][], turnUnit: Unit): boolean => {
  let unitInFirstTeam: boolean = false;
  allUnits.forEach(row => {
    row.forEach(unit => {
      if (unit === turnUnit) {
        unitInFirstTeam = true;
      }
    })
  })
  return unitInFirstTeam;
};

// true - first team; false - second team.
