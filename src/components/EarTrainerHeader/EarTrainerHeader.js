import React, {useRef} from 'react';
import './EarTrainerHeader.scss';
import {MdOutlineHelp} from 'react-icons/md';
import { useEarTrainingContext } from '../../EarTrainingContext';
import Dropdown from '../Dropdown/Dropdown';
import TonalityToggle from './TonalityToggle/TonalityToggle';
import {useClickedOutside} from '../../hooks/useClickedOutside';


const EarTrainerHeader = () => {
    const {keyOptions, key_, gameDispatch, setIsHelpOpen, isHelpOpen, helpModal} = useEarTrainingContext();
    const helpBtn = useRef(null);
    useClickedOutside(helpModal, helpBtn, ()=>{setIsHelpOpen(false)});

    return (
        <div className="ear-trainer-header">
            <Dropdown label="Key" options={keyOptions} key_={key_} dispatch={gameDispatch} dispatchAction={'KEY_'}/>
            <TonalityToggle/>
            <button ref={helpBtn} type="button" className="help-btn" aria-label='help' onClick={()=>{setIsHelpOpen(!isHelpOpen)}}><MdOutlineHelp/></button>
            
        </div>
    )
}

export default EarTrainerHeader
