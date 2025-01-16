// import { Person } from './08-clases';

export class Person{
    constructor( 
        public name: string, 
        private addres: string = 'No Adress',
    ) {}
}

// export class Hero extends Person{ //el super llama al contrcutor del padre
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName:string,
//     ){
//         super(realName, 'New York');
//     }
// }
export class Hero{ //el super llama al contrcutor del padre
    constructor(
        public alterEgo: string,
        public age: number,
        public realName:string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}
const tony = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman',45, 'Tony Stark', tony);

console.log(ironman);
