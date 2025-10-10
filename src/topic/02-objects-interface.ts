const skills:string[]=['Bash','Counter Strike','Futbol'];//Declaracion explicita de array de strings

interface Person{
    name:string;
    age:number;
    skills:string[];
    //optional
    gender?:string;//propiedad opcional
}


const strider={
    name:'Strider',
    age:30,
    skills:['Bash','futbol']
}
const warrior:Person={
    name:'Strider',
    age:30,
    skills:['Bash','futbol']
}

warrior.gender='Male';//asignacion de propiedad opcional

console.log(strider,warrior);
console.table(strider);
console.table(warrior);
export {}