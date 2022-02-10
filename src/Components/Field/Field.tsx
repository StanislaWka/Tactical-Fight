import { useEffect, useState } from "react";
import { Defended } from "../../Core/Behavior/DefendBehavior/Defended";
import { Unit } from "../../Core/Classes/Unit";
import { getTurnUnit } from "../../Core/GamePlay/GetTurnUnit";
import { Round } from "../../Core/GamePlay/Round";
import { TurnedUnits } from "../../Core/GamePlay/TurnedUnits";
import Team from "../Team";
import FieldImg from "../images/FieldImg.png";
import { SkeletonMage } from "../../Core/Classes/AttackUnits/SkeletonMage";
import { Archimage } from "../../Core/Classes/AttackUnits/Archimage";
import { Bishop } from "../../Core/Classes/Healers/Bishop";
import RoundInfo from "../RoundInfo";
import Modal from "../Modal";
import "./field.css";

export interface IFieldProps {
  round: Round;
  roundTurnedUnits: TurnedUnits;
  firstTeam: Unit[][];
  secondTeam: Unit[][];
  firstTeamOrder: Unit[];
  secondTeamOrder: Unit[];
  combineOrder: Unit[];
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  round,
  roundTurnedUnits,
  firstTeam,
  secondTeam,
  firstTeamOrder,
  secondTeamOrder,
  combineOrder,
}) => {
  const [step, setStep] = useState<number>(1);
  const [turnUnit, setTurnUnit] = useState<any>();
  const [actionableUnits, setActionableUnits] = useState<Unit[]>([]);
  const [attack, setAttack] = useState<boolean>(false);
  const [mouseOverUnit, setMouseOverUnit] = useState<Unit | undefined>(undefined);
  const [modal, setModal] = useState<boolean>(false);

  const twoTeams = firstTeam.concat(secondTeam);
  useEffect(() => {
    const turnUnitStep = getTurnUnit({
      firstTeam,
      secondTeam,
      step,
      roundTurnedUnits,
      round,
      firstTeamOrder,
      secondTeamOrder,
    });
    if (turnUnitStep) {
      if (turnUnitStep.isParalyze) {
        turnUnitStep.isParalyze = false;
        roundTurnedUnits.turnedUnits.push(turnUnitStep);
        setStep((prev) => (prev += 1));
      } else {
        setTurnUnit(turnUnitStep);
        setActionableUnits(
          turnUnitStep.getActionableUnits(twoTeams, turnUnitStep)
        );
      }
    } else if(turnUnitStep===null){
      setStep((prev) => prev++);
    }else{
      setModal(true)
    }
    setAttack(false);
  }, [step]);

  const getDestructionTeam = (team: Unit[][]): Unit[] => {
    let destructionTeam: Unit[] = [];
    team.forEach((row) => {
      destructionTeam.push(...row);
    });
    return destructionTeam;
  };

  const doTurn = (turnUnit: Unit, unit: Unit[], actionableUnits: Unit[]) => {
    turnUnit.doAction(unit, actionableUnits);
  };

  const handleAction = (turnUnit: Unit, unit: Unit) => {
    if (actionableUnits.includes(unit)) {
      doTurn(turnUnit, [unit], actionableUnits);
      roundTurnedUnits.turnedUnits.push(turnUnit);
      setStep((prev) => (prev += 1));
    }
  };

  const handleDefence = () => {
    turnUnit.defend = new Defended();
    roundTurnedUnits.turnedUnits.push(turnUnit);
    setStep((prev) => (prev += 1));
  };

  const handleMassAction = () => {
    if (
      turnUnit instanceof SkeletonMage ||
      turnUnit instanceof Archimage ||
      turnUnit instanceof Bishop
    ) {
      doTurn(turnUnit, actionableUnits, actionableUnits);
      roundTurnedUnits.turnedUnits.push(turnUnit);
      setStep((prev) => (prev += 1));
    } else {
      setAttack(true);
    }
  };

  const firstTeamUnit = getDestructionTeam(firstTeam);
  const secondTeamUnit = getDestructionTeam(secondTeam);


  return (
    <div className="mainField" style={{ backgroundImage: `url(${FieldImg})` }}>
      <p className='rounds'>
        Round: {round.round} step: {step}
      </p>
      <Team
        id={1}
        turnUnit={turnUnit}
        unitsTeam={firstTeamUnit}
        handleAction={handleAction}
        handleDefence={handleDefence}
        numberTeam={1}
        actionableUnits={actionableUnits}
        attack={attack}
        roundTurnedUnits={roundTurnedUnits.turnedUnits}
        mouseOverUnit={mouseOverUnit}
      />
      <div className="emptyZone"></div>
      <Team
        id={2}
        turnUnit={turnUnit}
        unitsTeam={secondTeamUnit}
        handleAction={handleAction}
        handleDefence={handleDefence}
        numberTeam={2}
        actionableUnits={actionableUnits}
        attack={attack}
        roundTurnedUnits={roundTurnedUnits.turnedUnits}
        mouseOverUnit={mouseOverUnit}
      />
      <div className='withBtn'>
        <button className="btn" onClick={handleDefence}>Defence</button>
        <button className="btn" onClick={handleMassAction}>Attack</button>
      </div>

      <div className='fieldRoundInfo'>
        <RoundInfo roundOrderTeam={combineOrder} turnUnit={turnUnit} setMouseOverUnit={setMouseOverUnit} />
      </div>
      {modal ? <Modal/> : null}
    </div>
  );
};
