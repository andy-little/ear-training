import {useContext, useState, useEffect, createContext, useReducer} from "react";
import { keys } from "./data/keys";
import {AudioPlayer} from './controller/AudioPlayer';
import { notesReducer, notesDefaultState } from './reducers/notes';

const EarTrainingContext = createContext()
const player = new AudioPlayer();

export const EarTrainingContextProvider = ({children}) => {   
    
    const [notesState, notesDispatch] = useReducer(notesReducer, notesDefaultState);

    const [keyOptions, setKeyOptions] = useState([]);
    const [isMajor, setIsMajor] = useState(true);
    const [key_, setKey_] = useState('');
    
    const [numQs, setNumQs] = useState(0);
    const [score, setScore] = useState(0);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isStartOpen, setIsStartOpen] = useState(true);
    
    function randomNote(){
        const note = notesState.notes[Math.floor(Math.random() * notesState.notes.length)];
        const octave = notesState.octaves[Math.floor(Math.random() * notesState.octaves.length)];
        return `${note}${octave}`;
    }
    
    function playQuestion() {
        const question = randomNote();
        notesDispatch({type: 'SET_QUESTION', payload: question})
        player.playCadence(key_).then((_) => {
            player.playNote(question);
        }).catch(err => console.log(err));
    }
    function replayQuestion() {
        player.playCadence(key_).then((_) => {
            player.playNote(notesState.question);
        }).catch(err => console.log(err));
    }
    

    useEffect(() => {
        if(isMajor === true){
            const majorKeys = keys.map(item => item.major)
            setKeyOptions(majorKeys);
        }else{
            const minorKeys = keys.map(item => item.minor)
            setKeyOptions(minorKeys);
        }
            
            setKey_((oldState)=>{
                keys.forEach(({major, minor})=>{ 
                    if(major === oldState){
                        setKey_(minor);
                    }else if(minor === oldState){
                        setKey_(major);
                    }
                });
            });
    }, [isMajor])
    useEffect(() => {
        playQuestion();        
    }, [key_, numQs]);


    return (
        <EarTrainingContext.Provider value={{
            keyOptions, 
            setKeyOptions, 
            key_, 
            setKey_, 
            isMajor, 
            setIsMajor, 
            numQs, 
            setNumQs, 
            score, 
            setScore,
            isHelpOpen,
            setIsHelpOpen,
            isStartOpen, 
            setIsStartOpen,
            replayQuestion,
            notesState,
            notesDispatch
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

