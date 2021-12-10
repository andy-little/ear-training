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
    const [key_, setKey_] = useState('Select');
    
    const [numQs, setNumQs] = useState(0);
    const [score, setScore] = useState(0);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isStartOpen, setIsStartOpen] = useState(true);

    const [isDropdownError, setIsDropdownError] = useState(false);
    
    function randomNote(){
        const note = notesState.notes[Math.floor(Math.random() * notesState.notes.length)];
        const octave = notesState.octaves[Math.floor(Math.random() * notesState.octaves.length)];
        return `${note}${octave}`;
    }
    
    function playQuestion() {
        player.cancelQue();
        const question = randomNote();
        notesDispatch({type: 'SET_QUESTION', payload: question});
        player.playCadence(key_).then((_) => {
            player.playNote(question);
        }).catch(err => console.log(err));
    };
    function replayQuestion() {
        player.cancelQue();
        player.playCadence(key_).then((_) => {
            player.playNote(notesState.question);
        }).catch(err => console.log(err));
    };
    
    function resizeHandler(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

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
        if(!isStartOpen){
            playQuestion();        
        }
    }, [key_, numQs]);

    useEffect(() => {
        
        window.addEventListener("resize", resizeHandler);
        return () => {
        window.removeEventListener("resize", resizeHandler);
        }
    }, []);
    useEffect(()=>{
        resizeHandler();
    },[])

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
            notesDispatch,
            playQuestion,
            isDropdownError, 
            setIsDropdownError
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

