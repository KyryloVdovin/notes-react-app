import { connect } from "react-redux"
import ISummaryTableRootState from "../../../utils/main-notes-content-interfaces/ISummaryTableRootState";
import SummatyTablePopupContent from "./summary-table-content";
import { openSummaryTable } from '../../redux/summary-table-reducer';
import { unarchiveNote, countActiveNotes, countArchivedNotes } from "../../redux/notes-content-reducer";

const mapStateToProps = (state: ISummaryTableRootState) => {
    return {
        isSummaryTableOpen: state.summaryTableContent.isSummaryTableOpen,
        archivedNotes: state.notesContent.archivedNotes,
        selectedSummaryCategory: state.summaryTableContent.selectedSummaryCategory
    }
}

const SummaryTableContainer = connect(mapStateToProps,
    {
        openSummaryTable, unarchiveNote, countActiveNotes, countArchivedNotes
    })
    (SummatyTablePopupContent);

export default SummaryTableContainer;