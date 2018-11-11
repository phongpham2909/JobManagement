import * as types from '../actions/constants/actionTypes'

const initialState = false

function myReducer(state = initialState, action){
    switch(action.type){
        case types.TOGGLE.OPEN_FORM:
        return true
        case types.TOGGLE.CLOSE_FORM:
        return false
        case types.TOGGLE.TOGGLE_FORM:
        return !state
        default: return state
    }
};

export default myReducer