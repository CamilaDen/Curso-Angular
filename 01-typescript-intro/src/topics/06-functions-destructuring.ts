
export interface Product{
    description: string;
    price: number;
}


const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}


// function taxCalculation( options: TaxCalculationOptions) : [number, number] {
// function taxCalculation( {tax, products} : TaxCalculationOptions) : [number, number] { //en esta linea aplico la desestructuracion en los parametros
export function taxCalculation( options : TaxCalculationOptions) : [number, number] {
    let total = 0;

    const { tax, products} = options; //en este caso estoy desestructurando dentro de la funcion

    products.forEach( ({ price }) => { // aqui estoy desestructurando price
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [ phone, tablet];
const tax = 0.15;


const [total, taxResult] = taxCalculation({ //desestructuro el resultado de la funcion
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total );
console.log('Tax', taxResult);

// export{};