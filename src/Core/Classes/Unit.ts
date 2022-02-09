import { IDefendBehavior } from "../Behavior/DefendBehavior/DefendBehavior";
import { IChoiceBehavior } from "../Behavior/ChoiceBehavior/ChoiceBehavior";

export abstract class Unit {
  constructor(
    private _name: string,
    private _healthPoint: number,
    private _maxHealthPoint: number,
    private _initiative: number,
    private _isParalyzes: boolean,
    private _defended: IDefendBehavior,
    private _choiceBehavior: IChoiceBehavior
  ) {}

  public get getName(): string {
    return this._name;
  }

  public set setName(value: string) {
    this._name = value;
  }

  public get healthPoint(): number {
    return this._healthPoint;
  }

  public set healthPoint(value: number) {
    this._healthPoint = value;
  }

  public get maxHealthPoint(): number {
    return this._maxHealthPoint;
  }

  public set maxHealthPoint(value: number) {
    this._healthPoint = value;
  }

  public get initiative(): number {
    return this._initiative;
  }

  public set initiative(value: number) {
    this._initiative = value;
  }

  public get isParalyze(): boolean {
    return this._isParalyzes;
  }

  public set isParalyze(value: boolean) {
    this._isParalyzes = value;
  }

  public get defend() {
    return this._defended;
  }

  public set defend(value: IDefendBehavior) {
    this._defended = value;
  }

  public get behavior() {
    return this._choiceBehavior;
  }

  public set behavior(value: IChoiceBehavior) {
    this._choiceBehavior = value;
  }

  receivedDamage(enemyDamage: number): number {
    return this._defended.defend(enemyDamage);
  }

  getActionableUnits(allUnits: Unit[][], turnUnit: Unit): Unit[] {
    const actionAbleUnits = this.behavior.getActionableUnits(allUnits, turnUnit);
    return actionAbleUnits;
  }

  abstract doAction(enemy: Unit[], attackAbleUnits: Unit[]): void;
}
