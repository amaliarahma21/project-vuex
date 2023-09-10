import { createStore } from 'vuex';
import auth from './modules/auth';
import brand from './modules/brand';
import product from './modules/product';
import category from './modules/category';
import users from './modules/user';
import keranjang from './modules/keranjang';
import order from './modules/order';
import wishlist from './modules/wishlist';
import search from './modules/search'



const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brand,
    category,
    product,
    users,
    keranjang,
    order,
    wishlist,
    search
    
  },
});

export default store;