import { countActiveElements, countArchivedElements, updateObjectInArray, dateParser } from '../../utils/objects-helper';
import { NoteCategories } from '../../utils/enumerators';

const CREATE_NOTE = 'CREATE_NOTE';
const SET_EDITING_MODE = 'SET_EDITING_MODE';
const SAVE_EDITING_MODE = 'SAVE_EDITING_MODE';
const CHANGE_NOTE_TEXT = 'CHANGE_NOTE_TEXT';
const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';
const COUNT_ACTIVE_NOTES = 'COUNT_ACTIVE_NOTES';
const COUNT_ARCHIVED_NOTES = 'COUNT_ARCHIVED_NOTES';

const initialState = {
    activeNotes: [
        {
            id: 0, title: 'go shopping', created: 'July 30, 2023', category: NoteCategories.Idea.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 1, title: 'visit friends', created: 'July 30, 2023', category: NoteCategories.Task.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 2, title: 'get driving licens', created: 'July 30, 2023', category: NoteCategories.Quote.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 3, title: 'camp', created: 'July 30, 2023', category: NoteCategories.RandomThought.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 4, title: 'fire show', created: 'July 30, 2023', category: NoteCategories.Task.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 5, title: 'walking', created: 'July 30, 2023', category: NoteCategories.Quote.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
        {
            id: 6, title: 'weekand', created: 'July 30, 2023', category: NoteCategories.RandomThought.toString(), content: 'text',
            dates: '', isEditingMode: false, isArchived: false, isSummaryItem: false
        },
    ],
    archivedNotes: [],
    summaryNotes: [
        { id: 0, category: NoteCategories.Idea, activeNotes: 0, archivedNotes: 0, isSummaryItem: true },
        { id: 1, category: NoteCategories.Task, activeNotes: 0, archivedNotes: 0, isSummaryItem: true },
        { id: 2, category: NoteCategories.Quote, activeNotes: 0, archivedNotes: 0, isSummaryItem: true },
        { id: 3, category: NoteCategories.RandomThought, activeNotes: 0, archivedNotes: 0, isSummaryItem: true },
    ],
    totalNotesCount: 7,
    taskActiveNotesCount: 2,
    taskArchivedNotesCount: 0,
    ideaActiveNotesCount: 1,
    ideaArchivedNotesCount: 0,
    quoteActiveNotesCount: 2,
    quoteArchivedNotesCount: 0,
    randomThoughtActiveNotesCount: 2,
    randomThoughtArchivedNotesCount: 0,
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

            return {
                ...state,
                activeNotes: [...state.activeNotes,
                {
                    id: state.totalNotesCount - 1, title: 'new note', created: fullDate, category: NoteCategories.RandomThought.toString(), content: 'text',
                    dates: '', isArchived: false, isEditingMode: false, isSummaryItem: false
                }]
            }
        case SET_EDITING_MODE:
            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { isEditingMode: true })
            }
        case SAVE_EDITING_MODE:
            const parsedDate = dateParser(action.textBody);

            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { isEditingMode: false, dates: parsedDate })
            }
        case CHANGE_NOTE_TEXT:
            return {
                ...state,
                activeNotes: updateObjectInArray(state.activeNotes, action.noteId, { [`${action.property}`]: action.textBody })
            }
        case ARCHIVE_NOTE:
            const archivedItem = state.activeNotes.find(item => item.id === action.noteId);
            return {
                ...state,
                archivedNotes: [...state.archivedNotes, { ...archivedItem, isArchived: true }],
                activeNotes: state.activeNotes.filter(item => item.id !== action.noteId)
            }
        case UNARCHIVE_NOTE:
            const unarchivedItem = state.archivedNotes.find(item => item.id === action.noteId);
            return {
                ...state,
                activeNotes: [...state.activeNotes, { ...unarchivedItem, isArchived: false }],
                archivedNotes: state.archivedNotes.filter(item => item.id !== action.noteId)
            }
        case COUNT_ACTIVE_NOTES:
            countActiveElements(state);

            return {
                ...state
            }
        case COUNT_ARCHIVED_NOTES:
            countArchivedElements(state);

            return {
                ...state
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
export const countActiveNotes = () => {
    return {
        type: COUNT_ACTIVE_NOTES
    }
};
export const countArchivedNotes = () => {
    return {
        type: COUNT_ARCHIVED_NOTES
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
export const unarchiveNote = (noteId) => {
    return {
        type: UNARCHIVE_NOTE,
        noteId
    }
};
export const changeNoteTexts = (noteId, property, textBody) => {
    return {
        type: CHANGE_NOTE_TEXT,
        noteId,
        textBody,
        property
    }
};

export default notesContentReducer;