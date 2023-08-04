import './notes-content.css';
import { summaryNotesCount } from '../../utils/objects-helper';
import INotesContentProps from '../../utils/main-notes-content-interfaces/INotesContentProps';
import NoteItem from "./note-item";

const NotesContent = ({ activeNotes, summaryNotes, taskActiveNotesCount, taskArchivedNotesCount, ideaActiveNotesCount,
    ideaArchivedNotesCount, quoteActiveNotesCount, quoteArchivedNotesCount, randomThoughtActiveNotesCount,
    randomThoughtArchivedNotesCount, createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote,
    countActiveNotes, countArchivedNotes, openSummaryTable, selectSummaryCategory }: INotesContentProps) => {

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
        return <NoteItem key={item.id} {...item} summaryTable={summaryTable} openSummaryTable={openSummaryTable}
            selectSummaryCategory={selectSummaryCategory} />
    });

    const createNewNote = () => {
        createNote();
        countActiveNotes();
    }

    return (
        <div>
            <div className="notes-container">
                <div className="notes-list">
                    <div className='column-titles'>
                        <div>Name</div>
                        <div>Created</div>
                        <div>Category</div>
                        <div>Content</div>
                        <div>Dates</div>
                    </div>
                    {noteList}
                </div>
                <button onClick={createNewNote} className="add-note-btn">add note</button>
            </div>
            <div className="notes-list">
                <div className='summary-column-titles'>
                    <div>Category</div>
                    <div>Active</div>
                    <div>Archived</div>
                </div>
                {summaryList}
            </div>
        </div>
    );
}

export default NotesContent;
