import INote from "./INote"

export default interface ISummaryTableRootState {
    summaryTableContent: {
        isSummaryTableOpen: boolean,
        selectedSummaryCategory: string
    },
    notesContent: {
        archivedNotes: [INote]
    }
}