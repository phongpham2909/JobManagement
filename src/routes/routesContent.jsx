import LoginPage from "../content/LoginPage/LoginPage";
import RegisterPage from "../content/RegisterPage/Register";
import ProductPage from "../content/EcommercePage/EcommercePage";
import DetailPage from "../content/ProductPage/ProductPage";
import HomePage from "../content/Home/Home";
import NotFound from "../components/NotFound/NotFound";

const routesIndex = [
  {
    path: "/",
    name: "Home",
    icon: "home",
    component: HomePage
  },
  {
    path: "/product",
    name: "Products",
    icon: "store",
    component: ProductPage
  },
  {
    path: "/product-detail",
    name: "Product Detail",
    icon: "shopping_basket",
    component: DetailPage
  },
  {
    path: "/login-page",
    name: "Sign In",
    icon: "fingerprint",
    component: LoginPage
  },
  {
    path: "/register-page",
    name: "Sign Up",
    icon: "person_add",
    component: RegisterPage
  },
  {
    path: "*",
    component: NotFound
  },
  {
    redirect: true,
    path: "/home",
    pathTo: "/"
  },
];
const routesMenu = [
    {
      path: "/",
      name: "Home",
      icon: "home",
      component: HomePage
    },
    {
      path: "/product",
      name: "Products",
      icon: "store",
      component: ProductPage
    },
    {
      path: "/product-detail",
      name: "Product Detail",
      icon: "shopping_basket",
      component: DetailPage
    },
    {
      path: "/login-page",
      name: "Sign In",
      icon: "fingerprint",
      component: LoginPage
    },
    {
      path: "/register-page",
      name: "Sign Up",
      icon: "person_add",
      component: RegisterPage
    }
];

export default {routesIndex,routesMenu};