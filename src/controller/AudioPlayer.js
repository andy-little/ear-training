import {Cadences} from '../data/Cadences'
export class AudioPlayer{

    constructor(){
        
    }
    static playNote(note){
       
    }
    playCadence(key){
        const cadences = new Cadences();
        const cadence = new Audio(cadences[key]);
        try {
            cadence.play();
            
        } catch (error) {
            console.error(error)
        }
    }
}