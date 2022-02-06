import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { Melee } from "../../Behavior/ChoiceBehavior/Melee";
import { Attack } from "../../Behavior/ActionBehavior/Attack";
import { AttackUnit } from "./AttackUnit";

export class Skeleton extends AttackUnit {
  constructor() {
    super(
      "Skeleton",
      100,
      100,
      50,
      false,
      25,
      new UnDefended(),
      new Melee(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]): void{
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
