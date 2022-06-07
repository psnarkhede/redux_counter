import {legacy_createStore} from "redux";
import { Reducer } from "./Reducer";

let initialState = {
    count: 0
}

export const Store = legacy_createStore(Reducer, initialState);