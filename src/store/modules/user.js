import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
        dashboard: []
    },

    getters: {
        getUser: (state) => state.userData,
        getDashboard: (state) => state.dashboard
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
        // Info Dashboard
        async fetchDashboard({commit}) {
            try {
                const token = localStorage.getItem("token");
                const dataDashboard = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/dashboard", {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                })
                console.log(dataDashboard.data)
                commit('SET_DASHBOARD',dataDashboard.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.userData = user;
        },
        SET_DASHBOARD(state, dashboard) {
            state.dashboard = dashboard;
        },
    },
};

export default user;