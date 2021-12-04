import {useContext, useState, useEffect, createContext} from "react";
import { keys } from "./data/keys";
import {AudioPlayer} from './controller/AudioPlayer';

const EarTrainingContext = createContext()

export const EarTrainingContextProvider = ({children}) => {
    const [keyOptions, setKeyOptions] = useState([]);
    const [isMajor, setIsMajor] = useState(true);
    const [key_, setKey_] = useState('');
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
        console.count('play')
        const player = new AudioPlayer();
        player.playCadence(key_);
        
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
            setIsHelpOpen
        }}>
            {children}
        </EarTrainingContext.Provider>
    )
}

export const useEarTrainingContext = () => {
    return useContext(EarTrainingContext);
}

