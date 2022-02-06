import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { RangeOrMage } from "../../Behavior/ChoiceBehavior/AnotherTeam";
import { Attack } from "../../Behavior/ActionBehavior/Attack";
import { AttackUnit } from "./AttackUnit";

export class Bandit extends AttackUnit {
  constructor() {
    super(
      "Bandit",
      75,
      75,
      60,
      false,
      30,
      new UnDefended(),
      new RangeOrMage(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]){
      this.makeAnAttack(enemy, attackAbleUnits);
  }
}
