import React, {useState} from 'react'
import Score from "./Score";
import {GiMusicalNotes} from 'react-icons/gi'
import { MdReplay, MdSkipNext } from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext';
import SelectNotesModal from './selectNotes/SelectNotesModal';

const EarTrainerFooter = () => {
    const {replayQuestion} = useEarTrainingContext();
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [menuLocation, setMenuLocation] = useState({})
    
    const displayMenu = (e) => {
        const btn = e.target.getBoundingClientRect();
        const left = btn.left
        const top = btn.top;
        const width = btn.width;
        setMenuLocation({left, top, width});
        setIsSelectOpen(!isSelectOpen);
  }

    return (
   <footer className="ear-trainer-footer">
        <button className="ear-trainer-footer-btn replay-btn">
            <MdReplay  onClick={replayQuestion}/>
        </button>
        <button className="ear-trainer-footer-btn">
            <MdSkipNext/> 
        </button>
        <button className="ear-trainer-footer-btn">
            <GiMusicalNotes onClick={displayMenu} />
        </button> 
        
        <SelectNotesModal location={menuLocation} isSelectOpen={isSelectOpen}/>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
