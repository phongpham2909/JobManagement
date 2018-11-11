import * as types from '../../actions/constants/actionTypes'

const randomstring = require("randomstring");

//Function Find Index
const findIndex = (ListCatalogs, catalog_id) => {
    var result = -1;
    ListCatalogs.forEach((catalogs, index) => {
        if (catalogs.catalog_id === catalog_id) {
            result = index;
        }
    });
    return result;
}

const data = JSON.parse(localStorage.getItem('Catalogs'))
const initialState = data ? data : []


function myReducer(state = initialState, action) {
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return [...state]
        case types.CATALOG_SAVE:
            const ListCatalogs = {
                catalog_id: action.ListCatalogs.catalog_id,
                catalog_name: action.ListCatalogs.catalog_name,
                catalog_image: action.ListCatalogs.catalog_image,
                catalog_description: action.ListCatalogs.catalog_description,
            }
            if (!ListCatalogs.catalog_id) {
                ListCatalogs.catalog_id = randomstring.generate({ length: 5, charset: 'numeric' });
                state.push(ListCatalogs)
            } else {
                index = findIndex(state, ListCatalogs.catalog_id);
                state[index] = ListCatalogs;
            }
            localStorage.setItem('Catalogs', JSON.stringify(state))
            return [...state]
        case types.CATALOG_DELETE:
            id = action.catalog_id;
            index = findIndex(state, id);
            state.splice(index, 1); //Delete 
            localStorage.setItem("Catalogs", JSON.stringify(state));
            return [...state]
        default: return state
    }
};

export default myReducer