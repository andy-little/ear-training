import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { useEarTrainingContext } from '../EarTrainingContext';


const StartModal = () => {
    const {setIsStartOpen, key_, playQuestion, setIsDropdownError} = useEarTrainingContext();
    function handleClick(){
        if(key_ !== 'Select'){
            setIsStartOpen(false);
            playQuestion();
        }else{
            /* show please slect key error */
            setIsDropdownError(true);
            setTimeout(()=>{
                setIsDropdownError(false);
            },2500)
        }
        //setKey_('C')
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
