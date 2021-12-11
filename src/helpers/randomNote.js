function randomNote(notesState){
    const note = notesState.notes[Math.floor(Math.random() * notesState.notes.length)];
    const octave = notesState.octaves[Math.floor(Math.random() * notesState.octaves.length)];
    return `${note}${octave}`;
}

export default randomNote;