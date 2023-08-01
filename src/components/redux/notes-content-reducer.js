const GET_ALL_ACTIVE_NOTES = 'GET_ALL_ACTIVE_NOTES';
const CREATE_NOTE = 'CREATE_NOTE';
const SET_EDITING_MODE = 'SET_EDITING_MODE';
const SAVE_EDITING_MODE = 'SAVE_EDITING_MODE';
const CHANGE_NOTE_TEXT = 'CHANGE_NOTE_TEXT';
const ARCHIVE_NOTE = 'ARCHIVE_NOTE';

const initialState = {
    activeNotes: [
        { id: 0, title: 'go shopping', created: 'July 30, 2023', category: 'Idea', content: 'text', dates: '11/11/2023', isEditingMode: false, isArchived: false },
        { id: 1, title: 'visit friends', created: 'July 30, 2023', category: 'Task', content: 'text', dates: '11/11/2023', isEditingMode: false, isArchived: false },
        { id: 2, title: 'get driving licens', created: 'July 30, 2023', category: 'Quote', content: 'text', dates: '11/11/2023', isEditingMode: false, isArchived: false },
        { id: 3, title: 'camp', created: 'July 30, 2023', category: 'Random thought', content: 'text', dates: '11/11/2023', isEditingMode: false, isArchived: false },
    ],
    archivedNotes: [],
    totalNotesCount: 4
}

const updateObjectInArray = (items, itemId, newObjProps) => {
    return items.map(u => {
        if (u.id === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const notesContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            let currentData = new Date();
            let month = months[currentData.getMonth()];
            let day = currentData.getDate();
            let year = currentData.getFullYear();
            let fullDate = `${month} ${day}, ${year}`;

            state.totalNotesCount++;
            console.log(state.totalNotesCount);
            return {
                ...state,
                activeNotes: [...state.activeNotes,
                { id: state.totalNotesCount - 1, title: 'new note', created: fullDate, category: 'Idea', content: 'text', dates: '11/11/2023', isEditingMode: false }]
            }
        case SET_EDITING_MODE:
            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { isEditingMode: true })
            }
        case SAVE_EDITING_MODE:
            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { isEditingMode: false, title: action.textBody })
            }
        case CHANGE_NOTE_TEXT:
            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { [`${action.progerty}`]: action.textBody })
            }
        case ARCHIVE_NOTE:
            return {
                ...state,
                archivedNotes: [...state.archivedNotes, state.activeNotes.find(item => item.id === action.noteId)],
                activeNotes: state.activeNotes.filter(item => item.id !== action.noteId)
            }
        default:
            return state;
    }
}

export const createNote = () => {
    return {
        type: CREATE_NOTE
    }
};
export const setEditingMode = (noteId) => {
    return {
        type: SET_EDITING_MODE,
        noteId
    }
};
export const leaveEditingMode = (noteId, textBody) => {
    return {
        type: SAVE_EDITING_MODE,
        noteId,
        textBody
    }
};
export const archiveNote = (noteId) => {
    return {
        type: ARCHIVE_NOTE,
        noteId
    }
};
export const changeNoteTexts = (noteId, progerty, textBody) => {
    return {
        type: CHANGE_NOTE_TEXT,
        noteId,
        textBody,
        progerty
    }
};

export default notesContentReducer;