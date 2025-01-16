//Encadenamiento opcional

export interface Passanger{
    name: string;
    children?: string[];

}

const passanger1: Passanger = {
    name:'Camila',
}

const passanger2: Passanger = {
    name: 'Carlos',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passanger) => {
    const howManyChildren = passenger.children?.length || 0; //aqui le digo que children es opcional y si no tiene nada le asigna 0
    // const howManyChildren = passenger.children!.length; //siempre va a recibir ese dato
    
    // if(!passenger.children) return 0;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passanger1);
