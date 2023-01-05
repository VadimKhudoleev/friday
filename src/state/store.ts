import {Reducer} from "./reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    test: Reducer
})

export const store = legacy_createStore(rootReducer);