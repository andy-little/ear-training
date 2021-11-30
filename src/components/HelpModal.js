import React from 'react'
import { useEarTrainingContext } from '../EarTrainingContext'

const HelpModal = () => {
    const {isHelpOpen} = useEarTrainingContext();
    return (
        <article className={`help-modal ${isHelpOpen && 'show'}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt unde mollitia vel minima velit, dolorum nobis autem vitae recusandae ab labore alias maxime impedit officiis aliquam nesciunt. Quas, eligendi.</p>
        </article>
    )
}

export default HelpModal
