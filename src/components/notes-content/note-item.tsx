import s from './note-item.module.css';
import editIcon from '../../img/edit.svg';
import deleteIcon from '../../img/delete.svg';
import saveIcon from '../../img/save.png';
import ideaIcon from '../../img/idea.png';
import taskIcon from '../../img/task.png';
import quoteIcon from '../../img/quote.png';
import randomThoughtIcon from '../../img/random-thought.png';

interface Note {
    id: number,
    title: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    isEditingMode: boolean,
    setEditingMode: (noteId: number) => void,
    leaveEditingMode: (noteId: number, textBody: string) => void,
    changeNoteTexts: (noteId: number, property: string, textBody: string) => void
    archiveNote: (noteId: number) => void
}

enum NoteCategories {
    Task = 'Task',
    Idea = 'Idea',
    RandomThought = 'Random thought',
    Quote = 'Quote'
}

const icons = [
    { category: "Task", icon: taskIcon },
    { category: "Idea", icon: ideaIcon },
    { category: "Random thought", icon: randomThoughtIcon },
    { category: "Quote", icon: quoteIcon }
]

const NoteItem = ({ id, title, created, category, content, dates, isEditingMode, setEditingMode,
    leaveEditingMode, changeNoteTexts, archiveNote }: Note) => {
    const switchOnEditingMode = (noteId: number) => {
        setEditingMode(noteId);
    }
    const switchOffEditingMode = (noteId: number, textBody: string) => {
        leaveEditingMode(noteId, textBody);
    }
    const onNoteTextsChanged = (noteId: number, property: string, e: any) => {
        changeNoteTexts(noteId, property, e.target.value);
    }
    const removeNote = (noteId: number) => {
        archiveNote(noteId);
    }
    const item = icons.find(icon => icon.category === category)

    return (
        <div className={``}>
            {!isEditingMode && <div className={`${s.noteItem} ${s.flex}`}>
                <div className={`${s.padding} ${s.icon}`}>
                    <img src={item?.icon} />
                </div>
                <div className={`${s.padding} ${s.content} ${s.flex} ${s.gap}`}>
                    <div>{title}</div>
                    <div>{created}</div>
                    <div>{category}</div>
                    <div>{content}</div>
                    <div>{dates}</div>
                </div>
                <div className={`${s.buttons} ${s.flex} ${s.gap} ${s.padding}`}>
                    <div className={`${s.editBtn}`} onClick={() => { switchOnEditingMode(id) }}>
                        <img src={editIcon} />
                    </div>
                    <div className={`${s.deleteBtn}`} onClick={() => { removeNote(id) }}>
                        <img src={deleteIcon} />
                    </div>
                </div>
            </div>}
            {isEditingMode && <div className={`${s.noteItem} ${s.flex}`}>
                <div className={`${s.padding} ${s.icon}`}>
                    <img src={item?.icon} />
                </div>
                <div className={`${s.padding} ${s.content} ${s.flex} ${s.gap}`}>
                    <input type='text' value={title} onChange={(e) => { onNoteTextsChanged(id, 'title', e) }} />
                    <div>{created}</div>
                    <select value={category} onChange={(e) => { onNoteTextsChanged(id, 'category', e) }}>
                        <option value={NoteCategories.Idea} label={NoteCategories.Idea} />
                        <option value={NoteCategories.Quote} label={NoteCategories.Quote} />
                        <option value={NoteCategories.RandomThought} label={NoteCategories.RandomThought} />
                        <option value={NoteCategories.Task} label={NoteCategories.Task} />
                    </select>
                    <input type='text' value={content} onChange={(e) => { onNoteTextsChanged(id, 'content', e) }} />
                    <div>{dates}</div>
                </div>
                <div className={`${s.buttons} ${s.flex} ${s.gap} ${s.padding}`}>
                    <div className={`${s.editBtn}`} onClick={() => { switchOffEditingMode(id, title) }}>
                        <img src={saveIcon} />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default NoteItem;