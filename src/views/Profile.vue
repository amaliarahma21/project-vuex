<template>
  <br>
  <br>
    <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <img class="mx-auto h-auto w-full rounded-full" src="https://img.freepik.com/premium-vector/cute-muslim-girl-cartoon-character_426162-223.jpg" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-black">{{ userData.name}}</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-black">{{ userData.email }}</h3>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>No. Telepon</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ address.phone }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Alamat</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ address.address }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Kota</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ address.city }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Provinsi</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ address.state }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Negara</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ address.country }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Order</span>
        <span class="ml-auto"><span class="rounded-full bg-purple-300 py-1 px-2 text-xs font-medium text-purple-700">{{ getDashboard.total_order_products}}</span></span>
      </li>
    </ul>
  </div>
</div>
</center>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        data(){
            return{
                uData : [],
            }
        },
        computed: {
            ...mapState('users', ['userData']),
            ...mapState('keranjang', ['address']),
            ...mapGetters('keranjang', ['getAddress']),
            ...mapGetters('users', ['getDashboard'])
        },
        methods: {
            ...mapActions('users', ['fetchUser']),
            ...mapActions('keranjang', ['fetchAddress']),
            ...mapActions('users', ['fetchDashboard']),
            ...mapActions('keranjang', ['fetchKeranjang'])
        },
        created() {
            this.uData = this.fetchUser();
            this.fetchAddress();
            this.fetchDashboard();
            this.fetchKeranjang();
        },
        
    }
</script>