import React from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'


const Score = () => {
    const {score, numQs} = useEarTrainingContext();
    return (
        <div className="score-container">
            <p className="score-text">
                Score: {score}/{numQs}
            </p>
        </div>
    )
}

export default Score
