import { Unit } from "../../Classes/Unit";
import { IAttackBehavior } from "./ActionBehavior";

export class Heal implements IAttackBehavior {
  doAction(allies: Unit[], healPoint: number) {
    allies.forEach((ally) => {
      ally.healthPoint += healPoint;
      ally.healthPoint =
        ally.healthPoint > ally.maxHealthPoint
          ? ally.maxHealthPoint
          : ally.healthPoint;
    });
    return allies;
  }
}
