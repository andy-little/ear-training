import React from 'react'



const Dropdown = ({label, options, key_, setValue}) => {
    return (
        <div className="select-container">
            <label htmlFor={label}>{label}:</label>
            <select name={label} id={label} value={key_} onChange={(e)=>{setValue(e.target.value)}}>
                {options.map((option)=>{
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown
