import {useContext, useState, useEffect, createContext, useReducer, useLayoutEffect, useRef} from "react";
import {AudioPlayer} from './controller/AudioPlayer';
import { notesReducer, notesDefaultState } from './reducers/notes';
import { gameReducer, gameDefaultState } from './reducers/game';
import useCustomVH from "./hooks/useCustomVH";
import randomNote from "./helpers/randomNote";

const EarTrainingContext = createContext()
const player = new AudioPlayer();

export const EarTrainingContextProvider = ({children}) => {   
    
    const [notesState, notesDispatch] = useReducer(notesReducer, notesDefaultState);
    const [gameState, gameDispatch] = useReducer(gameReducer, gameDefaultState);

    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isStartOpen, setIsStartOpen] = useState(true);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isDropdownError, setIsDropdownError] = useState(false);

    const helpModal = useRef(null);
    
    function playQuestion(){
        player.cancelQue();
        const question = randomNote(notesState);
        notesDispatch({type: 'SET_QUESTION', payload: question});
        player.playCadence(gameState.key_).then((_) => {
            player.playNote(question);
        }).catch(err => console.log(err));
    };

    function replayQuestion() {
        player.cancelQue();
        player.playCadence(gameState.key_).then((_) => {
            player.playNote(notesState.question);
        }).catch(err => console.log(err));
    };

    useEffect(() => gameDispatch({type: 'KEY_OPTIONS'}), [gameState.isMajor]);

    useLayoutEffect(() => {
        if(!isStartOpen){
            playQuestion();        
        }
    }, [gameState.key_, gameState.numQs]);

    useCustomVH();

    return (
        <EarTrainingContext.Provider value={{
            ...gameState,
            gameDispatch,
            isHelpOpen,
            setIsHelpOpen,
            isStartOpen, 
            setIsStartOpen,
            replayQuestion,
            notesState,
            notesDispatch,
            playQuestion,
            isDropdownError, 
            setIsDropdownError,
            isSelectOpen, 
            setIsSelectOpen,
            helpModal
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

