import React from 'react'
import {MdOutlineHelp} from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext'
import Dropdown from './Dropdown'
import TonalityToggle from './TonalityToggle'
import HelpModal from './HelpModal';

const Controls = () => {
    const {keyOptions, key_, setKey_, setIsHelpOpen} = useEarTrainingContext();
   /*  console.log(key); */
    return (
        <div className="controls">
            <Dropdown label="Key" options={keyOptions} key_={key_} setValue={setKey_}/>
            <TonalityToggle/>
            
            <MdOutlineHelp className="footer-help" onMouseEnter={()=>{setIsHelpOpen(true)}} onMouseLeave={()=>{setIsHelpOpen(false)}}/>
            <HelpModal/>
        </div>
    )
}

export default Controls
