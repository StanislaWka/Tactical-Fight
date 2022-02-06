import { Unit } from "../Unit";
import { UnDefended } from "../../Behavior/DefendBehavior/UnDefended";
import { RangeOrMage } from "../../Behavior/ChoiceBehavior/AnotherTeam";
import { Paralyze } from "../../Behavior/ActionBehavior/Paralyze";
import { Paralazyer } from "./Paralazyer";

export class Sirena extends Paralazyer {
  constructor() {
    super(
      "Sirena",
      80,
      80,
      20,
      false,
      new UnDefended(),
      new RangeOrMage(),
      new Paralyze(),
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]): void{
    this.paralyze(enemy, attackAbleUnits);
  }
}
