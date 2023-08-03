import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import notesContentReducer from "./notes-content-reducer";
import summaryTableContentReducer from "./summary-table-reducer";

let reducers = combineReducers({
    notesContent: notesContentReducer,
    summaryTableContent: summaryTableContentReducer
});

let store = createStore(reducers);

export default store;