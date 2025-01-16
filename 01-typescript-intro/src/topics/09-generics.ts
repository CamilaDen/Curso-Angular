

export function whatsMyType<T>( argument: T ): T{ //<T> es el primer generico, esto lo vuelve una funcion generica
    return argument;
}
//El mismo tipo de dato que le paso por <T> es el que tomara por parametro y el que retornara la funcion.

let amIString = whatsMyType<string>('Hola Mundo'); //obligo a que me pida ese tipo de dato
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3]);

