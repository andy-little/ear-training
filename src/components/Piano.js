import React from 'react'

const Piano = () => {
    return (
        <div class="piano-container">
            <ul>
                <li class="white c"><span class="text">C</span></li>
                <li class="black cs"><span class="text-black">C#</span></li>
                <li class="white d"><span class="text">D</span></li>
                <li class="black ds"><span class="text-black">D#</span></li>
                <li class="white e"><span class="text">E</span></li>
                <li class="white f"><span class="text">F</span></li>
                <li class="black fs"><span class="text-black">F#</span></li>
                <li class="white g"><span class="text">G</span></li>
                <li class="black gs"><span class="text-black">G#</span></li>
                <li class="white a"><span class="text">A</span></li>
                <li class="black as"><span class="text-black">A#</span></li>
                <li class="white b"><span class="text">B</span></li>
            </ul>
        </div>
    )
}

export default Piano
