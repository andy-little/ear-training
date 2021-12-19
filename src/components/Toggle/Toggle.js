import React from 'react'
import './Toggle.scss'
import { useEarTrainingContext } from '../../EarTrainingContext'

const Toggle = () => {
  const {gameDispatch} = useEarTrainingContext();
  
    return (
        <div className="tgl-btn">
          <input type="checkbox" aria-label="toggle-tonality" className="checkbox" onClick={()=>{gameDispatch({type: 'TOGGLE_TONALITY'})}}/>
          <div className="tgl-btn-knobs">
            <span></span>
            {/* minor option is a css psuedo element */}
          </div>
          <div className="tgl-btn-layer"></div>
        </div>
    )
}

export default Toggle
