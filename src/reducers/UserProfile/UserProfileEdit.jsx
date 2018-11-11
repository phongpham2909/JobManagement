import * as types from '../../actions/constants/actionTypes'

const initialState = {
    id: "",
    company: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: "",
    sex: 1,
    aboutme: "",
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERPROFILE_EDIT:
        return action.user
        default: return state
    }
};

export default myReducer