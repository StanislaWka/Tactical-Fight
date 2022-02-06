import { Unit } from "../../Classes/Unit";

export interface IAttackBehavior {
  doAction(unit: Unit[], impact?: number): Unit[];
}
