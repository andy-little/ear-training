import React from 'react'
import Score from "./Score";
import {GiMusicalNotes} from 'react-icons/gi'
import {MdOutlineReplayCircleFilled} from 'react-icons/md'

const EarTrainerFooter = () => {
    return (
   <footer className="ear-trainer-footer">
    
        <MdOutlineReplayCircleFilled className="replay-btn"/>
            

        <GiMusicalNotes className="note-selector-btn"/>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
