const GET_ALL_ACTIVE_NOTES = 'GET_ALL_ACTIVE_NOTES';
const CREATE_NOTE = 'CREATE_NOTE';

const initialState = {
    activeNotes: [
        { id: 0, title: 'go shopping', created: new Date(), category: 'Idea', content: 'text', dates: '11/11/2023' },
        { id: 1, title: 'visit friends', created: new Date(), category: 'Idea', content: 'text', dates: '11/11/2023' },
        { id: 2, title: 'get driving licens', created: new Date(), category: 'Idea', content: 'text', dates: '11/11/2023' },
        { id: 3, title: 'camp', created: new Date(), category: 'Idea', content: 'text', dates: '11/11/2023' },
    ],
}

const notesContentReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_ALL_ACTIVE_NOTES:
        //     return {
        //         ...state,

        //     }
        case CREATE_NOTE:
            return {
                ...state,
                activeNotes: [...state.activeNotes,
                { id: state.activeNotes.length + 1, title: 'new note', created: new Date(), category: 'Idea', content: 'text', dates: '11/11/2023' }]
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

export default notesContentReducer;