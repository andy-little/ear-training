import React from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'

const Piano = () => {

    const{setScore, setNumQs, question} = useEarTrainingContext();

    const onKeyPress = (e) =>{
        /* console.log(question);
        console.log(e.target.dataset.note); */
        if(e.target.dataset.note === question.slice(0,2)){
            setScore(prevState => prevState += 1);
            setNumQs(prevState => prevState += 1);
        }else{
            setNumQs(prevState => prevState += 1);
        }
    }

    return (
        <div className="piano-container">
            <ul>
                <li className="white c" data-note="cn" onClick={onKeyPress}><span className="text">C</span></li>
                <li className="black cs" data-note="cs" onClick={onKeyPress}><span className="text-black">Db<br/>C#</span></li>
                <li className="white d" data-note="dn" onClick={onKeyPress}><span className="text">D</span></li>
                <li className="black ds" data-note="ds" onClick={onKeyPress}><span className="text-black">Eb<br/>D#</span></li>
                <li className="white e" data-note="en" onClick={onKeyPress}><span className="text">E</span></li>
                <li className="white f" data-note="fn" onClick={onKeyPress}><span className="text">F</span></li>
                <li className="black fs" data-note="fs" onClick={onKeyPress}><span className="text-black">Gb<br/>F#</span></li>
                <li className="white g" data-note="gn" onClick={onKeyPress}><span className="text">G</span></li>
                <li className="black gs" data-note="gs" onClick={onKeyPress}><span className="text-black">Ab<br/>G#</span></li>
                <li className="white a" data-note="an" onClick={onKeyPress}><span className="text">A</span></li>
                <li className="black as" data-note="as" onClick={onKeyPress}><span className="text-black">Bb<br/>A#</span></li>
                <li className="white b" data-note="bn" onClick={onKeyPress}><span className="text">B</span></li>
            </ul>
        </div>
    )
}

export default Piano
