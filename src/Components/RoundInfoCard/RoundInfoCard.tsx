import { Unit } from "../../Core/Classes/Unit";
import { getImage } from "../Card/GetImage";
import './roundInfoCard.css'

export interface IRoundCard{
    unit: Unit, 
    turnUnit: Unit,
    setMouseOverUnit: (unit: Unit | undefined) => void
    key:string
}

export const RoundInfoCard: React.FunctionComponent<IRoundCard> = ({unit, turnUnit, setMouseOverUnit}:IRoundCard) => {

    const image = getImage(unit.getName);
    const turnUnitClassName = unit === turnUnit ? 'turnUnit' : ''
    
    return(
        <div className={`roundInfoCard ${turnUnitClassName}`} onMouseOver={() => setMouseOverUnit(unit)} onMouseOut={() => setMouseOverUnit(undefined)}>
            <img src={image} alt={unit.getName} />
        </div>
    )
}