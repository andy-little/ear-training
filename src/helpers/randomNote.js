function randomNote(notes, octaves){
    const note = notes[Math.floor(Math.random() * notes.length)];
    const octave = octaves[Math.floor(Math.random() * octaves.length)];
    return `${note}${octave}`;
}

export default randomNote;