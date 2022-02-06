import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { Melee } from "../../Behavior/ChoiceBehavior/Melee";
import { Attack } from "../../Behavior/ActionBehavior/Attack";
import { AttackUnit } from "./AttackUnit";

export class Centaur extends AttackUnit {
  constructor() {
    super(
      "Centaur",
      150,
      150,
      50,
      false,
      50,
      new UnDefended(),
      new Melee(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]) {
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
