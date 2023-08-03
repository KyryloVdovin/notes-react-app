import ISummaryTable from './ISummaryTableData';
import ISummaryItem from './ISummaryTableItem';

export default interface INote extends ISummaryItem {
    id: number,
    title: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    isEditingMode: boolean,
    isSummaryItem: boolean,
    summaryTable: ISummaryTable,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void,
    countActiveNotes: () => void,
    countArchivedNotes: () => void
}