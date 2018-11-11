import * as types from '../../actions/constants/actionTypes'

const initialState = {
    catalog_id: "",
    catalog_name: "",
    catalog_image: "",
    catalog_description: ""
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case types.CATALOG_EDIT:
            return action.catalogs
        default: return state
    }
};

export default myReducer