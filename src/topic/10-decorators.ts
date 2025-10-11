function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {//decorador de clase, establesce nuevas propiedades o metodos a la clase, Ejemplo basico de decorador de clase ,indicar si es servicio,componente,pipe,directiva

    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';

    }
}

@classDecorator//aplicacion del decorador a la clasec
export class SuperClass {
    public myPropierty: string = 'Hello world';

    print() {
        console.log("Print from SuperClass");
    }

}

console.log(SuperClass);//muestra la definicion de la clase

const myInstance = new SuperClass();//instancia de la clase
console.log(myInstance);
myInstance.print();