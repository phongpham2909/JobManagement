import * as types from './constants/actionTypes'

export function LIST_ALL(){ 
    return {
        type : types.LIST_ALL
    }
}
export function OPEN_FORM(){ 
    return {
        type : types.TOGGLE.OPEN_FORM
    }
}
export function CLOSE_FORM(){ 
    return {
        type : types.TOGGLE.CLOSE_FORM
    }
}
export function TOGGLE_FORM(){ 
    return {
        type : types.TOGGLE.TOGGLE_FORM
    }
}

//actions Product
export function PRODUCT_EDIT(products){ 
    return {
        type : types.PRODUCT_EDIT,
        products
    }
}
export function PRODUCT_SAVE(ListProducts){ 
    return {
        type : types.PRODUCT_SAVE,
        ListProducts
    }
}
export function PRODUCT_DELETE(id){ 
    return {
        type : types.PRODUCT_DELETE,
        id
    }
}
export function UPDATE_STATUS_PRODUCT(id){ 
    return {
        type : types.UPDATE_STATUS_PRODUCT,
        id
    }
}
export function SORT_PRODUCT(sort){ 
    return {
        type : types.SORT_PRODUCT,
        sort
    }
}
export function SEARCH_PRODUCT(keyword){ 
    return {
        type : types.SEARCH_PRODUCT,
        keyword
    }
}
export function FILTER_TABLE_PRODUCT(filter){ 
    return {
        type : types.FILTER_TABLE_PRODUCT,
        filter, //filter: filter //FilterName , FilterStatus
    }
}
//actions catalog
export function CATALOG_EDIT(catalogs){ 
    return {
        type : types.CATALOG_EDIT,
        catalogs
    }
}
export function CATALOG_SAVE(ListCatalogs){ 
    return {
        type : types.CATALOG_SAVE,
        ListCatalogs
    }
}
export function CATALOG_DELETE(catalog_id){ 
    return {
        type : types.CATALOG_DELETE,
        catalog_id
    }
}
export function FILTER_TABLE_CATALOG(filter){ 
    return {
        type : types.FILTER_TABLE_CATALOG,
        filter, //filter: filter //FilterName , FilterStatus
    }
}

//action userprofile 
export function USERPROFILE_EDIT(user){ 
    return {
        type : types.USERPROFILE_EDIT,
        user
    }
}
export function USERPROFILE_SAVE(UserList){ 
    return {
        type : types.USERPROFILE_SAVE,
        UserList
    }
}
