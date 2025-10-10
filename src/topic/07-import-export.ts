import type {Product} from "./06-function-destructuring";
import {taxCalculation} from "./06-function-destructuring";

const shoppingCart : Product[]=[
    {description:'Nokia N20',price:300.5},
    {description:'iPad Air',price:900.0},
    {description:'Samsung Galaxy',price:850.0} 
];

const [total,tax]=taxCalculation({products:shoppingCart,tax:0.15});

console.log('Total:',total);
console.log('Tax:',tax);    
