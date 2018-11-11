import * as types from '../../actions/constants/actionTypes'

const initialState = {
    sortBy: "name",
    sortValue: 1
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.SORT_PRODUCT:
        return {
            sortBy: action.sort.sortBy,
            sortValue: parseInt(action.sort.sortValue, 10)
        }
        default: return state
    }
};

export default myReducer