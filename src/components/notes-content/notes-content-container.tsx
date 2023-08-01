import { connect } from "react-redux"
import NotesContent from "./notes-content";
import { createNote, setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote } from '../redux/notes-content-reducer';

interface RootState {
    notesContent: {
        activeNotes: [],
        archivedNotes: [],
        setEditingMode: (noteId: number) => void,
        leaveEditingMode: (noteId: number, textBody: string) => void
        changeNoteTexts: (noteId: number, property: string, textBody: string) => void,
        archiveNote: (noteId: number) => void
    }
}

const mapDispatchToProps = (state: RootState) => {
    console.log(state.notesContent.activeNotes);
    console.log(state.notesContent.archivedNotes);
    return {
        activeNotes: state.notesContent.activeNotes
    }
}

const NotesContentContainer = connect(mapDispatchToProps, {
    createNote, setEditingMode, leaveEditingMode,
    changeNoteTexts, archiveNote
})(NotesContent);

export default NotesContentContainer;