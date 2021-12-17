import React from 'react';
import './StartModal.scss';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useEarTrainingContext } from '../../EarTrainingContext';


const StartModal = () => {
    const {setIsStartOpen, key_, setIsDropdownError} = useEarTrainingContext();
    function handleClick(){
        if(key_ && key_ !== 'Select'){
            setIsStartOpen(false);
            
        }else{
            /* show please select key error */
            setIsDropdownError(true);
            setTimeout(()=>{
                setIsDropdownError(false);
            },2500)
        }
    }
    return (
        <section className="start-modal" data-testid="start-modal">
           <button className="start-modal-bg" onClick={handleClick} aria-label="start">
               <AiFillPlayCircle className="start-modal-play-btn"/>
           </button>
        </section>
    )
}

export default StartModal
