import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { RangeOrMage } from "../../Behavior/ChoiceBehavior/AnotherTeam";
import { Attack } from "../../Behavior/ActionBehavior/Attack";
import { AttackUnit } from "./AttackUnit";

export class SkeletonMage extends AttackUnit {
  constructor() {
    super(
      "Skeleton Mage",
      90,
      90,
      40,
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