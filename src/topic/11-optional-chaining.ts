export interface Pasenger {
    name: string;
    children?: string[];//propiedad opcional
}

const pasenger1: Pasenger = {
    name: 'willian'
}

const pasenger2: Pasenger = {
    name: 'Fernando',
    children: ['Jose', 'Pepe']
}

const printChildren = (pasenger: Pasenger): void => {
    const howMAnyChildren = pasenger.children?.length || 0;//si children es undefined, no accede a length y asigna 0
    console.log(pasenger.name, howMAnyChildren);
}

//caso practico pasager 1 sin hijos
const printChildrenNumber = (pasenger: Pasenger): void => {

    const howMAnyChildren = pasenger.children!.length;//si children es undefined, lanza error en tiempo de ejecucion
    console.log(pasenger.name, howMAnyChildren);

}


printChildren(pasenger1);// impresion de pasenger1
// printChildrenNumber(pasenger1);//impresion de pasenger1 con error en tiempo de ejecucion