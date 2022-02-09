import React from "react";
import { Unit } from "../../Core/Classes/Unit";
import { getImage } from "./GetImage";
import "./card.css";
import { Defended } from "../../Core/Behavior/DefendBehavior/Defended";

export interface ICard {
  key: string;
  unit: any;
  turnUnit: Unit;
  actionableUnits: Unit[];
  numberTeam: number;
  handleDefence: () => void;
  handleAction: (turnUnit: Unit, unit: Unit) => void;
  attack: boolean;
  roundTurnedUnits: Unit[];
  mouseOverUnit: Unit | undefined;
}

export const Card: React.FunctionComponent<ICard> = ({
  key,
  unit,
  turnUnit,
  actionableUnits,
  numberTeam,
  handleDefence,
  handleAction,
  attack,
  roundTurnedUnits,
  mouseOverUnit,
}) => {
  const numberTeamClassName = numberTeam === 1 ? "first" : "second";
  const turnUnitClassName = turnUnit === unit ? "turnUnit" : "";
  const actionableUnitClass =
    actionableUnits.includes(unit) && attack ? "action" : "";
  const turnedUnitsClassName = roundTurnedUnits.includes(unit) ? "turned" : "";
  const paralyzedCardClassName = unit.isParalyze ? "paralyze" : "";
  const defendClassName = unit.defend instanceof Defended ? "defended" : "";
  const remainedHp = unit.healthPoint / unit.maxHealthPoint;
  const mouseOverUnitClassName = mouseOverUnit === unit ? "relative" : "";

  let remainingHpClassName =
    remainedHp <= 1 && remainedHp > 0.75
      ? ""
      : remainedHp <= 0.75 && remainedHp > 0.5
      ? "threeQuarter"
      : remainedHp <= 0.5 && remainedHp > 0.25
      ? "half"
      : remainedHp <= 0.25 && remainedHp > 0
      ? "quarter"
      : "zero";

  const image = getImage(unit.getName);

  const handleActionCard = () => {
    handleAction(turnUnit, unit);
  };

  return (
    <div
      className={`beforeCard ${turnedUnitsClassName}  ${defendClassName} ${mouseOverUnitClassName}`}
      onClick={handleActionCard}
      key={key}
    >
      <div
        className={`card ${actionableUnitClass} ${numberTeamClassName} ${turnedUnitsClassName} ${remainingHpClassName} ${paralyzedCardClassName} ${turnUnitClassName}`}
      >
        <img className="Card" src={image} alt={unit.getName}></img>
        <div className="cardInfo">
          <p className="information">
            HP: {unit.healthPoint}/{unit.maxHealthPoint}
          </p>
          {unit.damage ? (
            <p className="information">AD: {unit.damage}</p>
          ) : unit.heal ? (
            <p className="information">HL: {unit.heal}</p>
          ) : (
            <p className="information">Stan</p>
          )}
        </div>
      </div>
    </div>
  );
};
