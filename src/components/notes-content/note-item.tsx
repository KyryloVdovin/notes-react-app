import s from './note-item.module.css';
import editIcon from '../../img/edit.svg';
import deleteIcon from '../../img/delete.svg';

interface Note {
    id: number,
    title: string,
    created: Date,
    category: string,
    content: string,
    dates: string
}

const NoteItem = ({ id, title, created, category, content, dates }: Note) => {

    return (
        <div className={`${s.noteItem} ${s.flex}`}>
            <div className={`${s.padding} ${s.icon}`}>1</div>
            <div className={`${s.padding} ${s.content} ${s.flex} ${s.gap}`}>
                <div>{title}</div>
                <div>{created.getDate()}</div>
                <div>{category}</div>
                <div>{content}</div>
                <div>{dates}</div>
            </div>
            <div className={`${s.buttons} ${s.flex} ${s.gap} ${s.padding}`}>
                <div className={`${s.editBtn}`}>
                    <img src={editIcon} />
                </div>
                <div className={`${s.deleteBtn}`}>
                    <img src={deleteIcon}/>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;