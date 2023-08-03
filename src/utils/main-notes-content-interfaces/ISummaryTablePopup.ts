import INote from "./INote";

export default interface ISummaryTablePopup {
    isSummaryTableOpen: boolean,
    archivedNotes: [INote],
    selectedSummaryCategory: string,
    openSummaryTable: (isOpen: boolean) => void,
    unarchiveNote: (noteId: number) => void,
    countActiveNotes: () => void,
    countArchivedNotes: () => void
}