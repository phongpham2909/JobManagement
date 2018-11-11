import * as types from '../../actions/constants/actionTypes'

const findIndex = (UserList, id) => {
    var result = -1;
    UserList.forEach((user, index) => {
        if (user.id === id) {
            result = index;
        }
    });
    return result;
}

const data = JSON.parse(localStorage.getItem('UserList'))
const initialState = data ? data : []

function myReducer(state = initialState, action) {
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return [...state]
        case types.USERPROFILE_SAVE:
        const UserList = {
            id: action.UserList.id,
            username: action.UserList.username,
            email: action.UserList.email,
            company: action.UserList.company,
            firstname: action.UserList.firstname,
            lastname: action.UserList.lastname,
            address: action.UserList.address,
            city: action.UserList.city,
            country: action.UserList.country,
            sex: action.UserList.sex,
            aboutme: action.UserList.action,
        }
            if (UserList.id) {
                index = findIndex(state, UserList.id);
                state[index] = UserList;
            }
            localStorage.setItem('UserList', JSON.stringify(state))
        return [...state]
        default: return state
    }
};

export default myReducer