import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Contact from "../views/Contact.vue";
import Brand from "../views/Brand.vue";
import DetailBrand from "../views/DetailBrand.vue";
import Category from "../views/Category.vue";
import Blog from "../views/Blog.vue";
import Profile from "../views/Profile.vue";
import CartCheckout from "../views/CartCheckout.vue";
import Order from "../views/Order.vue";
import DetailCategory from "../views/DetailCategory.vue";

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
        path: "/cart-checkout",
        name: "CartCheckout",
        component: CartCheckout,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue")
    },
    {
        path:"/order/:orderCode",
        name: "Order",
        component: Order,
        props: true,
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
        path: "/brand/:id",
        name: "DetailBrand",
        component: DetailBrand,
        props: true
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    {
        path: "/category/:slug",
        name: "DetailCategory",
        component: DetailCategory,
        props: true,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
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
