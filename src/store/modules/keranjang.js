import axios from "axios"

const keranjang = {

    namespaced: true,
    state: {
        keranjang: [],
        address: [],
    },

    getters: {
        getKeranjang: (state) => state.keranjang,
        getAddress: (state) => state.address,
    },
    actions: {
        async fetchKeranjang({ commit }) {
            try{
                const token = localStorage.getItem('token');
                const dataKeranjang = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts",
                    {
                        "temp_user_id": null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                console.log(dataKeranjang.data.cart_items.data)
                commit("SET_KERANJANG", dataKeranjang.data.cart_items.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async editKeranjang({ commit, dispatch}, keranjangId) {
            try {
                const response = await axios.post(
                  "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity",
                  {
                    temp_user_id: null,
                    cart_id: keranjangId.cart_id,
                    type: keranjangId.type
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
   
                console.log("response from carts", response.data);
              } catch (error) {
                console.error(error);
              } finally {
                dispatch("keranjang/fetchKeranjang", null, { root: true });
              }
        },


         async deleteKeranjang({ commit, dispatch},  keranjangId) {
            try{
                const deleteKeranjang = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/destroy",
                    {
                        "temp_user_id": null,
                        'cart_id' : keranjangId
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                console.log(deleteKeranjang.data)
                
            } catch (error) {
                alert(error);
                console.log(error);
            }
            finally {
                dispatch('keranjang/fetchKeranjang', null, {root : true})
            }
        },

        async fetchAddress({ commit }) {
            try{
                const token = localStorage.getItem('token');
                const getAddress = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/addresses", 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_ADDRESS', getAddress.data.data)
                console.log(getAddress.data.data)
            } catch (error) {
                console.log(error);
            }
        }
            
    },
    mutations: {
        SET_KERANJANG(state, keranjang) {
            state.keranjang = keranjang;
        },
        SET_ADDRESS(state, address) {
            state.address = address;
        }
    },
    
};

export default keranjang;