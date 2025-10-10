interface  Details{
    author:string;
    year:number;
}

interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

const audioPlayer:AudioPlayer={
    audioVolume:90,
    songDuration:36,
    song:'Mess',
    details:{ 
        author:'Ed Sheeran',
        year:2015}
};


const {}=audioPlayer; //desestructuracion simple
console.log('Song:', audioPlayer.song);
console.log('Duration:', audioPlayer.songDuration);
console.log('Author:', audioPlayer.details.author);
const song='Song';
console.log("Song:", song)
//renombrar variables en la desestructuracion
const {song:anotherSong,songDuration:duration,details} =audioPlayer;
// console.log('Another song:', anotherSong);
// console.log('Duration:', duration);
// console.log('Author:', audioPlayer.details.author);
//desestructuracion anidada
let {details:{author:detailAuthor}}=audioPlayer;

console.log('Detail author:', detailAuthor);

const {author}=details
// console.log("author:", author)

const dbz:string[]=['Goku','Vegeta','Trunks']; 

console.log('dbz:', dbz);
console.error('Personaje posicion 3',dbz[3]||'No hay personaje'); //acceso tradicional a un elemento del array

const trunks=dbz[3] ||'No hay personaje'; //acceso tradicional a un elemento del array
console.log('Trunks:', trunks);

//desestructuracion de arrays
const [p1,p2,trunks2='No hay personaje']=dbz;
console.log('Personaje 3:', trunks2);

const [,,p3='no encontrado']:string[]=['Goku','Vegeta']; //si no existe el tercer elemento, se asigna el valor por defecto
console.log('Personaje 3:', p3);
export {}; //para que el archivo sea un modulo y no de error por variables repetidas en otros archivos