import { combineReducers } from 'redux'
import isDisplayForm from './isDisplayForm'
import ProductEditing from './Product_State/ProductEditing'
import ListProducts from './Product_State/Products'
import ProductSort from './Product_State/ProductSort'
import ProductFilterTable from './Product_State/ProductFilterTable'
import SearchProduct from './Product_State/ProductSearch'
import CatalogEditing from './Catalog_State/CatalogEditing'
import ListCatalogs from './Catalog_State/Catalogs'
import UserProfileEdit from './UserProfile/UserProfileEdit'
import UserProfile from "./UserProfile/UserProfile"

const myReducer =  combineReducers({
    isDisplayForm,
    //State Product
    ProductEditing,
    ListProducts,
    ProductSort,
    ProductFilterTable,
    SearchProduct,
    //State Catalog 
    CatalogEditing,
    ListCatalogs,

    UserProfileEdit,
    UserProfile,

    
});

export default myReducer
