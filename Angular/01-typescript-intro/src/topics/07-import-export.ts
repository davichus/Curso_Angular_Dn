import { type Product, taxcCalculation } from "./06-function-destrocturing";

const shoppingCart : Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    },
    {
        description: 'iPad Air',
        price: 350
    }
]

const [ total, tax ] = taxcCalculation({ 
    products: shoppingCart,
    tax: 0.15
 });

console.log('Total', total);
console.log('Tax', tax);