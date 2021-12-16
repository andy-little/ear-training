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
        <section className="start-modal">
           <div className="start-modal-bg" onClick={handleClick}>
               <AiFillPlayCircle className="start-modal-play-btn"/>
           </div>
        </section>
    )
}

export default StartModal
