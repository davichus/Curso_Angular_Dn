interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 75,
    songDuration: 240,
    song: 'Bohemian Rhapsody',
    details: { author: 'Queen', year: 1975 }
};
const {song: anothersong, songDuration: duration, details} = audioPlayer;
console.log(anothersong, duration);
const{author} = details;

console.log(author);

const dbz: string[] = ['goku', 'vegeta', 'gohan'];
console.log(dbz[2]);

const [p1, p2, p3] = dbz;

const [,,p4] = dbz;
export {};