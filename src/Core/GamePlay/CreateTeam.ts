import { UnitFactory } from "../Classes/UnitsFactory";
import { Unit } from "../Classes/Unit";

interface ITeams {
  firstTeam: Unit[][];
  secondTeam: Unit[][];
}

export const createTeam = (): ITeams => {
  const unitNames = [
    "Skeleton",
    "Skeleton Mage",
    "Centaur",
    "Bandit",
    "Archimage",
    "Elf Archer",
    "Bishop",
    "Monk",
    "Sirena",
  ];

  const row = 2;
  const column = 3;

  const createTeam = (team: Unit[][]) => {
    for (let indexRow = 0; indexRow < row; indexRow++) {
      team[indexRow] = [];
      for (let indexColumn = 0; indexColumn < column; indexColumn++) {
        const randomUnit = Math.floor(Math.random() * Unit.length);
        team[indexRow].push(UnitFactory.createUnit(unitNames[randomUnit]));
      }
    }
    return team;
  };

  let team: Unit[][] = [];

  return { firstTeam: createTeam(team), secondTeam: createTeam(team) };
};
