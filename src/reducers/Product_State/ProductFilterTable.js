import * as types from '../../actions/constants/actionTypes'

const initialState = {
    name: "",
    status: -1
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.FILTER_TABLE_PRODUCT:
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            }
        default: return state
    }
};

export default myReducer