import { Unit } from "../Unit";
import { IDefendBehavior } from "../../Behavior/DefendBehavior/DefendBehavior";
import { IChoiceBehavior } from "../../Behavior/ChoiceBehavior/ChoiceBehavior";
import { IAttackBehavior } from "../../Behavior/ActionBehavior/ActionBehavior";

export abstract class Paralazyer extends Unit {
  private _actionBehavior: IAttackBehavior;
  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
    _defended: IDefendBehavior,
    _choiceBehavior: IChoiceBehavior,
    _actionBehavior: IAttackBehavior
  ) {
    super(
      _name,
      _healthPoint,
      _maxHealthPoint,
      _initiative,
      _isParalyzes,
      _defended,
      _choiceBehavior
    );
    this._actionBehavior = _actionBehavior;
  }

  public get actionBehavior(): IAttackBehavior {
    return this._actionBehavior;
  }
  public set actionBehavior(value: IAttackBehavior) {
    this._actionBehavior = value;
  }

  paralyze(enemy: Unit[], attackAbleUnits:Unit[]){
      this._actionBehavior.doAction(enemy)
      return enemy;
  }

}
