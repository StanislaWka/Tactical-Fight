import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { Healer } from "../../Behavior/ChoiceBehavior/OurTeam";
import { Heal } from "../../Behavior/ActionBehavior/Heal";
import { HealUnit } from "./HealUnit";

export class Bishop extends HealUnit {
  constructor() {
    super(
      "Bishop",
      130,
      130,
      20,
      false,
      25,
      new UnDefended(),
      new Healer(),
      new Heal()
    );
  }
  doAction(allies: Unit[], attackAbleUnits: Unit[]): void{
    this.makeHeal(allies, attackAbleUnits);
  }
}
