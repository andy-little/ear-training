const ALPHABET = [
    'an', 'as', 'bn', 'cn', 'cs', 'dn', 'ds', 'en', 'fn', 'fs', 'gn', 'gs',
];
const OCTAVES = ['2', '3'];

export const defaultState = {
    notes: ALPHABET,
    octaves: OCTAVES,
    question: ''
};

export const notesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': 
            return {...state, notes: ALPHABET};

        case 'REMOVE_ALL': 
            return {...state, notes: []};

        case 'REMOVE_NOTE': 
            /* payload: str must be lowercase note followed by s for sharp or n for natural  */
            const newNotes = state.notes.filter(note => note !== action.payload);
            return {...state, notes: newNotes};

        case 'ADD_NOTE': 
            const isDuplicate = state.notes.find((item) => item === action.payload);
            if(isDuplicate){
                throw new Error(`Note: ${action.payload} already selected`);
            };
            const isNoteValid = ALPHABET.find((item) => item === action.payload);
            if(!isNoteValid){
                throw new Error(`${action.payload} is not a valid input to ADD_NOTE`);
            }
            /* for(let octave of this.octaves){
                this.notes.push(`${addNote}${octave}`);
            } */
            const newNotes = [...state.notes, action.payload]
            return {...state, notes: newNotes};

        case 'RANDOM': 
            const note = state.notes[Math.floor(Math.random() * state.notes.length)];
            const octave = state.octaves[Math.floor(Math.random() * state.octaves.length)];
            return {...state, question: `${note}${octave}`};
        }

    throw new Error('no matching action type');
    
}