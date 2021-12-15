import React, {useRef} from 'react'
import {MdOutlineHelp} from 'react-icons/md'
import { useEarTrainingContext } from '../../EarTrainingContext'
import Dropdown from '../Dropdown'
import TonalityToggle from './TonalityToggle'
import {useClickedOutside} from '../../hooks/useClickedOutside'


const Controls = () => {
    const {keyOptions, key_, gameDispatch, setIsHelpOpen, isHelpOpen, helpModal} = useEarTrainingContext();
    const helpBtn = useRef(null);
    useClickedOutside(helpModal, helpBtn, ()=>{setIsHelpOpen(false)});

    return (
        <div className="controls">
            <Dropdown label="Key" options={keyOptions} key_={key_} dispatch={gameDispatch}/>
            <TonalityToggle/>
            <button ref={helpBtn} type="button" className="help-btn" onClick={()=>{setIsHelpOpen(!isHelpOpen)}}><MdOutlineHelp/></button>
            
        </div>
    )
}

export default Controls
