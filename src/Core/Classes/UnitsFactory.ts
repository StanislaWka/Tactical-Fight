import { Skeleton } from "./AttackUnits/Skeleton";
import { SkeletonMage } from "./AttackUnits/SkeletonMage";
import { Centaur } from "./AttackUnits/Centaur";
import { Bandit } from "./AttackUnits/Bandit";
import { Archimage } from "./AttackUnits/Archimage";
import { ElfArcher } from "./AttackUnits/ElfArcher";
import { Bishop } from "./Healers/Bishop";
import { Monk } from "./Healers/Monk";
import { Sirena } from "./Paralazers/Sirena";

export class UnitFactory {
  public static createUnit(name: string) {
    switch (name) {
      case "Skeleton":
        return new Skeleton();
      case "Skeleton Mage":
        return new SkeletonMage();
      case "Centaur":
        return new Centaur();
      case "Bandit":
        return new Bandit();
      case "Archimage":
        return new Archimage();
      case "Elf Archer":
        return new ElfArcher();
      case "Bishop":
        return new Bishop();
      case "Monk":
        return new Monk();
      case "Sirena":
        return new Sirena();
      default:
        throw new Error("Unknown name of unit");
    }
  }
}
