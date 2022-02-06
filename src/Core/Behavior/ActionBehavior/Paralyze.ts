import { Unit } from "../../Classes/Unit";
import { IAttackBehavior } from "./ActionBehavior";

export class Paralyze implements IAttackBehavior {
  doAction(enemies: Unit[]) {
    enemies.forEach((enemy) => {
      enemy.isParalyze = true;
    });
    return enemies;
  }
}
