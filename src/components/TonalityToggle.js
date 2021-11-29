import React from 'react'

const TonalityToggle = () => {
    return (

        <div className="controller-tgl-btn">
          <input type="checkbox" className="checkbox"/>
          <div className="knobs">
            <span>Major</span>
          </div>
          <div class="layer"></div>
        </div>
    )
}

export default TonalityToggle
