import React from 'react'
import Score from "./Score";
import {GiMusicalNotes} from 'react-icons/gi'
import {MdOutlineReplayCircleFilled} from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext';

const EarTrainerFooter = () => {
    const {replayQuestion} = useEarTrainingContext();
    return (
   <footer className="ear-trainer-footer">
        <MdOutlineReplayCircleFilled className="replay-btn" onClick={replayQuestion}/>
        <GiMusicalNotes className="note-selector-btn"/>
        <Score/>
    </footer>
    )
}

export default EarTrainerFooter
