import {Unit} from '../../Classes/Unit'

export interface IChoiceBehavior {
    getActionableUnits(units:Unit[][], turnUnit: Unit): Unit[];
}