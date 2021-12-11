import { keys } from "../data/keys";

export const gameDefaultState = {
    keyOptions: [],
    isMajor: true,
    key_: 'Select',
    numQs: 0,
    score: 0
};

export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'KEY_OPTIONS': 
            return {...state, keyOptions: action.payload};

        case 'TOGGLE_TONALITY':
            let newKey;
            keys.forEach(({major, minor})=>{ 
                if(major === state.key_){
                    newKey = minor;
                }else if(minor === state.key_){
                    newKey = major;
                }
            });
            return {...state, isMajor: !state.isMajor, key_: newKey};
        
        case 'KEY_': 
            return {...state, key_: action.payload};
        
        case 'CORRECT_ANSWER': 
            return {...state, numQs: state.numQs += 1, score: state.score += 1};

        case 'INCORRECT_ANSWER': 
            return {...state, numQs: state.numQs += 1};

        default:
            throw new Error('no matching action type');

        }
}