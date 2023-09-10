<template>
    <div class="search-navbar relative" @click="closeSearch">
        <input type="text" v-model="searchKeyword" @input="searchProducts"
            class="bg-white border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2"
            placeholder="Search for Products" />
        <div v-if="showResults" class="search-results absolute bg-white border border-gray-400 mt-1 w-full py-1 shadow-md">
            <ul class="list-unstyled p-0">
                <li v-for="product in searchResults" :key="product.id" class="py-1 px-5">
                    <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }" class="text-black-900 text-sm">
                        <div class="flex items-center">
                            <img src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" :alt="product.name" class="w-10 h-10 object-cover mr-2" />
                            <div>
                                <div class="font-medium">{{ product.name }}</div>
                                <div class="text-gray-700 font-bold">{{ formatRupiah(product.base_price) }}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchKeyword: "",
        };
    },
    computed: {
        searchResults() {
            return this.$store.getters["search/getSearchResults"];
        },
        showResults() {
            return this.searchResults.length > 0;
        },
    },
    methods: {
        searchProducts() {
            if (this.searchKeyword.trim() !== "") {
                this.$store.dispatch("search/fetchSearchResults", this.searchKeyword);
            } else {
                this.$store.commit("search/SET_SEARCH_RESULTS", []);
            }
        },
        closeSearch() {
            this.$store.commit("search/SET_SEARCH_RESULTS", []);
        },
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
};
</script>

<style scoped>
.search-navbar {
    position: relative;
}
input {
    width: 300px;
    padding: 8px;
}
.search-results {
    max-height: 200px;
    overflow-y: auto;
    z-index: 1;
}
</style>
