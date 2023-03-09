import {createStore} from "redux";
import {reducer} from "./addReduser";

export const store = createStore(reducer)