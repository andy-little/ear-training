import {Notes} from './controller/Notes'
import {useContext, useState, useEffect, createContext} from "react";
import { keys } from "./data/keys";
import {AudioPlayer} from './controller/AudioPlayer';

const EarTrainingContext = createContext()
const notes = new Notes();
const player = new AudioPlayer();

export const EarTrainingContextProvider = ({children}) => {        
    const [isMounted, setIsMounted] = useState(false)

    const [keyOptions, setKeyOptions] = useState([]);
    const [isMajor, setIsMajor] = useState(true);
    const [key_, setKey_] = useState('C');

    const [noteOptions, setNoteOptions] = useState(notes);
    const [question, setQuestion] = useState(notes.random());

    const [numQs, setNumQs] = useState(0);
    const [score, setScore] = useState(0);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    function playQuestion() {
        const randomNote = notes.random();
        setQuestion(randomNote);
        player.playCadence(key_).then((_) => {
            /* console.log(`state: ${question}`);
            console.log(`var: ${randomNote}`); */
            player.playNote(randomNote);
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
        if(isMounted){
            
            setKey_((oldState)=>{
                keys.forEach(({major, minor})=>{ 
                    if(major === oldState){
                        setKey_(minor);
                    }else if(minor === oldState){
                        setKey_(major);
                    }
                });
            });
        };
    }, [isMajor])
    useEffect(() => {
        if(isMounted){
            playQuestion();        
        }
    }, [key_, numQs]);

   /*  useEffect(() => {      
        playQuestion();      
    }, [numQs]); */

    useEffect(() => {
        setIsMounted(true);
    }, []);


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
            noteOptions,
            setNoteOptions,
            question,
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

