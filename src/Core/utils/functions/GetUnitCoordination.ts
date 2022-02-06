import { Unit } from "../../Classes/Unit";
import { IIndexUnit } from '../../interfaces/interfaces'

export const getUnitCoordination = (
  allUnits: Unit[][],
  turnUnit: Unit
): IIndexUnit => {
  for (let row = 0; row < allUnits.length; row++) {
    for (let column = 0; column < allUnits[column].length; column++) {
      if (allUnits[column][row] === turnUnit) {
        return {row, column};
      }
    }
  }
  return {row: 0, column: 0};
};


