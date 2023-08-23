import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
    },

    getters: {
        getUser: (state) => state.userData,
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const dataUser = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/info", 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
                );
                console.log(dataUser.data)
                commit("SET_USER", dataUser.data['user']);
                return dataUser.data
            } catch ( error ) {
                alert(error);
                console.log(error);
                return 0
            }
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.userData = user;
        },
    },
};

export default user;