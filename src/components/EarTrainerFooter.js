import React, {useState, useRef, useEffect} from 'react'
import Score from "./Score";
import {GiMusicalNotes} from 'react-icons/gi'
import { MdReplay, MdSkipNext } from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext';
import SelectNotesModal from './selectNotes/SelectNotesModal';

const EarTrainerFooter = () => {
    const {replayQuestion, playQuestion, isSelectOpen, setIsSelectOpen, gameDispatch} = useEarTrainingContext();
    
    const [menuLocation, setMenuLocation] = useState({});
    const settingsBtn = useRef(null);

    const [size, setSize] = useState(null);
     const handler = () => {
         setSize(window.innerHeight);
     }

    const getBtnCordinates = () => {
        const btn = settingsBtn.current.getBoundingClientRect();
        const left = btn.left;
        const top = btn.top;
        const width = btn.width;
        setMenuLocation({left, top, width});
    }
    useEffect(() => {
        window.addEventListener("resize", handler);
        return () => {
        window.removeEventListener("resize", handler);
        }
    }, []);

    useEffect(()=>{
        getBtnCordinates();
    },[size]);
    
   
    const skipQuestion = () => {
        gameDispatch({type: 'INCORRECT_ANSWER'});
        playQuestion();

    };

    return (
   <footer className="ear-trainer-footer">
        <button ref={settingsBtn} className="ear-trainer-footer-btn settings-btn">
            <GiMusicalNotes onClick={()=>setIsSelectOpen(!isSelectOpen)} />
        </button> 
        <button className="ear-trainer-footer-btn replay-btn">
            <MdReplay onClick={replayQuestion}/>
        </button>
        <button className="ear-trainer-footer-btn">
            <MdSkipNext onClick={skipQuestion}/> 
        </button>
        
        <SelectNotesModal openBtn={settingsBtn} location={menuLocation}/>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
