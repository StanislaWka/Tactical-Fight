import {Unit} from '../../Classes/Unit'
import {IChoiceBehavior} from './ChoiceBehavior'
import {getUnitFromTeam} from '../../utils/functions/GetUnitFromTeam'

export class Healer implements IChoiceBehavior {
    getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
        const allies = getUnitFromTeam(units, turnUnit);
        return allies;
    }
}