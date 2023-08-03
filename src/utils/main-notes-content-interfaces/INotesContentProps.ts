import INote from './INote';

export default interface NotesContentProps {
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
    countArchivedNotes: () => void
}