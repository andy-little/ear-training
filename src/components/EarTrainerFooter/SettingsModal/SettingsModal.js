import React,{useRef, useEffect} from 'react';
import './SettingsModal.scss';
import { useEarTrainingContext } from '../../../EarTrainingContext';
import SingleNote from './SingleNote/SingleNote';
import {useClickedOutside} from "../../../hooks/useClickedOutside";
import Toggle from '../../Toggle/Toggle';



const SettingsModal = ({openBtn, location: {left, top, width}}) => {

    const noteNames = [{'name': 'A', 'data': 'an'},{'name': 'A#', 'data': 'as'},{'name': 'B', 'data': 'bn'}, {'name': 'C', 'data': 'cn'},  {'name': 'C#', 'data': 'cs'},  {'name': 'D', 'data': 'dn'},  {'name': 'D#', 'data': 'ds'},  {'name': 'E', 'data': 'en'},  {'name': 'F', 'data': 'fn'},  {'name': 'F#', 'data': 'fs'},  {'name': 'G', 'data': 'gn'},  {'name': 'G#', 'data': 'gs'}]
    const {notesDispatch, isSelectOpen, setIsSelectOpen, gameDispatch} = useEarTrainingContext();
    const modal = useRef(null);
    useClickedOutside(modal, openBtn, ()=>{setIsSelectOpen(false)});

    useEffect(() => {
        const modalRect = modal.current.getBoundingClientRect();
        const x = `${left + width}px`;
        const y = `${top - modalRect.height}px`;
        modal.current.style.left = x;
        modal.current.style.top = y;
        
    }, [left, top, width]);
    
    return (
        <aside data-testid="settings-modal" ref={modal} className={`select-notes-modal ${isSelectOpen && 'show'}`}>
            <div className="settings-display-names">
                <h3 className='settings-label'>Display Names:</h3><Toggle dispatch={gameDispatch} typeStr='TOGGLE_PIANO_DISPLAY_NOTES'/>
            </div>
            <h3 className='settings-label'>Select Notes:</h3>
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

export default SettingsModal
