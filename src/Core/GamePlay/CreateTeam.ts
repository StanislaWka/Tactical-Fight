import { UnitFactory } from "../Classes/UnitsFactory";
import { Unit } from "../Classes/Unit";

interface ITeams {
  firstTeam: Unit[][];
  secondTeam: Unit[][];
}

export const createTeam = (): ITeams => {
  const unitNamesFirst = [
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

  const unitNamesSecond = [
    "Skeleton Mage",
    "Elf Archer",
    "Bishop",
    "Sirena",
    "Bandit",
    "Monk",
    "Skeleton",
    "Centaur",
    "Archimage",
  ];

  const row = 2;
  const column = 3;

  const createTeamUnit = (team: Unit[][], numberTeam: number) => {

    for (let indexRow = 0; indexRow < row; indexRow++) {
      team[indexRow] = [];
      for (let indexColumn = 0; indexColumn < column; indexColumn++) {
        if(numberTeam === 1){
          const randomUnit = Math.floor(Math.random() * Unit.length);
          team[indexRow].push(UnitFactory.createUnit(unitNamesFirst[randomUnit]));
        }else{
          const randomUnit = Math.floor((Math.random() * 13) % Unit.length);
          team[indexRow].push(UnitFactory.createUnit(unitNamesSecond[randomUnit]));
        }
      }
    }
    return team;
  };

  let team: Unit[][] = [];

  const firstTeam = createTeamUnit(team, 1);
  team = [];
  const secondTeam = createTeamUnit(team, 2)

  return { firstTeam, secondTeam };
};
