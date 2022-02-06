import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { RangeOrMage } from "../../Behavior/ChoiceBehavior/AnotherTeam";
import { Attack } from "../../Behavior/ActionBehavior/Attack";
import { AttackUnit } from "./AttackUnit";

export class ElfArcher extends AttackUnit {
  constructor() {
    super(
      "Elf Archer",
      90,
      90,
      60,
      false,
      45,
      new UnDefended(),
      new RangeOrMage(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]){
      this.makeAnAttack(enemy, attackAbleUnits);
  }
}