<template>
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">Detail Order</p>
        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div v-for="product in getKeranjang" :key="product.cart_id" class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95"
              alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">{{ product.name }}</span>
              <span class="float-right text-gray-400">{{ product.qty }} pcs</span>
              <p class="text-lg font-bold">Rp.{{ product.regular_price * product.qty }}</p>
            </div>
          </div>
        </div>
  
        <p class="mt-8 text-lg font-medium">Opsi Pengiriman</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input class="peer hidden" id="radio_1" type="radio" value="standard" v-model="deliveryType" />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1">
              <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">JNE</span>
                <p class="text-slate-500 text-sm leading-6">Pengiriman 2-4 Hari</p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input class="peer hidden" id="radio_2" type="radio" value="express" v-model="deliveryType" />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2">
              <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">Ninja Express</span>
                <p class="text-slate-500 text-sm leading-6">Pengiriman: 1-2 Hari</p>
              </div>
            </label>
          </div>
        </form>
  
        <p class="mt-8 text-lg font-medium">Metode Pembayaran</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input class="peer hidden" id="radio_3" type="radio" value="cash_on_delivery" v-model="paymentType" />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_3">
              <img class="w-14 object-contain"
                src="data:image/png;base64,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"
                alt="" />
              <div class="ml-5 mt-4">
                <span class="mt-2 font-semibold">Cash On Delivery</span>
                <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
              </div>
            </label>
          </div>
          <div class="relative">
            <input class="peer hidden" id="radio_4" type="radio" value="cash_on_delivery" v-model="deliveryType" />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_4">
              <img class="w-14 object-contain"
                src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-orange-wallet-icon-png-image_4462385.jpg"
                alt="" />
              <div class="ml-5 mt-4">
                <span class="mt-16 font-semibold leading-6">Payment Wallet</span>
                <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
              </div>
            </label>
          </div>
        </form>
      </div>
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Detail Pembayaran</p>
        <div class="">
          <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div class="relative">
            <input type="text" 
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
               /> 
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Nama</label>
          <div class="relative">
            <input type="text" id="card-holder" name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="masukkan nama" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
          </div>
          <label for="phone" class="mt-4 mb-2 block text-sm font-medium">No. Telp</label>
          <div class="relative">
            <input type="number" id="phone" name="phone"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm lowercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="isi no.telp" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
          </div>
          <label for="address" class="mt-4 mb-2 block text-sm font-medium">Alamat</label>
          <div class="relative">
            <input type="text" id="address" name="address"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm lowercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="isi alamat anda" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
          </div>

          
  
          <!-- Total -->
          <!-- <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal</p>
              <p class="font-semibold text-gray-900">Rp.{{ totalHarga() }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Shipping</p>
              <p class="font-semibold text-gray-900">$8.00</p>
            </div>
          </div> -->
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">Rp.{{ totalHarga() }}</p>
          </div>
        </div>
        <router-link to="/order">
          <button @click="performCheckout"
            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Check Out</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        paymentType: '',
        deliveryType: '',
      };
    },
    computed: {
      ...mapGetters('keranjang', ['getKeranjang']),
      ...mapGetters('keranjang', ['getCheckout']),
      ...mapGetters('keranjang', ['getAddress']),
      ...mapGetters('user', ['getUser'])
  
    },
    methods: {
      ...mapActions('keranjang', ['fetchKeranjang']),
      ...mapActions('product', ['fetchProduct']),
      ...mapActions('product', ['fetchProduct']),
      ...mapActions('keranjang', ['fetchAddress']),
      ...mapActions('user', ['fetchUser']),
      
      // total price
      totalHarga() {
        this.total = this.getKeranjang.reduce((acc, product) => {
          return acc + parseFloat(product.regular_price * product.qty);
        }, 0);
  
        return this.total.toFixed(2);
  
      },
      async performCheckout() {
        // Collect the product IDs to be checked out
        const cartItemIds = this.getKeranjang.map(product => product.cart_id);
        // Get user address
        const userAddressResponse = await this.$store.dispatch('keranjang/fetchAddress');
        const userAddressId = userAddressResponse.data[0].id;
  
        const checkoutPayload = {
          shippingAddress: userAddressId,
          billingAddress: userAddressId,
          paymentType: this.paymentType,
          deliveryType: this.deliveryType,
          cart_item_ids: cartItemIds
        };
  
        // Call the checkout action with the collected IDs and user address
        await this.$store.dispatch('keranjang/checkoutCart', checkoutPayload)
          .then(() => {
            this.$router.push(`/order/${this.getCheckout.order_code}`);
          });
      },
    },
    beforeMount() {
      this.fetchProduct();
      this.fetchAddress();
    },
  
    mounted() {
      this.fetchKeranjang();
      this.fetchAddress();
    },
    created() {
        this.fetchAddress();
        this.fetchUser();
    }
  }
  </script>