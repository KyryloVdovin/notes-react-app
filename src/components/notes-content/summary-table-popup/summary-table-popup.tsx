import './summary-table-popup.css';
import ISummaryTablePopup from "../../../utils/main-notes-content-interfaces/ISummaryTablePopup";
import NoteItem from '../note-item';

const SummatyTablePopup = ({ isSummaryTableOpen, selectedSummaryCategory, openSummaryTable, archivedNotes, unarchiveNote, countArchivedNotes,
    countActiveNotes }: ISummaryTablePopup) => {
    const closePopup = () => {
        openSummaryTable(false);
    }

    const filteredArchivedNotes = archivedNotes.filter((item) => item.category === selectedSummaryCategory);

    const archivedNoteList = filteredArchivedNotes.map(item => {
        return <NoteItem key={item.id} {...item} unarchiveNote={unarchiveNote} countArchivedNotes={countArchivedNotes}
            countActiveNotes={countActiveNotes} />
    });

    return (
        <div className={'popup__bg active'}>
            <div className={'popup active'}>
                {filteredArchivedNotes.length === 0 ?
                    <div className='empty'>
                        No archived notes
                    </div> :
                    <div className={`archived-items ${isSummaryTableOpen && 'margin-bottom'}`}>
                        {archivedNoteList}
                    </div>
                }

                <button id="close" type="submit" onClick={closePopup}>Close</button>
            </div>
        </div>
    );
}

export default SummatyTablePopup;