import React,{useRef, useEffect, useState} from 'react'
import { useEarTrainingContext } from '../../EarTrainingContext'
import SingleNote from './SingleNote'


const SelectNotesModal = ({isSelectOpen, location: {left, top, width}}) => {

    const noteNames = [{'name': 'A', 'data': 'an'},{'name': 'A#', 'data': 'as'},{'name': 'B', 'data': 'bn'}, {'name': 'C', 'data': 'cn'},  {'name': 'C#', 'data': 'cs'},  {'name': 'D', 'data': 'dn'},  {'name': 'D#', 'data': 'ds'},  {'name': 'E', 'data': 'en'},  {'name': 'F', 'data': 'fn'},  {'name': 'F#', 'data': 'fs'},  {'name': 'G', 'data': 'gn'},  {'name': 'G#', 'data': 'gs'}]
    const {notesDispatch} = useEarTrainingContext();
    const modal = useRef(null);
    
  

    useEffect(() => {
        const modalRect = modal.current.getBoundingClientRect();
        const x = `${left + width}px`;
        const y = `${top - modalRect.height}px`;
        modal.current.style.left = x;
        modal.current.style.top = y;
        
    }, [left, top, width])

   
    
    return (
        <aside ref={modal} className={`select-notes-modal ${isSelectOpen && 'show'}`}>
            <div className="select-notes-checkboxes">
                {noteNames.map(({name, data})=>{
                    return <SingleNote key={data} name={name} data={data}/>
                })}
            </div>
            <div className="select-notes-btn-container">
                <button className="select-notes-btn" onClick={()=>{notesDispatch({type: 'SET_ALL'})}}>All</button>
                <button className="select-notes-btn" onClick={()=>{notesDispatch({type:'REMOVE_ALL'})}}>Clear</button>
            </div>
        </aside>
    )
}

export default SelectNotesModal