import React, {useState, useEffect} from 'react';
import './SingleNote.scss';
import { useEarTrainingContext } from '../../../../EarTrainingContext';

const SingleNote = ({name, data}) => {
    const {notesState, notesDispatch} = useEarTrainingContext();

    const find = notesState.notes.find((item) => item === data);
    const isFound = find ? true : false;

    const [isChecked, setIsChecked] = useState(isFound);

    function handleChange(e){
        if(notesState.notes.length > 1 && isChecked === true){
            const nName = e.target.name;
            if(isFound){
                notesDispatch({type: "REMOVE_NOTE", payload: nName});
            }else{
                notesDispatch({type: "ADD_NOTE", payload: nName});
            }
            setIsChecked(!isChecked);
        }else if(notesState.notes.length >= 1 && isChecked === false){
            const nName = e.target.name;
            if(isFound){
                notesDispatch({type: "REMOVE_NOTE", payload: nName});
            }else{
                notesDispatch({type: "ADD_NOTE", payload: nName});
            }
            setIsChecked(!isChecked);
        }
    }

    useEffect(() => {
        setIsChecked(isFound);
    }, [isFound])

    return (
        <label className="select-notes-checkboxes-container" htmlFor={data}>{name}
            <input className="select-notes-checkboxes-box" type="checkbox" checked={isChecked} name={data} id={data} onChange={handleChange}/>
            <span className="select-notes-checkboxes-checkmark"></span>
        </label>
        
    )
}

export default SingleNote
