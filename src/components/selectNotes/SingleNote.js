import React, {useState} from 'react'
import { useEarTrainingContext } from '../../EarTrainingContext';

const SingleNote = ({name, data}) => {
    const {noteOptions} = useEarTrainingContext();
    const [isChecked, setIsChecked] = useState(true);
    function handleChange(e){
        console.log(noteOptions);
        const nName = e.target.name;
        const isFound = noteOptions.notes.find((item) => item.slice(0,2) === nName);
        if(isFound){
            noteOptions.removeNote(nName);
        }else{
            noteOptions.addNote(nName);
        }
        setIsChecked(!isChecked);
    }
    return (
       
        <label className="select-notes-checkboxes-container" htmlFor={data}>{name}
            <input className="select-notes-checkboxes-box" type="checkbox" checked={isChecked} name={data} id={data} onChange={handleChange}/>
            <span class="select-notes-checkboxes-checkmark"></span>
        </label>
        
    )
}

export default SingleNote
