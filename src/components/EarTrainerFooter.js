import React from 'react'
import Score from "./Score";
import {MdOutlineHelp} from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext';
import HelpModal from './HelpModal';

const EarTrainerFooter = () => {
    const {isHelpOpen, setIsHelpOpen} = useEarTrainingContext();
    return (
   <footer className="ear-trainer-footer">
        <div>
        
            <MdOutlineHelp className="footer-help" onMouseEnter={()=>{setIsHelpOpen(true)}} onMouseLeave={()=>{setIsHelpOpen(false)}}/>
            <HelpModal/>
        </div>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
