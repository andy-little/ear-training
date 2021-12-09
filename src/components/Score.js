import React, {useEffect, useState} from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'


const Score = () => {
    const {score, numQs} = useEarTrainingContext();
    const [percent, setPercent] = useState(0);
    const [isPercent, setIsPercent] = useState(false)
    useEffect(() => {
        setPercent(Math.floor((score/numQs) * 100));
        
    }, [numQs])
    return (
        <div className="score-container" onClick={()=>setIsPercent(!isPercent)}>
            <p className="score-text">
                Score: {isPercent ? `${percent}%`: `${score}/${numQs}`}
            </p>
        </div>
    )
}

export default Score
