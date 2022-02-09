import { Unit } from "../../Classes/Unit";

export const checkUnitTeam = (allUnits: Unit[][], turnUnit: Unit): boolean => {
  let unitInFirstTeam: boolean = false;
  for(let row = 0; row < allUnits.length/2; row++) {
    for(let column =0 ; column < allUnits[row].length; column++) {
      if(allUnits[row][column] === turnUnit){
        unitInFirstTeam = true;
      }
    }
    
  }
  // allUnits.forEach(row => {
  //   row.forEach(unit => {
  //     if (unit === turnUnit) {
  //       unitInFirstTeam = true;
  //     }
  //   })
  // })
  return unitInFirstTeam;
};

// true - first team; false - second team.
