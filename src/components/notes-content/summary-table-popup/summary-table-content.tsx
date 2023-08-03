import './summary-table-popup.css';
import ISummaryTablePopup from "../../../utils/main-notes-content-interfaces/ISummaryTablePopup";
import SummatyTablePopup from './summary-table-popup';

const SummatyTablePopupContent = ({ isSummaryTableOpen, selectedSummaryCategory, openSummaryTable, archivedNotes, unarchiveNote,
    countActiveNotes, countArchivedNotes }: ISummaryTablePopup) => {

    return (
        <>
            {isSummaryTableOpen && <SummatyTablePopup isSummaryTableOpen={isSummaryTableOpen} openSummaryTable={openSummaryTable}
                archivedNotes={archivedNotes} unarchiveNote={unarchiveNote} countActiveNotes={countActiveNotes}
                countArchivedNotes={countArchivedNotes} selectedSummaryCategory={selectedSummaryCategory}/>}
        </>
    );
}

export default SummatyTablePopupContent;