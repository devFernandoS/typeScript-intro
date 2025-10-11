export function whatsdMyType<T>(argumento: T): T {
    return argumento; //retorna lo que le pasen

}

const amIString = whatsdMyType<string>('Hola mundo');
console.log((amIString as string).length);
console.log(amIString.split(' '));
const amINumber = whatsdMyType(100);
console.log((amINumber as number).toFixed(2));
const amIArray = whatsdMyType([1, 2, 3, 4, 5]);
console.log((amIArray as number[]).length);
const amIObject = whatsdMyType({ name: 'willian', age: 44 });
console.log((amIObject as object));
