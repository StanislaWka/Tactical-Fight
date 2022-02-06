import { Unit } from "../Unit";
import { IDefendBehavior } from "../../Behavior/DefendBehavior/DefendBehavior";
import { IChoiceBehavior } from "../../Behavior/ChoiceBehavior/ChoiceBehavior";
import { IAttackBehavior } from "../../Behavior/ActionBehavior/ActionBehavior";

export abstract class HealUnit extends Unit {
  private _heal: number;
  private _actionBehavior: IAttackBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
    _heal: number,
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
    this._heal = _heal;
    this._actionBehavior = _actionBehavior;
  }

  public get heal(): number {
    return this._heal;
  }
  public set heal(value: number) {
    this._heal = value;
  }

  public get actionBehavior(): IAttackBehavior {
    return this._actionBehavior;
  }
  public set actionBehavior(value: IAttackBehavior) {
    this._actionBehavior = value;
  }

  makeHeal(allies: Unit[], attackAbleUnits:Unit[]){
      this._actionBehavior.doAction(allies, this.heal)
      return allies;
  }

}
