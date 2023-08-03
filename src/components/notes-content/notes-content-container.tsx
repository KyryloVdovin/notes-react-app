import { connect } from "react-redux"
import NotesContent from "./notes-content";
import { createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote, countActiveNotes, countArchivedNotes } from '../redux/notes-content-reducer';
import {IRootState} from '../../utils/main-notes-content-interfaces/IRootState';

const mapDispatchToProps = (state: IRootState) => {
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