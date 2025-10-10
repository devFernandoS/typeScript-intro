
// export class Person{
//     //propiedades
//     public name:string;
//     private address:string

//     // constructor(){
//     //     this.name='Willian';
//     //     this.address='Ottawa, Canada';
//     // }

//     constructor(name:string,address:string){
//         this.name=name;
//         this.address=address;
//     }
// }

export class Person {
    //propiedades y asignacion en el constructor
    constructor(
        public name: string,
        private address: string = 'No address') { }
}

const ironman = new Person('Tony Stark', 'Malibu, California');

console.log("~ ironman:", ironman)
console.log("~ ironman.name:", ironman.name)
// console.log("~ ironman.address:", ironman.address) //error porque address es private. visible en console pero no accesible


// export class Hero extends Person{

//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName,'New York'); //llamada al constructor de la clase base
//         console.log('Constructor de Hero llamado');     
//     }
// }

// export class Hero {
//     public person:Person; //composicion: Hero tiene una Person
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     ){
//         this.person=new Person(realName,'New York'); //composicion: Hero tiene una Person
//         console.log('Constructor de Hero llamado');     
//     }
// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public persona: Person
    ) {
        console.log('Constructor de Hero llamado');
    }
}


const peter = new Person('Peter Parker', 'Malibu, California');

const spiderman = new Hero('SpiderMan', 35, 'Peter Parker', peter);
console.log("~ spiderman:", spiderman)
// console.log("~ spiderman.address:", spiderman.address) //error porque address es private. visible en console pero no accesible

