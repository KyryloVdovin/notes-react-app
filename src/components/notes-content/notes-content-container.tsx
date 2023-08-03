import { connect } from "react-redux"
import NotesContent from "./notes-content";
import { createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote, countActiveNotes, countArchivedNotes } from '../redux/notes-content-reducer';

interface RootState {
    notesContent: {
        activeNotes: [],
        archivedNotes: [],
        summaryNotes: [],
        taskActiveNotesCount: number,
        taskArchivedNotesCount: number,
        ideaActiveNotesCount: number,
        ideaArchivedNotesCount: number,
        quoteActiveNotesCount: number,
        quoteArchivedNotesCount: number,
        randomThoughtActiveNotesCount: number,
        randomThoughtArchivedNotesCount: number,
        setEditingMode: (noteId: number) => void,
        leaveEditingMode: (noteId: number, textBody: string) => void
        changeNoteTexts: (noteId: number, property: string, textBody: string) => void,
        archiveNote: (noteId: number) => void
        countActiveNotes: () => void,
        countArchivedNotes: () => void
    }
}

const mapDispatchToProps = (state: RootState) => {
    console.log(state.notesContent.activeNotes);
    console.log(state.notesContent.archivedNotes);
    return {
        activeNotes: state.notesContent.activeNotes,
        taskActiveNotesCount: state.notesContent.taskActiveNotesCount,
        taskArchivedNotesCount: state.notesContent.taskArchivedNotesCount,
        ideaActiveNotesCount: state.notesContent.ideaActiveNotesCount,
        ideaArchivedNotesCount: state.notesContent.ideaArchivedNotesCount,
        quoteActiveNotesCount: state.notesContent.quoteActiveNotesCount,
        quoteArchivedNotesCount: state.notesContent.quoteArchivedNotesCount,
        randomThoughtActiveNotesCount: state.notesContent.randomThoughtActiveNotesCount,
        randomThoughtArchivedNotesCount: state.notesContent.randomThoughtArchivedNotesCount,
        summaryNotes: state.notesContent.summaryNotes,
    }
}

const NotesContentContainer = connect(mapDispatchToProps, {
    createNote, setEditingMode, leaveEditingMode, changeNoteTexts,
    archiveNote, countActiveNotes, countArchivedNotes
})(NotesContent);

export default NotesContentContainer;