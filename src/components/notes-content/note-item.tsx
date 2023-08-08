import s from './note-item.module.css';
import editIcon from '../../img/edit.svg';
import deleteIcon from '../../img/delete.svg';
import saveIcon from '../../img/save.png';
import ideaIcon from '../../img/idea.png';
import taskIcon from '../../img/task.png';
import quoteIcon from '../../img/quote.png';
import randomThoughtIcon from '../../img/random-thought.png';
import { NoteCategories } from '../../utils/enumerators';
import INote from '../../utils/main-notes-content-interfaces/INote';

const icons = [
    { category: "Task", icon: taskIcon },
    { category: "Idea", icon: ideaIcon },
    { category: "Random thought", icon: randomThoughtIcon },
    { category: "Quote", icon: quoteIcon }
]

const NoteItem = ({ id, title, created, category, content, dates, isEditingMode, isSummaryItem, isArchived, summaryTable,
    setEditingMode, leaveEditingMode, changeNoteTexts, archiveNote, countActiveNotes, countArchivedNotes, openSummaryTable,
    unarchiveNote, selectSummaryCategory }: INote) => {

    const switchOnEditingMode = (noteId: number) => {
        setEditingMode(noteId);
    }
    const switchOffEditingMode = (noteId: number, textBody: string) => {
        leaveEditingMode(noteId, textBody);
        countActiveNotes();
    }
    const onNoteTextsChanged = (noteId: number, property: string, e: any) => {
        changeNoteTexts(noteId, property, e.target.value);
    }
    const removeNote = (noteId: number) => {
        archiveNote(noteId);
        countArchivedNotes();
        countActiveNotes();
    }
    const restoreNote = (noteId: number) => {
        unarchiveNote(noteId);
        countArchivedNotes();
        countActiveNotes();
    }
    const openSummaryTablePopup = (isOpen: boolean, category: string) => {
        selectSummaryCategory(category);
        openSummaryTable(isOpen);
    }
    const item = icons.find(icon => icon.category === category)

    return (
        <div className={`${isSummaryItem && s.clickable}`} onClick={() => isSummaryItem ? openSummaryTablePopup(true, category) : undefined}>
            {!isEditingMode && <div className={`${s.noteItem} ${s.flex}`}>
                <div className={`${s.padding} ${s.icon}`}>
                    <img src={item?.icon} />
                </div>
                <div className={`${s.padding} ${s.content} ${s.flex} ${s.gap}`}>
                    {!isSummaryItem && <div>{title}</div>}
                    {!isSummaryItem && <div>{created}</div>}
                    <div>{category}</div>
                    {isSummaryItem && <div>{summaryTable.activeNotes}</div>}
                    {isSummaryItem && <div>{summaryTable.archivedNotes}</div>}
                    {!isSummaryItem && <div>{content}</div>}
                    {!isSummaryItem && <div>{dates}</div>}
                </div>
                <div className={`${s.buttons} ${s.flex} ${s.gap} ${s.padding}`}>
                    {!isSummaryItem && !isArchived && <div className={`${s.editBtn}`} onClick={() => { switchOnEditingMode(id) }}>
                        <img src={editIcon} />
                    </div>}
                    {!isSummaryItem && <div className={`${s.deleteBtn}`} onClick={() =>
                        !isArchived ? removeNote(id) : restoreNote(id)}>
                        <img src={deleteIcon} />
                    </div>}
                </div>
            </div>}
            {isEditingMode && <div className={`${s.noteItem} ${s.flex}`}>
                <div className={`${s.padding} ${s.icon}`}>
                    <img src={item?.icon} />
                </div>
                <div className={`${s.padding} ${s.content} ${s.flex} ${s.gap}`}>
                    <input type='text' value={title} onChange={(e) => { onNoteTextsChanged(id, 'title', e) }} />
                    <input type='text' value={created} readOnly={true}/>
                    <select value={category} onChange={(e) => { onNoteTextsChanged(id, 'category', e) }}>
                        <option value={NoteCategories.Idea} label={NoteCategories.Idea} />
                        <option value={NoteCategories.Quote} label={NoteCategories.Quote} />
                        <option value={NoteCategories.RandomThought} label={NoteCategories.RandomThought} />
                        <option value={NoteCategories.Task} label={NoteCategories.Task} />
                    </select>
                    <input type='text' value={content} onChange={(e) => { onNoteTextsChanged(id, 'content', e) }} />
                    <input type='text' value={dates} readOnly={true}/>
                </div>
                <div className={`${s.buttons} ${s.flex} ${s.gap} ${s.padding}`}>
                    <div className={`${s.editBtn}`} onClick={() => { switchOffEditingMode(id, content) }}>
                        <img src={saveIcon} />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default NoteItem;