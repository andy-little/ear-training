import React from 'react'
import SingleNote from './SingleNote'

const SelectNotesModal = () => {
    const noteNames = [{'name': 'A', 'data': 'an'},{'name': 'A#', 'data': 'as'},{'name': 'B', 'data': 'bn'}, {'name': 'C', 'data': 'cn'},  {'name': 'C#', 'data': 'cs'},  {'name': 'D', 'data': 'dn'},  {'name': 'D#', 'data': 'ds'},  {'name': 'E', 'data': 'en'},  {'name': 'F', 'data': 'fn'},  {'name': 'F#', 'data': 'fs'},  {'name': 'G', 'data': 'gn'},  {'name': 'G#', 'data': 'gs'}]
    return (
        <aside className="select-notes-modal">
            <button className="selct-notes-add-all">Add All</button>
            <button className="selct-notes-remove-all">Clear All</button>
            <div className="select-notes-checkboxes">
                {noteNames.map(({name, data})=>{
                    return <SingleNote key={data} name={name} data={data}/>
                })}
            </div>
        </aside>
    )
}

export default SelectNotesModal
