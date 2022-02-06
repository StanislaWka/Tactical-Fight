import {Unit} from '../../Classes/Unit'
import {IChoiceBehavior} from './ChoiceBehavior'
import {getUnitToMelee} from '../../utils/functions/GetUnitsToMelee'

export class Melee implements IChoiceBehavior {
    getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
        const enemies = getUnitToMelee(units, turnUnit);
        return enemies;
    }
}