import React from 'react'
import './TonalityToggle.scss'
import { useEarTrainingContext } from '../../../EarTrainingContext'

const TonalityToggle = () => {
  const {gameDispatch} = useEarTrainingContext();
  
    return (
        <div className="controller-tgl-btn">
          <input type="checkbox" aria-label="toggle-tonality" className="checkbox" onClick={()=>{gameDispatch({type: 'TOGGLE_TONALITY'})}}/>
          <div className="knobs">
            <span>Major</span>
            {/* minor option is a css psuedo element */}
          </div>
          <div className="layer"></div>
        </div>
    )
}

export default TonalityToggle
