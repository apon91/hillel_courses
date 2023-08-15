import {BATTLE} from "./battle.constants";

const initialState = {
    playerOneName: null,
    playerTwoName: null
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE.SET_USER_NAME:
            return {
                ...state,
                [`${action.id}Name`]: action.payload
            }
        default:
            return state;

    }
}

export default battleReducer;