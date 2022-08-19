import React, { useState } from "react";
import Note from "./Note";
import "../component_styles/Main.css";
import Editor from "./Editor.jsx";

let counter = 0;
const note_h = [];

export default function Main(){
    
    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        setNotes( () => {
            const lastNote = note_h[note_h.length - 1];
            const newNodeL = lastNote.filter( (ele) => {
                return ele.props.id !== id;
            });

            note_h.push(newNodeL);
            return newNodeL;
        });
    };

    const handleNotes = (paramT, paramB) => {
        
        const newL = [...notes, <Note title={paramT} body={paramB} deleteHandler={deleteHandler} id={counter++} key={counter}/>];
        setNotes(newL);
        updateNoteHistory(newL);
    };
    
    const updateNoteHistory = (param) => {
        note_h.push(param);
    };
    return (
    <main>
        <Editor setNote={handleNotes}/>
        <div className="note-area">
        {notes}
        </div>
    </main>
    );
}