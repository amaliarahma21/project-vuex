import { createStore } from 'vuex';
import auth from './modules/auth';
import brand from './modules/brand';
import product from './modules/product';
import kategori from './modules/kategori';
import users from './modules/user';
import keranjang from './modules/keranjang';
import order from './modules/order';



const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brand,
    kategori,
    product,
    users,
    keranjang,
    order
    
  },
});

export default store;