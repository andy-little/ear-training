import React, {useRef} from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'

const Piano = () => {

    const {setScore, setNumQs, notesState} = useEarTrainingContext();
    const cn = useRef(null)
    const cs = useRef(null)
    const dn = useRef(null)
    const ds = useRef(null)
    const en = useRef(null)
    const fn = useRef(null)
    const fs = useRef(null)
    const gn = useRef(null)
    const gs = useRef(null)
    const an = useRef(null)
    const as = useRef(null)
    const bn = useRef(null)
    const keys = {'cn': cn, 'cs': cs, 'dn': dn, 'ds': ds, 'en': en, 'fn': fn, 'fs': fs, 'gn': gn, 'gs': gs, 'an': an, 'as': as, 'bn': bn}

    
    function answerColour(elm, status){
        /* changes colour of keys to indicate if correct or incorrect */
        /* should recieve an element and a string of incorrect or correct */
        setTimeout(()=>{

            elm.classList.add(status);
            setTimeout(()=>{
                elm.classList.remove(status);
            },900);
        },75)
        }

    function onKeyPress(e){
        const answer = notesState.question.slice(0,2);
        if(e.target.dataset.note === answer){
            setScore(prevState => prevState += 1);
            setNumQs(prevState => prevState += 1);
            answerColour(e.target, 'correct')
        }else{
            setNumQs(prevState => prevState += 1);
            answerColour(e.target, 'incorrect');
            answerColour(keys[answer].current, 'correct');
        }
    }
    
    return (
        <div className="piano-container">
            <ul>
                <li className="white c" ref={cn} data-note="cn" onClick={onKeyPress}><span className="text">C</span></li>
                <li className="black cs" ref={cs} data-note="cs" onClick={onKeyPress}><span className="text-black">Db<br/>C#</span></li>
                <li className="white d" ref={dn} data-note="dn" onClick={onKeyPress}><span className="text">D</span></li>
                <li className="black ds" ref={ds} data-note="ds" onClick={onKeyPress}><span className="text-black">Eb<br/>D#</span></li>
                <li className="white e" ref={en} data-note="en" onClick={onKeyPress}><span className="text">E</span></li>
                <li className="white f" ref={fn} data-note="fn" onClick={onKeyPress}><span className="text">F</span></li>
                <li className="black fs" ref={fs} data-note="fs" onClick={onKeyPress}><span className="text-black">Gb<br/>F#</span></li>
                <li className="white g" ref={gn} data-note="gn" onClick={onKeyPress}><span className="text">G</span></li>
                <li className="black gs" ref={gs} data-note="gs" onClick={onKeyPress}><span className="text-black">Ab<br/>G#</span></li>
                <li className="white a" ref={an} data-note="an" onClick={onKeyPress}><span className="text">A</span></li>
                <li className="black as" ref={as} data-note="as" onClick={onKeyPress}><span className="text-black">Bb<br/>A#</span></li>
                <li className="white b" ref={bn} data-note="bn" onClick={onKeyPress}><span className="text">B</span></li>
            </ul>
        </div>
    )
}

export default Piano
