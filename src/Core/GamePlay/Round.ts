export class Round {
  private _round: number;
  
  constructor() {
    this._round = 1;
  }

  public get round(): number {
    return this._round;
  }
  public set round(value: number) {
    this._round = value;
  }
}
