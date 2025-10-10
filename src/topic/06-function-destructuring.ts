export interface Product {
    description: string;
    price: number;
}

/***
 * ejemplo de funcion que recibe un objeto como parametro
 * y desestructura sus propiedades en la firma de la funcion
 */

const phone: Product = {
    description: 'Nokia N20',
    price: 300.5
}

const tablet: Product = {
    description: 'iPad Air',
    price: 900.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart = [phone, tablet]

const tax = 0.21;

// const result=taxCalculation(
//     {products:shoppingCart
//     ,tax}
// );

// const result=taxCalculation({products:[phone,tablet],tax});
// console.log('Total:', result[0]);
// console.log('Tax:', result[1]);

const [total, totalTax] = taxCalculation({ products: shoppingCart, tax }); //desestructuracion del array resultado de la funcion


console.log('Total:', total);
console.log('Tax:', totalTax);


// export {};