import React from "react";
import "../component_styles/Note.css";


export default function Note(props){

    return (
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p className="note-body">{props.body}</p>
            <div className="delete-btn-container">
                <button className="delete-btn" onClick={() => { props.deleteHandler(props.id)}}>DELETE</button>
            </div>
        </div>
    );
}