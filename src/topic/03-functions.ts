
//declaracion de funcion con tipos y returno tipado
function addNumbers(a:number, b:number):number{
    return a+b;
}

const sum=addNumbers(2,3);
const result=addNumbers(2,3);
// console.log(sum);
// console.log({result}); //imprime objeto con propiedad result

function multiplyNumbers(first:number,second?:number,base:number=2){
 return first*base;
}

//landa funcion en una variable

const addNumbers2=(a:number,b:number):number=>a+b;

const addNumbersArrow=(a:number,b:number):string=>{
    return  `La suma es: ${a+b}`;//template string
}

// console.log({addNumbers2});
const result2:number=addNumbers2(5,7);
// console.log({result2});
const result3:string=addNumbersArrow(10,20);
// console.log({result3});
const multiplyNumbersResult1:number=multiplyNumbers(5);
// console.log({multiplyNumbersResult1});

interface Character{    
    name:string;
    hp:number;
    showHp:()=>void;//metodo que no retorna nada
}

const healCharacter=(character:Character,amount:number)=>{
    character.hp+=amount;    
}

const strider:Character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);   
    }
}

strider.showHp();

healCharacter(strider,20);

const striderAny={
    name:'Strider',
    // name2:'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);   
    }
}

striderAny.showHp();

healCharacter(striderAny,25);//EL tipado no es estricto, miestras tenga las propiedades necesarias

striderAny.showHp();

export{}    