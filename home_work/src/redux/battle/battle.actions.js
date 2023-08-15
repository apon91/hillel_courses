import {BATTLE} from "./battle.constants";

export const setUserNameAction = (id, payload) => ({
    type: BATTLE.SET_USER_NAME,
    id,
    payload
})