import React, { useState } from "react";
import "../component_styles/Editor.css";

export default function Editor(props){

    const [titleText, setTitleText] = useState("");
    const [bodyText, setBodyText] = useState("");


    const handleAddBtn = (e) => {
        props.setNote(titleText, bodyText);
        setTitleText("");
        setBodyText("");
    }

    return (
        <div className="editor">
            <div className="inner-editor">
                <input type="text" className="editor-title" placeholder="Title" value={titleText} onChange={(e) => setTitleText(e.target.value)} required/>
                <textarea className="editor-body" placeholder="Take a note" rows='5' cols='50' value={bodyText} onChange={(e) => setBodyText(e.target.value)} onKeyDown={ (ev) => {if(ev.key === "Enter") {handleAddBtn(); }}} required/>
                <div className="btn-container">
                    <button className="add-new-note-btn" onClick={handleAddBtn}>Add</button>
                </div>
            </div>
        </div>
    );
}