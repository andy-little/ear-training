import React, { useEffect } from 'react'
import { useEarTrainingContext } from '../../../EarTrainingContext';

const PianoKey = React.memo(React.forwardRef(({colour, displayName, enharmonic, dataName, fn}, ref) => {

    console.count(`rendered piano ${displayName}`);

    const {notesState} = useEarTrainingContext();

    useEffect(() => {
        // check if notes are selected and disable pianokeys if not 
        if (!notesState.notes.includes(ref.current.dataset.note)){    
            ref.current.classList.add('inactive');
        }else{
            ref.current.classList.remove('inactive');
        }
    }, [notesState, ref]);

    return (
        <li className={`${colour} ${dataName.toLowerCase()}`} ref={ref} data-note={dataName} onClick={fn}><span className={`text-${colour}`}>{displayName}<br/>{enharmonic && enharmonic}</span></li>
    )
}));

export default PianoKey
