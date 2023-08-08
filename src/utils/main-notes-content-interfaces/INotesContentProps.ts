import INote from './INote';
import ISummaryTablePopup from './ISummaryTablePopup';

export default interface NotesContentProps extends ISummaryTablePopup{
    activeNotes: INote[],
    summaryNotes: INote[],
    taskActiveNotesCount: number,
    taskArchivedNotesCount: number,
    ideaActiveNotesCount: number,
    ideaArchivedNotesCount: number,
    quoteActiveNotesCount: number,
    quoteArchivedNotesCount: number,
    randomThoughtActiveNotesCount: number,
    randomThoughtArchivedNotesCount: number,
    createNote: () => void,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void,
    countActiveNotes: () => void,
    countArchivedNotes: () => void,
    selectSummaryCategory: (category: string) => void,
}