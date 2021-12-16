import React from 'react';
import './HelpModal.scss';
import { MdReplay, MdSkipNext } from 'react-icons/md';
import {GiMusicalNotes} from 'react-icons/gi';
import { useEarTrainingContext } from '../../EarTrainingContext';


const HelpModal = () => {
    const {isHelpOpen, helpModal} = useEarTrainingContext();
    return (
        <article data-testid="help-modal" ref={helpModal} className={`help-modal ${isHelpOpen && 'show'}`}>
            <h3 className='help-modal-header'>Getting Started</h3>

            <p>Firstly, select a key. If you are new try starting with C Major.</p>

            <p>
                Next click <GiMusicalNotes/> to choose which intervals you’d like to be tested on, <i>at least one note must be selected</i>. Try recognising the notes of the major triad before progressing to diatonic notes.
            </p>

            <p>Use <MdReplay/> to hear the question again or <MdSkipNext/> to skip a question and forfeit the point. </p>

            <p>Click your score to toggle between percentage vs tally.</p>

        </article>
    )
}

export default HelpModal
