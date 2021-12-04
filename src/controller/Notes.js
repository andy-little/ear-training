export class Notes {
    alphabet = [
        'an2', 'as2', 'bn2', 'cn2', 'cs2', 'dn2', 'ds2', 'en2', 'fn2', 'fs2', 'gn2', 'gs2',
        'an3', 'as3', 'bn3', 'cn3', 'cs3', 'dn3', 'ds3', 'en3', 'fn3', 'fs3', 'gn3', 'gs3'
    ];
    octaves = ['2', '3'];
    constructor(){
            this.notes = this.alphabet;          
        }
        
    ///    
    random(){
        /* this might belong to another class */
        const num = Math.floor(Math.random() * this.notes.length);
        return this.notes[num];
    }
    ///

    setAll(){
        this.notes = this.alphabet;
    }
    removeAll(){
        this.notes = [];
    }
    removeNote(rmNote){
        /* note must be lowercase string note followed by s for sharp or n for natural  */
        this.notes = this.notes.filter(note=>note.slice(0,2) !== rmNote);
    }
    addNote(addNote){
        
        const isDuplicate = this.notes.find((item) => item.slice(0,2) === addNote);
        if(isDuplicate){
            throw new Error(`Note: ${addNote} already selected`);
        };

        const isNoteValid = this.alphabet.find((item) => item.slice(0,2) === addNote);
        if(!isNoteValid){
            throw new Error(`${addNote} is not a valid input to addNote method`);
        }

        for(let octave of this.octaves){
            this.notes.push(`${addNote}${octave}`);
        }
    }

}

const n = new Notes();
n.removeAll();
n.addNote('an');
n.addNote('bn');
console.log(n.notes);

