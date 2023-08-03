import ISummaryTablePopup from '../../utils/main-notes-content-interfaces/ISummaryTablePopup';
import INote from './INote';

export interface IRootState extends ISummaryTablePopup{
    notesContent: {
        activeNotes: [],
        archivedNotes: [INote],
        summaryNotes: [],
        taskActiveNotesCount: number,
        taskArchivedNotesCount: number,
        ideaActiveNotesCount: number,
        ideaArchivedNotesCount: number,
        quoteActiveNotesCount: number,
        quoteArchivedNotesCount: number,
        randomThoughtActiveNotesCount: number,
        randomThoughtArchivedNotesCount: number,
        setEditingMode: (noteId: number) => void,
        leaveEditingMode: (noteId: number, textBody: string) => void,
        changeNoteTexts: (noteId: number, property: string, textBody: string) => void,
        archiveNote: (noteId: number) => void,
        unarchiveNote: (noteId: number) => void,
        countActiveNotes: () => void,
        countArchivedNotes: () => void
    }
}