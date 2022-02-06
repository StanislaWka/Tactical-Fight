import { Unit } from "../../Classes/Unit";
import { IIndexUnit } from '../../interfaces/interfaces'

export const getUnitCoordination = (
  allUnits: Unit[][],
  turnUnit: Unit
): IIndexUnit => {
  allUnits.forEach((row, rowIndex) => {
    row.forEach((unit, unitIndex) => {
      if (unit === turnUnit) {
        return {row: rowIndex, column: unitIndex};
      }
    })
  })
  return {row: 0, column: 0};
};


