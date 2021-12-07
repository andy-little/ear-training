import React, {useState} from 'react'
import { useEarTrainingContext } from '../../EarTrainingContext';

const SingleNote = ({name, data}) => {
    const {notesState, notesDispatch} = useEarTrainingContext();
    console.log('rendered');
    console.log(data);
    //const {noteOptions} = useEarTrainingContext();
    const find = notesState.notes.find((item) => item === data);
    const isFound = find ? true : false;
    console.log(isFound);
    
    const [isChecked, setIsChecked] = useState(isFound);
    function handleChange(e){
        
        const nName = e.target.name;
        //const isFound = noteOptions.notes.find((item) => item.slice(0,2) === nName);
        if(isFound){
            notesDispatch({type: "REMOVE_NOTE", payload: nName});
        }else{
            notesDispatch({type: "ADD_NOTE", payload: nName});
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
