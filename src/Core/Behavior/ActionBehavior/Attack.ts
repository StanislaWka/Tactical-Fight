import { Unit } from "../../Classes/Unit";
import { IAttackBehavior } from "./ActionBehavior";

export class Attack implements IAttackBehavior {
  doAction(enemies: Unit[], damage: number) {
    enemies.forEach((enemy) => {
      enemy.healthPoint -= enemy.receivedDamage(damage);
      enemy.healthPoint = enemy.healthPoint < 0 ? 0 : enemy.healthPoint;
    });
    return enemies;
  }
}
