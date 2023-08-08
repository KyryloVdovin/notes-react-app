
const IS_SUMMARY_TABLE_OPEN = 'IS_SUMMARY_TABLE_OPEN';
const SET_SUMMARY_CATEGORY = 'SET_SUMMARY_CATEGORY';

const initialState = {
    isSummaryTableOpen: false,
    selectedSummaryCategory: ''
}

const summaryTableContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SUMMARY_TABLE_OPEN:
            return {
                ...state,
                isSummaryTableOpen: action.isOpen
            }
        case SET_SUMMARY_CATEGORY:
            return {
                ...state,
                selectedSummaryCategory: action.category
            }
        default:
            return state;
    }
}

export const openSummaryTable = (isOpen) => {
    return {
        type: IS_SUMMARY_TABLE_OPEN,
        isOpen
    }
};
export const selectSummaryCategory = (category) => {
    return {
        type: SET_SUMMARY_CATEGORY,
        category
    }
};

export default summaryTableContentReducer;