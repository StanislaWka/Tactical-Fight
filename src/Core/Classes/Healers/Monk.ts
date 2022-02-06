import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { Healer } from "../../Behavior/ChoiceBehavior/OurTeam";
import { Heal } from "../../Behavior/ActionBehavior/Heal";
import { HealUnit } from "./HealUnit";

export class Monk extends HealUnit {
  constructor() {
    super(
      "Monk",
      90,
      90,
      20,
      false,
      40,
      new UnDefended(),
      new Healer(),
      new Heal()
    );
  }
  doAction(allies: Unit[], attackAbleUnits: Unit[]): void{
    this.makeHeal(allies, attackAbleUnits);
  }
}
