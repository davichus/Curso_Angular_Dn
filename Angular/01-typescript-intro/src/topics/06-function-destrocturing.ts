export interface Product {
    description: string;
    price: number;  
}
const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxcCalculation( options: TaxCalculationOptions ): [number, number] {
//function taxcCalculation( {tax, products }:TaxCalculationOptions ): [number, number] {
export function taxcCalculation( options :TaxCalculationOptions ): [number, number] {

    const {tax, products} = options;
    let total = 0;

    products.forEach(({ price }) =>{
        total += price;
    })
    return [total, total * options.tax];
}


const shoppingCart= [phone, tablet];
const tax= 0.15;

const [total, taxTotal] = taxcCalculation({
    products: shoppingCart,
    tax
});


console.log('Total', total);
console.log('Tax', taxTotal);

    
