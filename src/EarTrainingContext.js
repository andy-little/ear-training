import {useContext, useState, useEffect, createContext} from "react";

const majorKeys = ['C', 'G', 'D', 'F', 'Bb']
const minorKeys = ['Am', 'Em', 'Bm', 'Dm', 'Gm']

const EarTrainingContext = createContext()

export const EarTrainingContextProvider = ({children}) => {
    const [keyOptions, setKeyOptions] = useState(['C', 'D', 'G']);
    const [key_, setKey_] = useState('');
    const [isMajor, setIsMajor] = useState(true);
    const [numQs, setNumQs] = useState(0);
    const [score, setScore] = useState(0);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    useEffect(() => {
        if(isMajor === true){
            setKeyOptions(majorKeys);
        }else{
            setKeyOptions(minorKeys);
        }
        setKey_('');
    }, [isMajor])
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

