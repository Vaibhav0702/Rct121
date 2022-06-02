import { legacy_createStore as creatStore } from "redux"; //redux-toolkit
import { counterReducer } from "./reducer";

export const store = creatStore(counterReducer, { counter: 0 , todos : []  });
