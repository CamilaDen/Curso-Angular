
function addNumbers(a: number, b: number){ //infiere que tipo devuelve la funcion. Especificar el tipo de dato en concreto para los parametros
 return a + b;
}

const addNumbersArrow = (a:number, b:number): string => {
    return `${a + b}`;
}

function mutiply( firstNumber:number , secondNumber?:number, base:number = 2 ){ //ej parametros: obligatorio, opcional y opcional con valor por defecto.
    return firstNumber * base;
}

// const result: number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = mutiply(5);
// console.log(result, result2, multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}

const healCharacter = (character: Character, amount:number ) => { //objeto con interface como tipo de dato
    character.hp += amount;
}

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHP();


export{};
