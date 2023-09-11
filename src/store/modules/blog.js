import axios from "axios";

const blog = {
    namespaced: true,
    state: {
        dataBlog: [],
    },
    getters: {
        getBlog: (state) => state.dataBlog,
    },
    actions: {
        async fetchBlog({ commit }) {
            try{
                const dataBlog = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-blog-categories"
                );
                commit("SET_BLOG", dataBlog.data.data.slice(0,20));
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_BLOG(state, blog) {
            state.dataBlog = blog;
        },
    }
}

export default blog;