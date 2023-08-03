import { connect } from "react-redux"
import NotesContent from "./notes-content";
import {
    createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote, countActiveNotes,
    countArchivedNotes
} from '../redux/notes-content-reducer';
import { IRootState } from '../../utils/main-notes-content-interfaces/IRootState';
import { openSummaryTable, selectSummaryCategory } from '../redux/summary-table-reducer';

const mapStateToProps = (state: IRootState) => {
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

const NotesContentContainer = connect(mapStateToProps, {
    createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote,
    countActiveNotes, countArchivedNotes, openSummaryTable, selectSummaryCategory
})(NotesContent);

export default NotesContentContainer;