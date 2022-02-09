import { Unit } from "../Classes/Unit";
import { TurnedUnits } from "./TurnedUnits";

export const GetInitiativeUnits = (
  allUnits: Unit[],
  turnedUnits: TurnedUnits
): Unit | null => {


  for(let index =0 ; index < allUnits.length ; index++) {
    if(allUnits[index].healthPoint > 0 && !turnedUnits.turnedUnits.includes(allUnits[index])){
      return allUnits[index];
    }
  }

  return null;
};
