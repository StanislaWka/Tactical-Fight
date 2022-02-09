import { Unit } from "../Classes/Unit";

export const getTurnOrderUnitsTeam = (  allUnits: Unit[][]):Unit[] => {

    let sortedUnits:Unit[] = [];

    allUnits.forEach(row => {
        sortedUnits.push(...row)
    })

    return sortedUnits.sort((a,b) => a.initiative < b.initiative ? 1 : -1)

}