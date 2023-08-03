import './notes-content.css';
import { summaryNotesCount } from '../../utils/objects-helper';

import NoteItem from "./note-item";
interface SummaryItem {
    taskActiveNotesCount: number,
    taskArchivedNotesCount: number,
    ideaActiveNotesCount: number,
    ideaArchivedNotesCount: number,
    quoteActiveNotesCount: number,
    quoteArchivedNotesCount: number,
    randomThoughtActiveNotesCount: number,
    randomThoughtArchivedNotesCount: number,
}
interface SummaryTable {
    activeNotes: number,
    archivedNotes: number
}
interface Note extends SummaryItem {
    id: number,
    title: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    isEditingMode: boolean,
    isSummaryItem: boolean,
    summaryTable: SummaryTable,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void,
    countActiveNotes: () => void,
    countArchivedNotes: () => void
}
interface NotesContentProps {
    activeNotes: Note[],
    summaryNotes: Note[],
    taskActiveNotesCount: number,
    taskArchivedNotesCount: number,
    ideaActiveNotesCount: number,
    ideaArchivedNotesCount: number,
    quoteActiveNotesCount: number,
    quoteArchivedNotesCount: number,
    randomThoughtActiveNotesCount: number,
    randomThoughtArchivedNotesCount: number,
    createNote: () => void,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void,
    countActiveNotes: () => void,
    countArchivedNotes: () => void
}

const NotesContent = ({ activeNotes, summaryNotes, taskActiveNotesCount, taskArchivedNotesCount, ideaActiveNotesCount,
    ideaArchivedNotesCount, quoteActiveNotesCount, quoteArchivedNotesCount, randomThoughtActiveNotesCount,
    randomThoughtArchivedNotesCount, createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote,
    countActiveNotes, countArchivedNotes }: NotesContentProps) => {
    const noteList = activeNotes.map(item => {
        return <NoteItem key={item.id} {...item} setEditingMode={setEditingMode} leaveEditingMode={leaveEditingMode}
            changeNoteTexts={changeNoteTexts} archiveNote={archiveNote} countActiveNotes={countActiveNotes}
            countArchivedNotes={countArchivedNotes} />
    });

    const properties = {
        taskActiveNotesCount, taskArchivedNotesCount, ideaActiveNotesCount,
        ideaArchivedNotesCount, quoteActiveNotesCount, quoteArchivedNotesCount,
        randomThoughtActiveNotesCount, randomThoughtArchivedNotesCount
    }
    const summaryList = summaryNotes.map(item => {
        const summaryTable = summaryNotesCount(item, properties);
        return <NoteItem key={item.id} {...item} summaryTable={summaryTable} />
    });

    const createNewNote = () => {
        createNote();
        countActiveNotes();
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
                {summaryList}
            </div>
        </div>
    );
}



export default NotesContent;
