import { connect } from "react-redux"
import NotesContent from "./notes-content";
import { createNote } from '../redux/notes-content-reducer';

interface RootState {
    notesContent: {
        activeNotes: []
    }
}

const mapDispatchToProps = (state: RootState) => {
    return {
        activeNotes: state.notesContent.activeNotes
    }
}

const NotesContentContainer = connect(mapDispatchToProps, {createNote})(NotesContent);

export default NotesContentContainer;