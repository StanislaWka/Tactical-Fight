import { Unit } from "../../Classes/Unit";
import { checkUnitTeam } from "./ChekUnitTeam";
import { getUnitCoordination } from "./GetUnitCoordination";
import { IIndexUnit } from "../../interfaces/interfaces";

export const getUnitToMelee = (allUnits: Unit[][], turnUnit: Unit) => {
  const team: boolean = checkUnitTeam(allUnits, turnUnit);
  const coordination: IIndexUnit = getUnitCoordination(allUnits, turnUnit);

  for (
    let row = team ? coordination.row + 1 : coordination.row - 1;
    team ? row < allUnits.length : row >= 0;
    team ? row++ : row--
  ) {
    for (let column = 0; column < allUnits[row].length; column++) {
      if (team === checkUnitTeam(allUnits, allUnits[row][column])) {
        if (allUnits[row][column].healthPoint > 0) return [];
        continue;
      } else {
        const enemyRow = aliveEnemies(allUnits[row], coordination.column);
        if(!enemyRow.length){
            break;
        }
        return enemyRow;
      }
      
    }
  }
  return [];
};

const aliveEnemies = (enemyRow: Unit[], primaryColumn: number): Unit[] => {
  switch (primaryColumn) {
    case 0: {
      if (enemyRow[0].healthPoint > 0 || enemyRow[1].healthPoint > 0) {
        let aliveEnemyRow: Unit[] = [];
        if (enemyRow[0].healthPoint > 0) aliveEnemyRow.push(enemyRow[0]);
        if (enemyRow[1].healthPoint > 0) aliveEnemyRow.push(enemyRow[1]);
        return enemyRow;
      }
      if(enemyRow[3].healthPoint>0) return [enemyRow[3]];
      return [];
    }
    case 1: {
      if (enemyRow[0].healthPoint > 0 || enemyRow[2].healthPoint > 0) {
        let aliveEnemyRow: Unit[] = [];
        if (enemyRow[0].healthPoint > 0) aliveEnemyRow.push(enemyRow[0]);
        if (enemyRow[2].healthPoint > 0) aliveEnemyRow.push(enemyRow[2]);
        return enemyRow;
      }
      if(enemyRow[1].healthPoint>0) return [enemyRow[1]];
      return [];
    }
    case 2: {
      if (enemyRow[1].healthPoint > 0 || enemyRow[2].healthPoint > 0) {
        let aliveEnemyRow: Unit[] = [];
        if (enemyRow[1].healthPoint > 0) aliveEnemyRow.push(enemyRow[1]);
        if (enemyRow[2].healthPoint > 0) aliveEnemyRow.push(enemyRow[2]);
        return enemyRow;
      }
      if(enemyRow[0].healthPoint>0) return [enemyRow[0]];
      return [];
    }
    default: {
      return [];
    }
  }
};
