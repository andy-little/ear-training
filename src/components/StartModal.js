import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { useEarTrainingContext } from '../EarTrainingContext';


const StartModal = () => {
    const {setIsStartOpen, setKey_} = useEarTrainingContext();
    function handleClick(){
        setIsStartOpen(false);
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
