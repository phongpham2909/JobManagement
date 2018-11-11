import * as types from '../../actions/constants/actionTypes'

const initialState = ''

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_PRODUCT:
            return action.keyword
        default: return state
    }
};

export default myReducer