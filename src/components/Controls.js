import React from 'react'
import {MdOutlineReplayCircleFilled} from 'react-icons/md'
import { useEarTrainingContext } from '../EarTrainingContext'
import Dropdown from './Dropdown'
import TonalityToggle from './TonalityToggle'


const Controls = () => {
    const {keyOptions, key_, setKey_} = useEarTrainingContext();
   /*  console.log(key); */
    return (
        <div className="controls">
            <Dropdown label="Key" options={keyOptions} key_={key_} setValue={setKey_}/>
            <TonalityToggle/>
            <MdOutlineReplayCircleFilled className="replay-btn"/>
        </div>
    )
}

export default Controls
