import React from 'react'



const Dropdown = ({label, options, key_, setValue}) => {
    console.log(`rendered; ${key_}`);
    return (
        <div className="select-container pick-key">
            <label htmlFor={label}>{label}:</label>
            <select name={label} id={label} value={key_} onChange={(e)=>{setValue(e.target.value)}}>
                <option value="Select" disabled>Select</option>
                {options.map((option)=>{
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown
