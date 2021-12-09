import React, {useState, useEffect} from 'react'
import { useEarTrainingContext } from '../../EarTrainingContext';

const SingleNote = ({name, data}) => {
    const {notesState, notesDispatch} = useEarTrainingContext();

    const find = notesState.notes.find((item) => item === data);
    const isFound = find ? true : false;

    const [isChecked, setIsChecked] = useState(isFound);

    function handleChange(e){
        const nName = e.target.name;
        if(isFound){
            notesDispatch({type: "REMOVE_NOTE", payload: nName});
        }else{
            notesDispatch({type: "ADD_NOTE", payload: nName});
        }
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        setIsChecked(isFound);
    }, [notesState])

    return (
        <label className="select-notes-checkboxes-container" htmlFor={data}>{name}
            <input className="select-notes-checkboxes-box" type="checkbox" checked={isChecked} name={data} id={data} onChange={handleChange}/>
            <span className="select-notes-checkboxes-checkmark"></span>
        </label>
        
    )
}

export default SingleNote
