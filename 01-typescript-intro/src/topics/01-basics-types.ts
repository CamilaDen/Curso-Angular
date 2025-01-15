const name = 'Cami'; //infiere el tipo de dato (por detras le asigna el tipo string)
let hpPoints: number | 'Full' = 95; //permite asignarle mas de un tipo de dato o un dato en concreto como el ejemplo de Full.
const isAlive: boolean = true;

hpPoints = 'Full';

console.log(name, hpPoints, isAlive);

export{}; //esto significa que basics-types es un modulo