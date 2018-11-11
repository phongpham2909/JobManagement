import Login from "../content/SignInUp/SignInUp/Login";
import Register from "../content/SignInUp/SignInUp/Register";
//import LockScreen from "../content/SignInUp/SignInUp/LockScreen";
import SignInUp from "../content/SignInUp/SignInUp";
import ProductPage from "../content/EcommercePage/EcommercePage";
import DetailPage from "../content/ProductPage/ProductPage";
import HomePage from "../content/Home/Home";
import index from "../content/index";

import { ShoppingBasket, Store, Home } from "@material-ui/icons";

const routesIndex = [
  {
    path: "/admin",
    component: SignInUp
  },
  {
    path: "/",
    component: index
  },
];
const routesSignInUp = [
  {
    redirect: true,
    path: "/admin",
    pathTo: "/admin/login"
  },
  {
    path: "/admin/login",
    name: "Login",
    icon: "keyboard",
    component: Login,
  },
  {
    path: "/admin/register",
    name: "Register",
    icon: "user-circle",
    component: Register
  }
];
const routesContent = [
  {
    path: "/",
    name: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/product",
    name: "Products",
    icon: Store,
    component: ProductPage
  },
  {
    path: "/product-detail",
    name: "Product Detail",
    icon: ShoppingBasket,
    component: DetailPage
  },
];

export default { routesContent, routesSignInUp, routesIndex };