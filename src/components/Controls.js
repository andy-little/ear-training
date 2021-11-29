import React from 'react'
import {MdOutlineReplayCircleFilled} from 'react-icons/md'
import TonalityToggle from './TonalityToggle'

const Controls = () => {
    return (
        <div className="controls">
            <p>key</p>
            <TonalityToggle/>
            <MdOutlineReplayCircleFilled className="replay-btn"/>
        </div>
    )
}

export default Controls
