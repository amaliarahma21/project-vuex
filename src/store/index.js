import { createStore } from 'vuex';
import auth from './modules/auth';
import brand from './modules/brand';
import product from './modules/product';
import kategori from './modules/kategori';
import users from './modules/user'



const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brand,
    kategori,
    product,
    users
    
  },
});

export default store;