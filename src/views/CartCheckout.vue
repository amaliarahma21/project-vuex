<template>
    <br>
    <br>
    <body>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">
                    <div v-for="cart in getKeranjang" key="cart.cart_id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
                            alt="product-image" class="w-full rounded-lg sm:w-40" />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div class="mt-5 sm:mt-0">
                                <h2 class="text-lg font-bold text-gray-900">{{ cart.name }}</h2>
                                <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                            </div>
                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div class="flex items-center border-gray-100">
                                        <span @click="editKeranjang({cart_id: cart.cart_id, type: 'minus'})" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                          {{ cart.qty }}
                                        <span @click="editKeranjang({cart_id: cart.cart_id, type: 'plus'})" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                <div @click="deleteKeranjang(cart.cart_id)" class="flex items-center space-x-4" >
                                    <p class="text-sm">{{ cart.regular_price }}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sub total -->
                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div class="mb-2 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">Rp.{{ calculateTotal }}</p>
                    </div>
                    <!-- <div class="flex justify-between">
                        <p class="text-gray-700">Shipping</p>
                        <p class="text-gray-700">$4.99</p>
                    </div> -->
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold">{{ calculateTotal }}</p>
                            <p class="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <router-link to="/checkout">
                    <button
                        class="mt-6 w-full rounded-md bg-purple-500 py-1.5 font-medium text-purple-50 hover:bg-purple-600">Check
                        Out</button>
                    </router-link>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    data(){
        return{
            qty : 1
        }
    },

    computed: {
        ...mapGetters('keranjang', ['getKeranjang']),

        calculateTotal() {
      return this.getKeranjang.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },
    },


    

    methods: {
        ...mapActions('keranjang', ['fetchKeranjang']),
        ...mapActions('keranjang', ['deleteKeranjang']),
        ...mapActions('keranjang', ['editKeranjang']),
        


        tambah(){
             this.qty++
          },
          kurang(){
             if(this.qty > 1){
                this.qty--
             }
          }
    },
    beforeMount() {
        this.fetchKeranjang();
    },
    created() {
        this.fetchKeranjang();
    }
}
</script>