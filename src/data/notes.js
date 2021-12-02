class Notes {
    alphabet = [
        'an-2', 'as-2', 'bn-2', 'cn-2', 'cs-2', 'dn-2', 'ds-2', 'en-2', 'fn-2', 'fs-2', 'gn-2', 'gs-2',
        'an-3', 'as-3', 'bn-3', 'cn-3', 'cs-3', 'dn-3', 'ds-3', 'en-3', 'fn-3', 'fs-3', 'gn-3', 'gs-3'
    ];
    octaves = ['2', '3'];
    constructor(){
            this.notes = this.alphabet;          
        }
        
    random(){
        /* this might belong to another class */
        const num = Math.floor(Math.random() * this.notes.length);
        return this.notes[num];
    }
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
            this.notes.push(`${addNote}-${octave}`);
        }
    }

}

const n = new Notes();
n.removeAll();
n.addNote('an');
n.addNote('bn');
console.log(n.notes);

