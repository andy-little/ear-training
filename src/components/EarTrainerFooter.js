import React, {useState, useRef, useEffect} from 'react'
import Score from "./Score";
import {GiMusicalNotes} from 'react-icons/gi'
import { MdReplay, MdSkipNext } from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext';
import SelectNotesModal from './selectNotes/SelectNotesModal';

const EarTrainerFooter = () => {
    const {replayQuestion, playQuestion, setNumQs} = useEarTrainingContext();
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [menuLocation, setMenuLocation] = useState({})
    const settingsBtn = useRef(null)
    
    const displayMenu = (e) => {
        /* const btn = e.target.getBoundingClientRect();
        const left = btn.left
        const top = btn.top;
        const width = btn.width;
        setMenuLocation({left, top, width}); */
        setIsSelectOpen(!isSelectOpen);
    };
    const skipQuestion = () => {
        playQuestion();
        setNumQs(prevstate => prevstate += 1);

    };
    useEffect(() => {
        const btn = settingsBtn.current.getBoundingClientRect();
        const left = btn.left
        const top = btn.top;
        const width = btn.width;
        setMenuLocation({left, top, width});
        
    }, [])

    return (
   <footer className="ear-trainer-footer">
        <button ref={settingsBtn} className="ear-trainer-footer-btn">
            <GiMusicalNotes onClick={displayMenu} />
        </button> 
        <button className="ear-trainer-footer-btn replay-btn">
            <MdReplay onClick={replayQuestion}/>
        </button>
        <button className="ear-trainer-footer-btn">
            <MdSkipNext onClick={skipQuestion}/> 
        </button>
        
        <SelectNotesModal location={menuLocation} isSelectOpen={isSelectOpen}/>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
