import React from 'react'
import { useEarTrainingContext } from '../../EarTrainingContext'
import SingleNote from './SingleNote'


const SelectNotesModal = () => {
    const noteNames = [{'name': 'A', 'data': 'an'},{'name': 'A#', 'data': 'as'},{'name': 'B', 'data': 'bn'}, {'name': 'C', 'data': 'cn'},  {'name': 'C#', 'data': 'cs'},  {'name': 'D', 'data': 'dn'},  {'name': 'D#', 'data': 'ds'},  {'name': 'E', 'data': 'en'},  {'name': 'F', 'data': 'fn'},  {'name': 'F#', 'data': 'fs'},  {'name': 'G', 'data': 'gn'},  {'name': 'G#', 'data': 'gs'}]
    const {noteOptions} = useEarTrainingContext();
    return (
        <aside className="select-notes-modal">
            <div className="select-notes-checkboxes">
                {noteNames.map(({name, data})=>{
                    return <SingleNote key={data} name={name} data={data}/>
                })}
            </div>
            <div className="select-notes-btn-container">
                <button className="select-notes-btn" onClick={()=>{noteOptions.setAll()}}>Add All</button>
                <button className="select-notes-btn" onClick={()=>{noteOptions.removeAll()}}>Clear</button>
            </div>
        </aside>
    )
}

export default SelectNotesModal
