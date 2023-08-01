import { useState } from "react"
import './notes-content.css';

import NoteItem from "./note-item";

interface Note {
    id: number,
    title: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    isEditingMode: boolean,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void
}
interface NotesContentProps {
    activeNotes: Note[],
    createNote: () => void,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void
}

const NotesContent = ({ activeNotes, createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote }: NotesContentProps) => {
    const noteList = activeNotes.map(item => {
        return <NoteItem key={item.id} {...item} setEditingMode={setEditingMode} leaveEditingMode={leaveEditingMode}
            changeNoteTexts={changeNoteTexts} archiveNote={archiveNote} />
    });

    const createNewNote = () => {
        createNote();
    }

    return (
        <div>
            <div className="notes-container">
                <div className="notes-list">
                    {noteList}
                </div>
                <button onClick={createNewNote} className="add-note-btn">add note</button>
            </div>
            <div className="notes-list">
                {noteList}
            </div>
        </div>
    );
}



export default NotesContent;
