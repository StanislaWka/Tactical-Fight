import {IDefendBehavior} from './DefendBehavior'

export class UnDefended implements IDefendBehavior{
    defend(enemyDamage: number){
        return enemyDamage;
    }
}