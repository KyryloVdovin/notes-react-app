import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import notesContentReducer from "./notes-content-reducer";

let reducers = combineReducers({
    notesContent: notesContentReducer
});

let store = createStore(reducers);

export default store;