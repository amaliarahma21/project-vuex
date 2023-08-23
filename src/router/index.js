import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Contact from "../views/Contact.vue";
import Brand from "../views/Brand.vue";
import Kategori from "../views/Kategori.vue";
import Profile from "../views/Profile.vue";

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('token'))
        isAuthenticated = true;
    else 
        isAuthenticated = false;
    if (isAuthenticated) {
        next();
    }
    else {
        next('/login');
    }
}
const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: cekToken
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
