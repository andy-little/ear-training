const ALPHABET = [
    'an', 'as', 'bn', 'cn', 'cs', 'dn', 'ds', 'en', 'fn', 'fs', 'gn', 'gs',
];
const OCTAVES = ['2', '3'];

export const notesDefaultState = {
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
            const rmNotes = state.notes.filter(note => note !== action.payload);
            
            return {...state, notes: rmNotes};

        case 'ADD_NOTE': 
            const isDuplicate = state.notes.find((item) => item === action.payload);

            if(isDuplicate){
                throw new Error(`Note: ${action.payload} already selected`);
            };

            const isNoteValid = ALPHABET.find((item) => item === action.payload);

            if(!isNoteValid){
                throw new Error(`${action.payload} is not a valid input to ADD_NOTE`);
            }

            const newNotes = [...state.notes, action.payload]

            return {...state, notes: newNotes};

        case 'SET_QUESTION': 
            /* MAYBE CHECK NOTE IS VALID */
            /* COULD WRITE REUSABLE FUNCTION FOR THIS */
            return {...state, question: action.payload};
            
        default:
            throw new Error('no matching action type');

        }
}