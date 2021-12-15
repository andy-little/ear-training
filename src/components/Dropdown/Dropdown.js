import React from 'react';
import { useEarTrainingContext } from '../../EarTrainingContext';



const Dropdown = ({label, options, key_, dispatch, dispatchAction}) => {
    const {isDropdownError} = useEarTrainingContext();
    
    return (
        <div className={`select-container pick-key ${isDropdownError && 'dropdown-error'}`}>
            <label htmlFor={label}>{label}:</label>
            <select name={label} id={label} value={key_} onChange={(e)=>{dispatch({type: dispatchAction, payload: e.target.value})}}>
                <option value="Select" disabled>Select</option>
                {options.map((option)=>{
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown
