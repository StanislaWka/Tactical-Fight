import { UnDefended } from "../Behavior/DefendBehavior/UnDefended";
import { Unit } from "../Classes/Unit";
import { GetInitiativeUnits } from "./GetInitiativeUnits";
import { Round } from "./Round";
import { TurnedUnits } from "./TurnedUnits";

export interface IGetTurnUnit {
  firstTeam: Unit[][];
  secondTeam: Unit[][];
  step: number;
  roundTurnedUnits: TurnedUnits;
  round: Round;
  firstTeamOrder: Unit[];
  secondTeamOrder: Unit[];
}

export const getTurnUnit = ({
  firstTeam,
  secondTeam,
  step,
  roundTurnedUnits,
  round,
  firstTeamOrder,
  secondTeamOrder,
}: IGetTurnUnit) => {
  const goToTheNextRound = (team: Unit[][]) => {
    return team.every((row) =>
      row.every(
        (unit) =>
          roundTurnedUnits.turnedUnits.includes(unit) || unit.healthPoint < 1
      )
    );
  };

  const firstTeamGoToTheNextRound = goToTheNextRound(firstTeam);
  const secondTeamGoToTheNextRound = goToTheNextRound(secondTeam);

  if (firstTeamGoToTheNextRound && secondTeamGoToTheNextRound) {
    round.round++;
    roundTurnedUnits.turnedUnits = [];
    const setUndefendBehavior = (team: Unit[][]) => {
      team.forEach((row) => {
        row.forEach((unit) => {
          unit.defend = new UnDefended();
        });
      });
    };

    setUndefendBehavior(firstTeam);
    setUndefendBehavior(secondTeam);
  }

  const checkEndOfTheGame = (team: Unit[][]) => {
    return team.every((row) => row.every((unit) => unit.healthPoint < 1));
  };

  const endFirstTeam = checkEndOfTheGame(firstTeam);
  const endSecondTeam = checkEndOfTheGame(secondTeam);

  if(endFirstTeam || endSecondTeam) return false;

  if (firstTeamGoToTheNextRound)
    return GetInitiativeUnits(secondTeamOrder, roundTurnedUnits);
  if (secondTeamGoToTheNextRound)
    return GetInitiativeUnits(firstTeamOrder, roundTurnedUnits);
  return step % 2
    ? GetInitiativeUnits(firstTeamOrder, roundTurnedUnits)
    : GetInitiativeUnits(secondTeamOrder, roundTurnedUnits);
};
