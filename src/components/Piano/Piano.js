import React, {useRef, useEffect, useMemo} from 'react'
import './Piano.scss'
import { useEarTrainingContext } from '../../EarTrainingContext'

const Piano = () => {

    const {gameDispatch, notesState, isPianoDisplayNotes} = useEarTrainingContext();
    const cn = useRef(null);
    const cs = useRef(null);
    const dn = useRef(null);
    const ds = useRef(null);
    const en = useRef(null);
    const fn = useRef(null);
    const fs = useRef(null);
    const gn = useRef(null);
    const gs = useRef(null);
    const an = useRef(null);
    const as = useRef(null);
    const bn = useRef(null);
    const piano = useRef(null);
    const keys = useMemo(()=>({'cn': cn, 'cs': cs, 'dn': dn, 'ds': ds, 'en': en, 'fn': fn, 'fs': fs, 'gn': gn, 'gs': gs, 'an': an, 'as': as, 'bn': bn}),[cn,cs,dn,ds,en,fn,fs,gn,gs,an,as,bn]);

    function setPianoKeyHeight(){
        const pianoRect = piano.current.getBoundingClientRect();
        const height = pianoRect.width / 2;
        piano.current.style.height = `${height}px`;
    }
    
    function answerColour(elm, status){
        /* elm: <li>, status: str - incorrect || correct */
        /* changes colour of keys to indicate if correct or incorrect */
        setTimeout(()=>{
            elm.classList.add(status);
            setTimeout(()=>{
                elm.classList.remove(status);
            },900);
        },75)
        }

    function onKeyPress(e){
        /* update score and display correct answer with colour */
        const answer = notesState.question.slice(0,2);
        if(e.target.dataset.note === answer){
            gameDispatch({type: 'CORRECT_ANSWER'});
            answerColour(e.target, 'correct')
        }else{
            gameDispatch({type: 'INCORRECT_ANSWER'});
            answerColour(e.target, 'incorrect');
            answerColour(keys[answer].current, 'correct');
        }
    }

    useEffect(() => {
        /* check if notes are selected and disable pianokeys if not */
        Object.values(keys).forEach(pianoKey => {
            if (!notesState.notes.includes(pianoKey.current.dataset.note)){    
                pianoKey.current.classList.add('inactive');
            }else{
                pianoKey.current.classList.remove('inactive');
            }
        });
    }, [notesState, keys])

    useEffect(() => {
        /* sets height of piano keys to keep to the right ratio against width */
        window.addEventListener("resize", setPianoKeyHeight);
        return () => {
        window.removeEventListener("resize", setPianoKeyHeight);
        }
    }, [])
    useEffect(()=>{setPianoKeyHeight()},[])
    
    return (
        <div className="piano-container">
            <ul ref={piano}>
                <li className="white c" ref={cn} data-note="cn" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'C'}</span></li>
                <li className="black cs" ref={cs} data-note="cs" onClick={onKeyPress}><span className="text-black">{isPianoDisplayNotes && 'Db'}<br/>{isPianoDisplayNotes && 'C#'}</span></li>
                <li className="white d" ref={dn} data-note="dn" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'D'}</span></li>
                <li className="black ds" ref={ds} data-note="ds" onClick={onKeyPress}><span className="text-black">{isPianoDisplayNotes && 'Eb'}<br/>{isPianoDisplayNotes && 'D#'}</span></li>
                <li className="white e" ref={en} data-note="en" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'E'}</span></li>
                <li className="white f" ref={fn} data-note="fn" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'F'}</span></li>
                <li className="black fs" ref={fs} data-note="fs" onClick={onKeyPress}><span className="text-black">{isPianoDisplayNotes && 'Gb'}<br/>{isPianoDisplayNotes && 'F#'}</span></li>
                <li className="white g" ref={gn} data-note="gn" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'G'}</span></li>
                <li className="black gs" ref={gs} data-note="gs" onClick={onKeyPress}><span className="text-black">{isPianoDisplayNotes && 'Ab'}<br/>{isPianoDisplayNotes && 'G#'}</span></li>
                <li className="white a" ref={an} data-note="an" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'A'}</span></li>
                <li className="black as" ref={as} data-note="as" onClick={onKeyPress}><span className="text-black">{isPianoDisplayNotes && 'Bb'}<br/>{isPianoDisplayNotes && 'A#'}</span></li>
                <li className="white b" ref={bn} data-note="bn" onClick={onKeyPress}><span className="text-white">{isPianoDisplayNotes && 'B'}</span></li>
            </ul>
        </div>
    )
}

export default Piano
