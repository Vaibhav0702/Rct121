import { combineReducers, legacy_createStore as creatStore } from "redux"; //redux-toolkit
import { counterReducer } from "./Counter/reducer";

import { todosReducer } from "./Todos/reducer";


const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todosReducer,
})


export const store = creatStore(rootReducer);
