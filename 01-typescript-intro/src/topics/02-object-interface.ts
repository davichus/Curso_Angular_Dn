const skills:string[]=  ['Bash', 'Counter', 'Healing'];
 
interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string; // Propiedad opcional
}


const strider : Character = { 
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
}
strider.homeTown = 'Rivendell';
console.table(strider);
export {};
