import {Notes} from './controller/Notes'
import {useContext, useState, useEffect, createContext} from "react";
import { keys } from "./data/keys";
import {AudioPlayer} from './controller/AudioPlayer';

const EarTrainingContext = createContext()
const notes = new Notes();
const player = new AudioPlayer();

export const EarTrainingContextProvider = ({children}) => {


    const [keyOptions, setKeyOptions] = useState([]);
    const [isMajor, setIsMajor] = useState(true);
    const [key_, setKey_] = useState('');

    const [noteOptions, setNoteOptions] = useState(notes);
    const [question, setQuestion] = useState('');

    const [numQs, setNumQs] = useState(0);
    const [score, setScore] = useState(0);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

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
            })

            if(!key_){
                /* poor code to get around useEffect 
                running on initial render 
                seems to work though.
                */

                setKey_('C')
            }
        });
    }, [isMajor])
    useEffect(() => {
        const randomNote = notes.random();
        setQuestion(randomNote);
        console.count('play');
        player.playCadence(key_).then(_ => player.playNote(question));

        /*
        Problem, the components state is always one ahead of the note that is played
        */
        
        
    }, [key_])
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
            question
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

