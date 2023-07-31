import { useState } from "react"
import './notes-content.css';

import NoteItem from "./note-item";

interface Note {
    id: number,
    title: string,
    created: Date,
    category: string,
    content: string,
    dates: string
}
interface NotesContentProps {
    activeNotes: Note[],
    createNote: () => void
}

const NotesContent = ({ activeNotes, createNote }: NotesContentProps) => {
    const noteList = activeNotes.map(item => {
        return <NoteItem {...item} />
    });

    const createNewNote = () => {
        createNote();
    }

    return (
        <div className="notes-container">
            <div className="notes-list">
                {noteList}
            </div>
            <button onClick={createNewNote} className="add-note-btn">add note</button>
        </div>
    );
}



export default NotesContent;
