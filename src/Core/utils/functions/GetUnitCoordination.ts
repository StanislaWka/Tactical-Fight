import { Unit } from "../../Classes/Unit";
import { IIndexUnit } from '../../interfaces/interfaces'

export const getUnitCoordination = (
  allUnits: Unit[][],
  turnUnit: Unit
): IIndexUnit => {
  let rowIndexR = 0, columnIndexR = 0;
  allUnits.forEach((row, rowIndex) => {
    row.forEach((unit, unitIndex) => {
      if (unit === turnUnit) {
        rowIndexR = rowIndex;
        columnIndexR = unitIndex;
      }
    })
  })
  return {row: rowIndexR, column: columnIndexR};
};


