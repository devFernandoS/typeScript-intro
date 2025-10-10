const name:string = 'Strider';
let age:number = 20;
let hp:number | string = 95;
const isAlive:boolean = true;
// name = 'Tony'; /**"Cannot assign to 'name' because it is a constant."***/

hp = 'FULL';    /**Reasigancion por tipo de datos declarados */

console.log({name,age,hp,isAlive});

export {};