import { IDefendBehavior } from "./DefendBehavior";

export class Defended implements IDefendBehavior {
  defend(enemyDamage: number) {
    return Math.floor(enemyDamage * 0.5);
  }
}
