import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./todolistReducer";
import {settingsReducer} from "./settingsReducer";

let rootReducer = combineReducers({
  todolist: todolistReducer,
  settings: settingsReducer
})

const store = createStore(rootReducer);
export default store;
