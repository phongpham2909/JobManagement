import * as types from '../../actions/constants/actionTypes'

const initialState = {
    id: "",
    name: "",
    image: "",
    price: "",
    amount: "",
    status: true
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCT_EDIT:
            return action.products
        default: return state
    }
};

export default myReducer