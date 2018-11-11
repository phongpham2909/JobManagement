import * as types from '../../actions/constants/actionTypes'

const randomstring = require("randomstring")

//Function Find Index
const findIndex = (ListProducts, id) => {
    var result = -1;
    ListProducts.forEach((products, index) => {
        if (products.id === id) {
            result = index;
        }
    });
    return result;
}

const data = JSON.parse(localStorage.getItem('Products'))
const initialState = data ? data : []

function myReducer(state = initialState, action) {
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return [...state]
        case types.PRODUCT_SAVE:
            const ListProducts = {
                id: action.ListProducts.id,
                name: action.ListProducts.name,
                image: action.ListProducts.image,
                price: action.ListProducts.price,
                amount: action.ListProducts.amount,
                status: action.ListProducts.status
            }
            if (!ListProducts.id) {
                ListProducts.id = randomstring.generate({length: 5,charset: 'numeric'});
                state.push(ListProducts)
            } else {
                index = findIndex(state, ListProducts.id);
                state[index] = ListProducts;
            }
            localStorage.setItem('Products', JSON.stringify(state))
            return [...state]
        case types.UPDATE_STATUS_PRODUCT:
            // use lodash
            id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            };
            localStorage.setItem("Products", JSON.stringify(state));
            return [...state]

        case types.PRODUCT_DELETE:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1); //Delete 
            localStorage.setItem("Products", JSON.stringify(state));
            return [...state]
        default: return state
    }
};

export default myReducer