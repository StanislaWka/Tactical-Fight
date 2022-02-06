import {Unit} from '../../Classes/Unit'
import {IChoiceBehavior} from './ChoiceBehavior'
import {getUnitFromAnotherTeam} from '../../utils/functions/GetUnitFormAnotherTeam'

export class RangeOrMage implements IChoiceBehavior {
    getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
        const enemies = getUnitFromAnotherTeam(units, turnUnit);
        return enemies;
    }
}