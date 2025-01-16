interface AudioPlayer{
   audioVolume: number;
   songDuration: number;
   song: string;
   details: Details;
}

interface Details {
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//Desestructuracion:
const song = 'New Song';
const { song: anotherSong, details} = audioPlayer;// en este caso anotherSong tuvimos que especificar cual es el dato interno que quiero desestructurar: song.
const { author } = details; //matchea el nombre del objeto con alguna de las propiedades internas, para aislar ese dato y traer ese valor.

// console.log("Song: ", anotherSong);
//console.log("Author: ", audioPlayer.details.author); //aqui empieza a volverse incoomodo alcanzar la variable que necesito.
// console.log("Author", author);


//Desestructuracion de arreglos:

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje'; // en lugar de hacer esto podemos desestructurarlo de la siguiente manera:

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']; // ignora las primeras dos posiciones.


console.log( 'Personaje 3: ', trunks);



export{};