<template>
    <br>
    <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
            <div v-if="product">
                <nav class="flex">
                    <ol role="list" class="flex items-center">
                        <li class="text-left">
                            <div class="-m-1">
                                <a href="#"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Home </a>
                            </div>
                        </li>

                        <li class="text-left">
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">/</span>
                                <div class="-m-1">
                                    <a href="#"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                        Product </a>
                                </div>
                            </div>
                        </li>

                        <li class="text-left">
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">/</span>
                                <div class="-m-1">
                                    <a href="#"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                        aria-current="page"> {{ product.name }} </a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div class="lg:col-span-3 lg:row-end-1">
                        <div class="lg:flex lg:items-start">
                            <div class="lg:order-2 lg:ml-5">
                                <div class="max-w-xl overflow-hidden rounded-lg">
                                    <img class="h-full w-full max-w-full object-cover"
                                        src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
                                        alt="" />
                                </div>
                            </div>

                            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div class="flex flex-row items-start lg:flex-col">
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
                                            alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
                                            alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
                                            alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ capitalizeFirstLetter(product.name)
                        }}</h1>
                        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ formatRupiah (product.base_price)
                        }}</h1>

                        <div class="mt-5 flex items-center">
                            <div class="flex items-center">
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                            </div>
                            <p class="ml-2 text-sm font-medium text-gray-500">{{ product.rating.rate }}</p>
                        </div>

                        <h2 class="mt-8 text-base text-gray-900">Category</h2>
                        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                            <label class="">
                                <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
                                <p
                                    class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                                    {{ product.category }}</p>
                            </label>
                        </div>
                        <br>
                        <div class="mb-4" v-if="token">
                            <button @click="addKeranjang(product.id)"
                                class="grid w-full cursor-pointer select-none rounded-md border border-purple-400 bg-purple-400 py-2 px-5 text-center align-middle font-bold text-white truncate text-white shadow hover:border-purple-400 hover:bg-purple-400 hover:text-white focus:border-purple-400 focus:bg-purple-400 focus:text-white focus:shadow-none"
                                type="submit">+ Cart</button> <br>
                            <button @click="addwishlist(product.variations[0].product_id)"
                                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg class="h-8 w-8 text-black md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                            </button>
                            <button class="ml-4" @click="deleteWishlist(product.id)">
                                <svg class="h-8 w-8 text-black md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
                                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                            </button>
                        </div>

                        <div class="mb-4" v-else>
                            <router-link to="/login">
                                <button
                                    class="grid w-full cursor-pointer select-none rounded-md border border-purple-400 bg-white-400 py-2 px-5 text-center align-middle font-bold text-purple-400 truncate "
                                    type="submit">Buy Now</button>
                            </router-link>
                        </div>
                    </div>

                    <ul class="mt-8 space-y-2">
                        <li class="flex items-center text-left text-sm font-medium text-gray-600">
                            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    class=""></path>
                            </svg>
                            Free shipping worldwide
                        </li>

                        <li class="flex items-center text-left text-sm font-medium text-gray-600">
                            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    class=""></path>
                            </svg>
                            Cancel Anytime
                        </li>
                    </ul>
                </div>

                <div class="lg:col-span-3">
                    <div class="border-b border-gray-300">
                        <nav class="flex gap-4">
                            <a href="#" title=""
                                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                Description </a>


                        </nav>
                    </div>

                    <div class="mt-8 flow-root sm:mt-12">
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo ea fuga
                            perferendis alias totam. Neque officia quam facilis similique minima! Aliquid fugiat officia
                            veritatis velit sint. Quas totam soluta minima praesentium consequatur quos repudiandae quisquam
                            fugit inventore, quaerat quod iusto alias, illo quae voluptatum incidunt. Minus praesentium
                            aliquid molestias nam delectus molestiae ab dolorum eum ducimus odit porro exercitationem
                            reiciendis deserunt adipisci doloribus, non soluta, minima laborum eaque enim. Perferendis
                            maxime optio nulla porro, quam tempora corrupti iure itaque laborum asperiores, perspiciatis
                            quis! Sapiente asperiores odit veniam maxime assumenda mollitia possimus atque? Veritatis dolore
                            ipsa, commodi incidunt enim inventore!</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-else>
                Product not found.
            </div>
        </div> -->
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            token: null
        }
    },
    computed: {
        ...mapGetters("product", ["getProductById"]),
        product() {
            return this.getProductById(Number(this.$route.params.id));
        },
        wishlist() {
            return this.$store.getters['wishlist/getWishlist'];
        },
    },
    methods: {
        ...mapActions("product", ["fetchSingleProduct", "fetchProduct"]),
        //keranjang
        ...mapActions("keranjang", ["fetchKeranjang"]),

        //menambah ke keranjang
        ...mapActions("product", ["addKeranjang"]),

        //Tambah Wishlist
        async addwishlist(productId) {
            await this.$store.dispatch('wishlist/addwishlist', productId);
            alert("Product succesfully added to wishlist !");
        },

        //Hapus Wishlist
        ...mapActions('wishlist', ['deleteWishlist']),


        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },
        formatRupiah(number){
            const formatter = new Intl.NumberFormat("id-ID",
            {
                style: "currency",
                currency: "IDR",
            });
            return formatter.format(number);
        },
    },
    beforeMount() {
        this.fetchProduct();
        this.fetchKeranjang();
    },
    mounted() {
        const productId = this.$route.params.id;
        console.log("Fetching single product with ID:", productId);
        this.fetchSingleProduct(productId);

        const cektoken = localStorage.getItem("token");
        this.token = cektoken
    },

};
</script>