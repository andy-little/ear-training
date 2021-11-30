import React from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'

const TonalityToggle = () => {
  const {isMajor, setIsMajor} = useEarTrainingContext();

    return (
        <div className="controller-tgl-btn">
          <input type="checkbox" className="checkbox" onClick={() =>{setIsMajor(!isMajor)}}/>
          <div className="knobs">
            <span>Major</span>
          </div>
          <div className="layer"></div>
        </div>
    )
}

export default TonalityToggle
