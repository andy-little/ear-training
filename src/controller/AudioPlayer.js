import {Cadences} from '../data/Cadences'
import {NoteAudio} from '../data/NoteAudio'
export class AudioPlayer{

    playNote(note){
        const noteAudio = new NoteAudio();
        const player = new Audio(noteAudio[note]);
        player.play();
        console.log(`played note ${note}`);
    }

    playCadence(key){
        return new Promise((resolve, reject)=>{
            try {
                const cadences = new Cadences();
                const player = new Audio(cadences[key]);
                player.onended = (e)=>{
                    console.log(`played cadence ${key}`);
                    resolve(player);
                };
                player.play();
            } catch (error) {
                reject(error);
            }
        });
    }
}