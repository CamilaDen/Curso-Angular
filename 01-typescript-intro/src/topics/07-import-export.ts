import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 100
    },
    {
        description: 'Nokia',
        price: 50
    }
];

const [total, tax] = taxCalculation( {
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);