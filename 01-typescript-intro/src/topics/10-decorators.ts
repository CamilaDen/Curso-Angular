//Los decoradores son funciones que pueden cambiar el comportamiento de clases, propiedades y metodos.

function classDecorator<T extends {new (... args: any[]): {} } > (
    constructor: T
) { 
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

@classDecorator
class SuperClass{
    public myProperty: string = 'Abc123';
    print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);