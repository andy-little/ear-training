import React from 'react'

const Piano = () => {
    return (
        <div className="piano-container">
            <ul>
                <li className="white c"><span className="text">C</span></li>
                <li className="black cs"><span className="text-black">C#</span></li>
                <li className="white d"><span className="text">D</span></li>
                <li className="black ds"><span className="text-black">D#</span></li>
                <li className="white e"><span className="text">E</span></li>
                <li className="white f"><span className="text">F</span></li>
                <li className="black fs"><span className="text-black">F#</span></li>
                <li className="white g"><span className="text">G</span></li>
                <li className="black gs"><span className="text-black">G#</span></li>
                <li className="white a"><span className="text">A</span></li>
                <li className="black as"><span className="text-black">A#</span></li>
                <li className="white b"><span className="text">B</span></li>
            </ul>
        </div>
    )
}

export default Piano
