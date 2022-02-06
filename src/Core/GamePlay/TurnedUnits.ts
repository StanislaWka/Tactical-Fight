import { Unit } from "../Classes/Unit";

export class TurnedUnits {

    private _turnedUnits: Unit[]

    constructor(turnedUnits: Unit[]){
        this._turnedUnits = turnedUnits
    }

    public get turnedUnits(): Unit[] {
        return this._turnedUnits;
    }

    public set turnedUnits(value: Unit[]){
        this._turnedUnits = value;
    }

}