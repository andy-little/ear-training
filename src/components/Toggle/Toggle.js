import React from 'react'
import './Toggle.scss'

const Toggle = ({dispatch, typeStr}) => {

    return (
        <div className="tgl-btn">
          <input type="checkbox" aria-label="toggle-tonality" className="checkbox" onClick={()=>{dispatch({type: typeStr})}}/>
          <div className="tgl-btn-knobs">
            <span></span>
          </div>
          <div className="tgl-btn-layer"></div>
        </div>
    )
}

export default Toggle
