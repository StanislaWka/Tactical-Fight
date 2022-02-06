import { Unit } from "../Unit";
import { IDefendBehavior } from "../../Behavior/DefendBehavior/DefendBehavior";
import { IChoiceBehavior } from "../../Behavior/ChoiceBehavior/ChoiceBehavior";
import { IAttackBehavior } from "../../Behavior/ActionBehavior/ActionBehavior";

export abstract class AttackUnit extends Unit {
  private _damage: number;
  private _actionBehavior: IAttackBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
    _damage: number,
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
    this._damage = _damage;
    this._actionBehavior = _actionBehavior;
  }

  public get damage(): number {
    return this._damage;
  }
  public set damage(value: number) {
    this._damage = value;
  }

  public get actionBehavior(): IAttackBehavior {
    return this._actionBehavior;
  }
  public set actionBehavior(value: IAttackBehavior) {
    this._actionBehavior = value;
  }

  makeAnAttack(enemy: Unit[], attackAbleUnits:Unit[]){
      this._actionBehavior.doAction(enemy, this.damage)
      return enemy;
  }

}
