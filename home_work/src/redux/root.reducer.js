import battleReducer from "./battle/battler.reducer";
import {combineReducers} from "redux";

export default combineReducers ({
    battle: battleReducer
});