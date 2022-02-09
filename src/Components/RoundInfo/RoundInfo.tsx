import { Unit } from "../../Core/Classes/Unit";
import RoundInfoCard from "../RoundInfoCard";
import { getUniqueID } from "../Utils/utils";
import './roundInfo.css'

export interface IRoundInfo {
  roundOrderTeam: Unit[];
  turnUnit: Unit,
  setMouseOverUnit: (unit: Unit | undefined) => void
}

export const RoundInfo: React.FunctionComponent<IRoundInfo> = ({
  roundOrderTeam,
  turnUnit,
    setMouseOverUnit
}: IRoundInfo) => {
  return (
    <div className="roundInfo">
      {roundOrderTeam.map((unit) => (
        <RoundInfoCard unit={unit} turnUnit={turnUnit} setMouseOverUnit={setMouseOverUnit} key={getUniqueID()} />
      ))}
    </div>
  );
};
