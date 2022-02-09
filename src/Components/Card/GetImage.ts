import Archimage from '../../Core/Images/Archimage.jpg'
import Bandit from '../../Core/Images/Bandit.png.jpeg'
import Bishop from '../../Core/Images/Bishop.jpg'
import ElfArcher from '../../Core/Images/ElfArcher.webp'
import Monk from '../../Core/Images/Monk.jpg'
import Sirena from '../../Core/Images/Sirena.jpg'
import SkeletonMage from '../../Core/Images/SkeletonMage.webp'
import Skeleton from '../../Core/Images/Skeleton.png'
import Centaur from '../../Core/Images/Centaur.png'

export const getImage = (name: string) =>{
    switch(name){
        case 'Archimage': return Archimage
        case 'Bandit': return Bandit;
        case 'Skeleton': return Skeleton;
        case 'Skeleton Mage': return SkeletonMage
        case 'Centaur': return Centaur
        case 'Bishop': return Bishop
        case 'Monk': return Monk
        case 'Elf Archer': return ElfArcher
        case 'Sirena': return Sirena;
        default: return undefined;
    }
}

