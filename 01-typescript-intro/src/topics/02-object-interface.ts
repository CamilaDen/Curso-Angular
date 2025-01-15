
//let skills = ['Bash', 'Counter', 'Healing', true]; //no fuerza al programador a mantener un solo tipo de dato, va a inferir mas de uno en este caso.
let skills: string[] = ['Bash', 'Counter', 'Healing']; //de esta manera aseguro el tipo de dato.

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?:string; //con el signo de pregunta permito que este campo sea opcional. No es lo mismo que la propiedad no se encuentre.
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills:['Bash', 'Counter']
}; // para tipar de manera estricta un objeto utilizamos una interface.

strider.hometown = 'Rivendell';
console.table(strider);


export {};